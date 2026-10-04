import { createServer, loadEnv } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const env = loadEnv('production', process.cwd(), '');
const configuredUrl = process.env.SITE_URL || env.SITE_URL;
let siteUrl;
if (configuredUrl) {
  const parsed = new URL(configuredUrl);
  if (parsed.protocol !== 'https:' || parsed.username || parsed.password || parsed.search || parsed.hash || parsed.pathname !== '/' || parsed.hostname === 'localhost') {
    throw new Error('SITE_URL must be the public HTTPS origin of the clinic website.');
  }
  siteUrl = parsed.origin + '/';
}
const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const server = await createServer({ server: { middlewareMode: true, watch: null }, appType: 'custom' });
try {
  const { default: App, services } = await server.ssrLoadModule('/src/App.jsx');
  let markup = renderToString(createElement(App));
  // Match the browser's versioned image URLs in pre-rendered HTML.
  const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
  for (const [source, asset] of Object.entries(manifest)) {
    if (source.startsWith('src/assets/')) {
      markup = markup.replaceAll('"/' + source + '"', '"/' + asset.file + '"');
    }
  }
  if (markup.includes('src="/src/assets/')) throw new Error('Unresolved source asset in pre-rendered HTML.');
  const path = 'dist/index.html';
  let html = await readFile(path, 'utf8');
  const template = html;
  if (!html.includes('<div id="root"></div>')) throw new Error('Expected empty build root.');
  html = html.replace('<div id="root"></div>', () => '<div id="root">' + markup + '</div>');
  // Keep service structured data aligned with the visible service cards.
  html = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/, (_, json) => {
    const schema = JSON.parse(json);
    schema.description = 'Family dental care in Dhankawadi, Pune, including dental checkups, dental implants, root canal treatment and cosmetic dentistry.';
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Dental services',
      itemListElement: services.map(([name, items]) => ({
        '@type': 'OfferCatalog', name,
        itemListElement: items.map(name => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name }
        }))
      }))
    };
    if (siteUrl) {
      schema.url = siteUrl;
      schema['@id'] = siteUrl + '#clinic';
      schema.image = new URL('/images/logo-white-transparent.png', siteUrl).href;
    }
    return '<script type="application/ld+json">' + JSON.stringify(schema).replace(/</g, '\\u003c') + '</script>';
  });
  let robots = 'User-agent: *\nAllow: /\n';
  if (siteUrl) {
    html = html.replace('</head>', '<link rel="canonical" href="' + escape(siteUrl) + '"/><meta property="og:url" content="' + escape(siteUrl) + '"/></head>');

    await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>' + escape(siteUrl) + '</loc></url><url><loc>' + escape(siteUrl + 'faqs/') + '</loc></url></urlset>\n');
    robots += 'Sitemap: ' + siteUrl + 'sitemap.xml\n';
  } else {
    console.log('SITE_URL is not set: canonical URL and sitemap will be generated once a domain is configured.');
  }
  await writeFile(path, html);
  const { default: FAQsPage } = await server.ssrLoadModule('/src/FAQsPage.jsx');
  const faqMarkup = renderToString(createElement(FAQsPage));
  const faqTitle = 'Dental FAQs & Treatment Guide | Shree Sainath Hospital Dental Clinic';
  const faqDescription = 'Answers about dental implants, smile makeovers, fillings and visiting Dr. Dhiraj Zanwar in Dhankawadi, Pune.';
  let faqHtml = template
    .replace('<div id="root"></div>', () => '<div id="root">' + faqMarkup + '</div>')
    .replace(/<title>.*?<\/title>/, '<title>' + escape(faqTitle) + '</title>')
    .replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*/, '$1' + escape(faqTitle))
    .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g, '$1' + escape(faqDescription));
  // Update both social titles using the same page-specific value.
  faqHtml = faqHtml.replace(/(<meta name="twitter:title" content=")[^"]*/, '$1' + escape(faqTitle));
  if (siteUrl) {
    faqHtml = faqHtml.replace('</head>', '<link rel="canonical" href="' + escape(siteUrl + 'faqs/') + '"/><meta property="og:url" content="' + escape(siteUrl + 'faqs/') + '"/></head>');
  }
  if ((markup.match(/<details>/g) || []).length !== 5 || !markup.includes('href="/faqs/"') || (faqMarkup.match(/<details>/g) || []).length !== 17) throw new Error('FAQ page validation failed.');
  await mkdir('dist/faqs', { recursive: true });
  await writeFile('dist/faqs/index.html', faqHtml);
  await writeFile('dist/robots.txt', robots);
  if ((markup.match(/patientlogin.php/g) || []).length !== 3 || !markup.includes('<h1>') || !markup.includes('Dhankawadi')) throw new Error('Pre-render validation failed.');
  console.log('Pre-rendered clinic content and verified all three booking links.');
} finally {
  await server.close();
}
