import Home from "./pages/HomePage";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashPage";
import GalleryPage from "./pages/GalleryPage";
import useLocalStorage from "use-local-storage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/GlobalStyles";
import { lightTheme, darkTheme } from "./themes/themes";
import Bowser from "bowser";

function App() {
  // eslint-disable-next-line
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [browserSettings, setBrowiserSettings] = useState({});
  const browser = Bowser.getParser(window.navigator.userAgent);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    });
    setBrowiserSettings({
      name: browser.parsedResult.browser.name,
      os: browser.parsedResult.os.name,
    });
  }, [browser.parsedResult.browser.name, browser.parsedResult.os.name]);
  // simulate loading time to assets to load while splashscreen showing
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [startTime] = useState(Date.now());

  // localstorage states, matching system theme settings and/or creating new settings saved in cache
  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);

  const toggleTheme = (newTheme) => {
    if (newTheme !== theme) {
      setTheme(newTheme);
    }
  };

  useEffect(() => {
    const minimumLoadingTime = setTimeout(() => {
      setReady(true);
    }, 1500); // Minimum 1.5 seconds

    // Simulate loading of assets/data
    const simulateLoading = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate 2 seconds loading time for assets/data

    return () => {
      clearTimeout(minimumLoadingTime);
      clearTimeout(simulateLoading);
    };
  }, []);

  useEffect(() => {
    if (ready && !loading) {
      const endTime = Date.now();
      const loadTime = endTime - startTime;
      console.log(`All assets are ready. Page load time: ${loadTime} ms`);
      setLoading(false);
    }
  }, [ready, loading, startTime]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        {loading ? (
          <SplashScreen />
        ) : (
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    theme={theme}
                    toggleTheme={toggleTheme}
                    browserSettings={browserSettings}
                    deferredPrompt={deferredPrompt}
                  />
                }
              />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </Router>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
