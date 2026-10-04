# Search setup

Run npm run build and deploy the dist directory. The build pre-renders the React page, including service content and patient FAQs, and adds robots.txt. Dentist structured data lists the same services as the visible service cards.

When you purchase your domain, set SITE_URL to the full HTTPS origin in your hosting build environment (or .env.production), then rebuild. This generates the canonical URL, og:url, clinic URL, image URL, and sitemap.xml. Until configured, these are intentionally omitted. The booking portal is not the clinic domain.

After launch, verify the domain in Google Search Console and submit /sitemap.xml. Add the website to your Google Business Profile and keep the clinic name, phone, address, hours and services consistent. Check the deployed page with Google's Rich Results Test and URL Inspection. Monitor real search queries, indexing and mobile performance.

## Keyword coverage from SEO Keywords.pdf

| Keyword group | Implementation |
| --- | --- |
| Dentist / dental clinic in Pune and Dhankawadi | Title, description, visible copy, location FAQ and Dentist structured data |
| Dentist near me | Accurate address, local landmarks, hours and directions; no repeated near-me wording |
| Family dentist accepting new patients | Hero, new-patient section and FAQ |
| Sunday / weekend dentist | Visible opening hours and Sunday appointment FAQ |
| Dental checkup, teeth cleaning, dental fillings | Service cards and services introduction |
| Root canal treatment, crowns and bridges | Restorative Dentistry card |
| Teeth whitening, porcelain veneers, smile makeover | Cosmetic Dentistry card |
| Dental implants, tooth extraction, wisdom teeth removal | Surgical services card and implant section |
| Braces and clear aligners | Specialized Care card |
| Pediatric / kids dental care | Pediatric Dental Care card and family-care FAQ |
| Emergency dentist, toothache, chipped tooth, dental trauma | Emergency appointment FAQ, with availability limited to clinic hours |
| Sensitive teeth, bleeding gums, bad breath | Dental checkup FAQ; no diagnosis or guaranteed treatment result |
| Dental anxiety | Appointment FAQ grounded in the existing comfort-focused approach |

## Terms that need confirmation

Do not add best/top-rated claims, guaranteed results, specialist titles (endodontist or pediatric specialist), walk-in/same-day/24-hour availability, dentures, TMJ treatment, insurance acceptance, discounts, financing or payment plans without confirming them. Invisalign was already in the supplied service copy; confirm brand availability before publishing. No prices or consultation charges were added.

The PDF is a keyword reference, not verified search-volume research. Its recommendations for separate pages were not applied because the chosen site structure is one page with descriptive section links. No keyword-stuffed blocks or meta keywords tag were added.

Confirm the displayed Google rating against the connected profile. The existing fallback rating is not verified and is not included in structured data. Configure the Places integration as described in GOOGLE_REVIEWS.md when credentials are available.

Google does not guarantee first-place rankings. Official guidance:
https://developers.google.com/search/docs/fundamentals/seo-starter-guide
