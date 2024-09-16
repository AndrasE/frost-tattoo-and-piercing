import React, { useState, useEffect } from "react";

const PWABtn = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null); // Store the prompt event

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent automatic prompt
      setDeferredPrompt(event); // Save the event to trigger it later
      console.log("beforeinstallprompt event:", event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      console.error("No deferred prompt available");
      return;
    }

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the PWA installation");
    } else {
      console.log("User dismissed the PWA installation");
    }

    setDeferredPrompt(null); // Reset prompt after user choice
  };

  return (
    <div>
      <button onClick={handleInstallClick}>Install PWA</button>
    </div>
  );
};

export default PWABtn;
