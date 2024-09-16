import React, { useState, useEffect } from "react";

const PWABtn = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isChromium, setIsChromium] = useState(false);
  const [isNonChromium, setIsNonChromium] = useState(false);

  // Function to detect if the browser is Chromium-based
  const detectBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("chrome") && !userAgent.includes("edg")) {
      setIsChromium(true); // If it's a Chromium-based browser
    } else if (userAgent.includes("firefox") || userAgent.includes("safari")) {
      setIsNonChromium(true); // For Safari or Firefox
    }
  };

  useEffect(() => {
    detectBrowser();

    // Handle the 'beforeinstallprompt' event for Chromium browsers
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setDeferredPrompt(event); // Save the event for later
      setIsPromptVisible(true); // Show the install button
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", () => {});
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // Show the install prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null); // Clear the deferredPrompt
      setIsPromptVisible(false); // Hide the install button
    });
  };

  return (
    <div>
      {isChromium && <button onClick={handleInstallClick}>Install PWA</button>}
      {isNonChromium && (
        <div>
          {/* Custom instructions for Firefox or Safari */}
          <button>How to install on Firefox/Safari</button>
          {/* You can trigger a modal or custom pop-up with instructions here */}
        </div>
      )}
    </div>
  );
};

export default PWABtn;
