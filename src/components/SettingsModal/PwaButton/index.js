import React, { useState, useEffect } from "react";

const PWABtn = () => {
  const [isPromptVisible, setIsPromptVisible] = useState(false); // Show/hide install button
  const [deferredPrompt, setDeferredPrompt] = useState(null); // Store the prompt event

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event); // Store the event to trigger it later
      setIsPromptVisible(true); // Show the install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return; // Ensure deferredPrompt is available

    // Show the prompt to the user
    deferredPrompt.prompt();

    // Wait for the user's choice
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the PWA installation");
    } else {
      console.log("User dismissed the PWA installation");
    }

    // Reset the deferredPrompt so it can't be reused
    setDeferredPrompt(null);
    setIsPromptVisible(false); // Hide the button after interaction
  };

  return (
    <div>
      {isPromptVisible && (
        <button onClick={handleInstallClick}>Install PWA</button>
      )}
    </div>
  );
};

export default PWABtn;
