import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="mt-10 border-t border-white/10 py-16">
      <div className="section-container flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <button
            onClick={() => scrollTo("home")}
            className="font-display text-lg font-bold"
          >
            <span className="text-primary">&lt;</span>
            Asad
            <span className="text-secondary">/&gt;</span>
          </button>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            MERN Stack Developer building responsive, user-friendly web
            applications from Multan, Pakistan.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://github.com/MuhammadAsad86"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              <FiGithub size={16} />
            </a>

            <a
              href="https://linkedin.com/in/muhammadasad86"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              <FiLinkedin size={16} />
            </a>

            <a
              href="mailto:rootedasad@gmail.com"
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>

        <nav aria-label="Footer quick links">
          <h4 className="mb-4 font-mono text-xs text-muted">
            Quick Links
          </h4>

          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="mb-4 font-mono text-xs text-muted">Contact</h4>

          <p className="text-sm text-muted">rootedasad@gmail.com</p>
          <p className="mt-1.5 text-sm text-muted">+92 312 0611513</p>
          <p className="mt-1.5 text-sm text-muted">Multan, Pakistan</p>
        </div>
      </div>
<div className="section-container relative top-8 mt-12 font-mono text-xs text-muted">
  <div className="border-t border-white/10 pt-6 flex flex-col justify-between gap-3 sm:flex-row">
    <span>
      © {new Date().getFullYear()} Muhammad Asad. All rights reserved.
    </span>

    <span>
      Built with React, Tailwind CSS &amp; Framer Motion
    </span>
  </div>
</div>
    </footer>
  );
}