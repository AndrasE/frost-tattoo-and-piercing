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
    const swUrl = new URL("./service-worker.js", import.meta.url);

    navigator.serviceWorker
      .register(swUrl)
      .then((reg) => console.log("✅ Service Worker registered:", reg.scope))
      .catch((err) => console.error("❌ SW registration failed:", err));
  });
}
