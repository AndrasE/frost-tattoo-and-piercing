import React, { useState, useEffect } from "react";

const PWABtn = () => {
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      // Save the event so it can be triggered later
      setDeferredPrompt(event);
      // Show the install button
      setIsPromptVisible(true);
    };

    // Listen for the 'beforeinstallprompt' event
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      // Reset the deferred prompt variable
      setDeferredPrompt(null);
      // Hide the install button
      setIsPromptVisible(false);
    });
  };

  return (
    <div>
      {isPromptVisible && (
        <button style={{ color: "red" }} onClick={handleInstallClick}>
          Install PWA
        </button>
      )}
    </div>
  );
};

export default PWABtn;
