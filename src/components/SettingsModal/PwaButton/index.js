import React, { useState, useEffect } from "react";

const PWABtn = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null); // Store the prompt event
  const [isPromptSupported, setIsPromptSupported] = useState(false); // Controls button visibility

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event); // Store the event to trigger it later
      setIsPromptSupported(true); // Show button when PWA install is supported
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
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the PWA installation");
    } else {
      console.log("User dismissed the PWA installation");
    }

    setDeferredPrompt(null);
  };

  return (
    <div>
      {isPromptSupported && ( // Conditionally render the button based on PWA support
        <button onClick={handleInstallClick}>Install PWA</button>
      )}
    </div>
  );
};

export default PWABtn;
