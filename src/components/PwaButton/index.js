import React, { useState, useEffect } from "react";

const PWABtn = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null); // Store the prompt event
  const [isPromptSupported, setIsPromptSupported] = useState(false); // State to check if install is supported

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent automatic prompt
      setDeferredPrompt(event); // Save the event to trigger it later
      setIsPromptSupported(true); // Show the button if the event is available
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
      {isPromptSupported && (
        <button onClick={handleInstallClick}>Install PWA</button>
      )}
    </div>
  );
};

export default PWABtn;
