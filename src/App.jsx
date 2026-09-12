import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";
import LoadingScreen from "./components/ui/LoadingScreen";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectCaseStudy from "./components/projects/ProjectCaseStudy";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-primary px-4 py-2.5 font-mono text-xs text-white transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <LoadingScreen show={loading} />
      <ScrollProgress />
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Project Case Studies */}
        <Route
          path="/projects/nexaflow"
          element={<ProjectCaseStudy projectId="nexaflow" />}
        />

        <Route
          path="/projects/ra-collection"
          element={<ProjectCaseStudy projectId="ra-collection" />}
        />

        <Route
          path="/projects/mern-blog"
          element={<ProjectCaseStudy projectId="mern-blog" />}
        />

        <Route
          path="/projects/shelf-life"
          element={<ProjectCaseStudy projectId="shelf-life" />}
        />

        <Route
          path="/projects/geofind"
          element={<ProjectCaseStudy projectId="geofind" />}
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <BackToTop />
    </>
  );
}