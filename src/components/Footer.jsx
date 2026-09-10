import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <footer
      className="mt-10 border-t border-border py-16"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <div className="section-container flex flex-col justify-between gap-10 md:flex-row">
        {/* Brand */}
        <div>
          <button
            onClick={() => scrollTo("home")}
            className="group flex h-16 w-[220px] items-center overflow-visible"
            aria-label="Go to top"
          >
            <img
              src="/images/logo.png"
              alt="RootedAsad"
              className="block h-14 w-auto max-w-none origin-left object-contain transition-all duration-300 ease-out group-hover:scale-[1.08]"
            />
          </button>

          <p
            className="mt-3 max-w-xs text-sm leading-relaxed"
            style={{
              color: "var(--color-muted)",
            }}
          >
            MERN Stack Developer building responsive, user-friendly web
            applications from Multan, Pakistan.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/MuhammadAsad86"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group relative grid h-10 w-10 place-items-center rounded-full border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10"
              style={{
                color: "var(--color-muted)",
              }}
            >
              <FiGithub
                size={17}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
              />

              <span
                className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2.5 py-1 font-mono text-[10px] opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100"
                style={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                }}
              >
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/muhammadasad86"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group relative grid h-10 w-10 place-items-center rounded-full border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10"
              style={{
                color: "var(--color-muted)",
              }}
            >
              <FiLinkedin
                size={17}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
              />

              <span
                className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2.5 py-1 font-mono text-[10px] opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100"
                style={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                }}
              >
                LinkedIn
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:rootedasad@gmail.com"
              aria-label="Email"
              className="group relative grid h-10 w-10 place-items-center rounded-full border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10"
              style={{
                color: "var(--color-muted)",
              }}
            >
              <FiMail
                size={17}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
              />

              <span
                className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2.5 py-1 font-mono text-[10px] opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100"
                style={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                }}
              >
                Email
              </span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer quick links">
          <h4
            className="mb-4 font-mono text-xs"
            style={{
              color: "var(--color-muted)",
            }}
          >
            Quick Links
          </h4>

          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="group relative text-sm transition-all duration-300 hover:translate-x-1 hover:text-primary"
                  style={{
                    color: "var(--color-muted)",
                  }}
                >
                  <span>{l.label}</span>

                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h4
            className="mb-4 font-mono text-xs"
            style={{
              color: "var(--color-muted)",
            }}
          >
            Contact
          </h4>

          <a
            href="mailto:rootedasad@gmail.com"
            className="group block w-fit text-sm transition-colors duration-300 hover:text-primary"
            style={{
              color: "var(--color-muted)",
            }}
          >
            <span>rootedasad@gmail.com</span>
            <span className="ml-2 inline-block opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </a>

          <p
            className="mt-1.5 text-sm"
            style={{
              color: "var(--color-muted)",
            }}
          >
            +92 312 0611513
          </p>

          <p
            className="mt-1.5 text-sm"
            style={{
              color: "var(--color-muted)",
            }}
          >
            Multan, Pakistan
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="section-container relative top-8 mt-12 font-mono text-xs"
        style={{
          color: "var(--color-muted)",
        }}
      >
        <div className="flex flex-col justify-between gap-3 border-t border-border pt-6 sm:flex-row">
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