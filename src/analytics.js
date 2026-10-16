// Optional GA4: no requests are made until a real measurement ID is configured.
export function initializeAnalytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  if (!import.meta.env.PROD || !/^G-[A-Z0-9]+$/.test(id || '')) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  // Keep query strings and fragments (which can contain patient details) out of page views.
  window.gtag('config', id, {
    page_location: window.location.origin + window.location.pathname,
    page_title: document.title,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(script);
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[href]');
    if (!link) return;
    const url = new URL(link.href, window.location.href);
    let name;
    if (url.protocol === 'tel:') name = 'click_call';
    else if (url.hostname === 'wa.me') name = 'click_whatsapp';
    else if (url.hostname === 'doctecqclinic.com') name = 'click_book_appointment';
    if (name) window.gtag('event', name, { transport_type: 'beacon' });
  });
}
