import React, { useEffect } from "react";

let deferredPrompt;

function PWABtn() {
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("here:", e);
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
    });

    window.addEventListener("appinstalled", () => {
      // Log install to analytics
      console.log("INSTALL: Success");
    });
  }, []);

  const handleInstallClick = (e) => {
    // Hide the app provided install promotion
    // Show the install prompt
    console.log("clicked", deferredPrompt);
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Install Demo</h2>

        <button className="install-button" onClick={handleInstallClick}>
          INSTALL ME
        </button>
      </header>
    </div>
  );
}

export default PWABtn;
