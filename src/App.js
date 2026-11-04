import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDisplay from "./pages/ProjectDisplay";
import Projects from "./pages/Projects";

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.body.classList.remove("menu-open");

    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <div className="site-frame">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDisplay />} />
            <Route path="/project/:id" element={<Navigate to="/projects/fitbuddy" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
