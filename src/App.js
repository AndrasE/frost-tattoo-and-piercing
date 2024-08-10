import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [startTime] = useState(Date.now());

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

  window.addEventListener("load", function () {
    // Scroll to 0,1 to hide the address bar
    setTimeout(function () {
      window.scrollTo(0, 1);
    }, 10);
  });

  useEffect(() => {
    const hideAddressBar = () => {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 10);
    };

    window.addEventListener("load", hideAddressBar);

    return () => {
      window.removeEventListener("load", hideAddressBar);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
