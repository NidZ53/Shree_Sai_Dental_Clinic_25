# Sitemap and Analytics setup

Changes are applied to both the repository root and the nested `Shree_Sai_Dental_Clinic_25` project, since either can be selected as the Vercel root directory. Build from the directory configured in Vercel.

## Sitemap

`npm run build` creates `dist/sitemap.xml`, `dist/robots.txt`, and a separate canonical URL for the homepage and FAQ page. The sitemap lists only `/` and `/faqs/`, the two pages that currently exist. Section anchors and proposed service pages are not separate live pages. No artificial last-modified dates are emitted.

The default origin is https://shree-sai-dental-clinic-25.vercel.app. When a custom domain is ready, set `SITE_URL=https://your-domain.in` in Vercel's environment variables and redeploy. Use the same preferred origin that Vercel redirects to.

After deployment, open `/sitemap.xml` and `/robots.txt` on that origin. Verify the final domain in Google Search Console (a Domain property uses a DNS TXT record), then submit `sitemap.xml` under Sitemaps. Submission requires access to your Google account and DNS; it has not been done by this code change.

## Google Analytics 4

1. Visit https://analytics.google.com/ and create an Analytics account/property for the clinic. Choose India, the India reporting time zone, and INR.
2. Under Admin → Data collection and modification → Data streams, add a Web stream for the production website.
3. Copy its Measurement ID, starting with `G-`.
4. In Vercel → project → Settings → Environment Variables, add `VITE_GA_MEASUREMENT_ID=G-YOURID` for Production. Redeploy: Vite embeds this value at build time. For local production testing, use `.env.local`, run `npm run build`, then `npm run preview`. Development mode intentionally does not load Analytics.
5. Open the deployed website and check GA4 Realtime (or Google Tag Assistant). Click Call, WhatsApp, and Book Appointment to verify the respective events: `click_call`, `click_whatsapp`, `click_book_appointment`.
6. Mark these events as key events in GA4. They measure booking intent, not completed appointments in the external booking portal.

The integration is ready but remains inactive until a valid ID is supplied. Avoid adding a second Google tag through Google Tag Manager or another plugin, which would double-count visits.

No patient names, messages, phone numbers, or link destinations are attached to custom events. Page locations exclude query strings and fragments. In the Web stream settings, disable automatic form interactions and site-search collection if those might capture patient information. Google Analytics is an external service; update your privacy notice and connect your consent management setup before activation wherever consent is required. No consent manager is included here.

## Images

The original tooth illustration is used in the hero. The About section uses an optimized doctor portrait. Large logo, implant, equipment and service images use compressed WebP files; original source images are retained. Service illustrations have consistent frames. No stock or generated imagery is presented as a real clinic photograph. Real interior/exterior photographs can be added when supplied.

## Official references

- https://support.google.com/analytics/answer/14183469
- https://developers.google.com/analytics/devguides/collection/ga4/web
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
