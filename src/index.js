import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./translations/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Register Service Worker (in both dev & prod)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("✅ Service Worker registered:", registration.scope);

        // Optional: auto-update when new SW is found
        registration.onupdatefound = () => {
          const newWorker = registration.installing;
          newWorker.onstatechange = () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              console.log("⚡ New content available; please refresh.");
            }
          };
        };
      })
      .catch((error) => {
        console.error("❌ Service Worker registration failed:", error);
      });
  });
}
