import React, { useState, useEffect } from "react";

function PWABtn() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [manifestLoaded, setManifestLoaded] = useState(false);

  useEffect(() => {
    // Check if PWA manifest is loaded
    fetch("manifest.json")
      .then((response) => {
        if (response.ok) {
          setManifestLoaded(true);
        } else {
          console.error("Error loading PWA manifest");
        }
      })
      .catch((error) => {
        console.error("Error loading PWA manifest:", error);
      });
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    });
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };
  return (
    <div>
      {manifestLoaded && deferredPrompt && (
        <button onClick={handleInstall}>Install</button>
      )}
    </div>
  );
}
export default PWABtn;
