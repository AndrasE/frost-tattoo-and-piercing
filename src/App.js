import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [isTimout, setIsTimeout] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimeout(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const removeLoader = () => setLoading(false);
    window.addEventListener("load", removeLoader);
    return window.removeEventListener("load", removeLoader);
  }, []);

  if (isTimout || !loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
