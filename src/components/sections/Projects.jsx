import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import SectionHeading from "../ui/SectionHeading";
import ProjectCaseStudy from "../projects/ProjectCaseStudy";

/* ========================== PROJECTS SECTION ========================== */

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    const handleProjectMessage = (event) => {
      if (event.origin !== window.location.origin) return;

      const { type, projectId } = event.data || {};

      if (type === "open-project-case-study" && projectId) {
        setSelectedProjectId(projectId);
      }
    };

    window.addEventListener("message", handleProjectMessage);

    return () => {
      window.removeEventListener("message", handleProjectMessage);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProjectId(null);
      }
    };

    if (selectedProjectId) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedProjectId]);

  return (
    <>
      <section
        id="projects"
        className="py-20 md:py-24"
        aria-labelledby="projects-heading"
      >
        <div className="section-container">
          <SectionHeading
            headingId="projects-heading"
            eyebrow="03 · Projects"
            title="Things I've built"
            subtitle="A selection of projects showcasing my full-stack and frontend development work."
          />

          <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/20">
            <iframe
              src="/projects-showcase.html"
              title="Projects showcase"
              loading="eager"
              fetchPriority="high"
              className="block h-[400px] w-full sm:h-[440px] lg:h-[480px]"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProjectId && (
          <ProjectCaseStudy
            projectId={selectedProjectId}
            onClose={() => setSelectedProjectId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}