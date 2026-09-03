import SectionHeading from "../ui/SectionHeading";

/* ========================== PROJECTS SECTION ========================== */

export default function Projects() {
  return (
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

        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/20">
          <iframe
            src="/projects-showcase.html"
            title="Projects showcase"
            loading="lazy"
            className="block h-[400px] w-full sm:h-[440px] lg:h-[480px]"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </section>
  );
}