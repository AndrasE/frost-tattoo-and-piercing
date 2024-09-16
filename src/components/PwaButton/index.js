import React, { useState, useEffect } from "react";

const PWABtn = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null); // Store the prompt event
  const [isPromptSupported, setIsPromptSupported] = useState(false); // Controls button visibility

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setIsPromptSupported(true);
      console.log("Simulated beforeinstallprompt event");
    };

    setTimeout(() => {
      window.dispatchEvent(new Event("beforeinstallprompt")); // Simulate event
    }, 3000); // Simulate after 3 seconds

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
