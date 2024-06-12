import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;
