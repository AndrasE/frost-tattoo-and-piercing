import Home from "./pages/home";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import GalleryPage from "./pages/GalleryPage";
import useLocalStorage from "use-local-storage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/GlobalStyles";
import { lightTheme, darkTheme } from "./themes/themes";

function App() {
  // simulate loading time to assets to load while splashscreen showing
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [startTime] = useState(Date.now());

  // localstorage states, matching system theme settings and/or creating new settings saved in cache
  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
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
          <SplashScreen theme={theme} />
        ) : (
          <Router>
            <Routes>
              <Route
                path="/"
                element={<Home theme={theme} toggleTheme={toggleTheme} />}
              />
              <Route path="/gallery" element={<GalleryPage theme={theme} />} />
            </Routes>
          </Router>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
