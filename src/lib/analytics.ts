// src/lib/analytics.ts

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
    _fbq?: any;
  }
}

/**
 * Update Consent Mode v2 signals
 */
export function updateConsent(consent: {
  analytics: boolean;
  ads: boolean;
}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "update_consent",
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.ads ? "granted" : "denied",
    ad_user_data: consent.ads ? "granted" : "denied",
    ad_personalization: consent.ads ? "granted" : "denied"
  });
}

/**
 * Initialize Meta Pixel ONLY AFTER targeting consent
 */
export function initMetaPixel() {
  if (window.fbq) return; // avoid duplicate loading

  (function (f: any, b: Document, e: string, v?: string, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function (...args: any[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = "https://connect.facebook.net/en_US/fbevents.js";
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script");

  window.fbq?.("init", "1665240137305616");  // YOUR PIXEL ID
  window.fbq?.("track", "PageView");
}
