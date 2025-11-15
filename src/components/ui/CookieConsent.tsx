import React, { useEffect, useState } from "react";
import { updateConsent, initMetaPixel } from "../../lib/analytics";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);

  const [cookiePrefs, setCookiePrefs] = useState({
    functional: false,
    performance: false,
    targeting: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookieConsent");

    if (!saved) {
      setIsVisible(true);
      return;
    }

    const prefs = JSON.parse(saved);

    // update Consent Mode v2 signals
    updateConsent({
      analytics: prefs.performance,
      ads: prefs.targeting
    });

    // If targeting allowed, load Meta Pixel
    if (prefs.targeting) {
      initMetaPixel();
    }
  }, []);

  const handleAcceptAll = () => {
    const prefs = {
      functional: true,
      performance: true,
      targeting: true,
    };

    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    setIsVisible(false);

    updateConsent({
      analytics: true,
      ads: true
    });

    initMetaPixel();
  };

  const handleDecline = () => {
    const prefs = {
      functional: false,
      performance: false,
      targeting: false,
    };

    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    setIsVisible(false);

    updateConsent({
      analytics: false,
      ads: false
    });
  };

  const handleSavePrefs = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(cookiePrefs));
    setIsVisible(false);
    setShowPrefs(false);

    updateConsent({
      analytics: cookiePrefs.performance,
      ads: cookiePrefs.targeting
    });

    if (cookiePrefs.targeting) {
      initMetaPixel();
    }
  };

  const toggle = (key) =>
    setCookiePrefs((prev) => ({ ...prev, [key]: !prev[key] }));

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      {!showPrefs ? (
        <>
          <button className="cookie-close" onClick={() => setIsVisible(false)}>×</button>
          <p><strong>We Rely on Cookies</strong></p>
          <p>
            We use cookies to optimize your experience. You may Accept All,
            Decline, or choose Custom Preferences.
          </p>
          <div className="actions">
            <button onClick={handleAcceptAll}>Accept All</button>
            <button onClick={handleDecline}>Decline</button>
            <button onClick={() => setShowPrefs(true)}>Customise</button>
          </div>
        </>
      ) : (
        <div>
          <button className="cookie-close" onClick={() => setIsVisible(false)}>×</button>
          <p><strong>Manage Cookie Preferences</strong></p>

          <label>
            <input type="checkbox"
              checked={cookiePrefs.functional}
              onChange={() => toggle("functional")}
            /> Functional
          </label>

          <label>
            <input type="checkbox"
              checked={cookiePrefs.performance}
              onChange={() => toggle("performance")}
            /> Performance / Analytics
          </label>

          <label>
            <input type="checkbox"
              checked={cookiePrefs.targeting}
              onChange={() => toggle("targeting")}
            /> Targeting / Advertising
          </label>

          <button onClick={handleSavePrefs}>Save Preferences</button>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
