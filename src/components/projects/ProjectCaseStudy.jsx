import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiFlag,
  FiGitBranch,
  FiLayers,
  FiTarget,
  FiZap,
  FiX,
} from "react-icons/fi";

const PROJECTS = {
  nexaflow: {
    title: "NexaFlow",
    stack: "React · Node · Express · MongoDB",
    image: "/images/nexaflow.png",
    description:
      "A MERN-stack project management and team collaboration platform with role-based permissions, task routing, and an audited security model.",
    year: "2026",
    role: "Full Stack",
    live: "https://project-beta-henna-46.vercel.app",
    repo:
      "https://github.com/MuhammadAsad86/Project-Management-Team-Collaboration-Platform",
    problem:
      "Development teams need a centralized platform to manage projects, tasks, responsibilities, and access permissions without relying on disconnected tools.",
    solution:
      "NexaFlow was built as a full-stack collaboration platform with role-based access control, protected workflows, task management, and a secure MERN architecture.",
    features: [
      "Role-based access control",
      "Project and task management",
      "Task assignment and tracking",
      "Protected routes and authentication",
      "Security-audited authorization flow",
    ],
    challenges:
      "Designing authorization rules for multiple user roles while keeping project and task access secure and predictable across the application.",
    result:
      "A complete full-stack collaboration platform with structured project workflows, permission-aware features, and a scalable MERN architecture.",
  },

  "ra-collection": {
    title: "RA Collection",
    stack: "React · Node · Express · MongoDB",
    image: "/images/ra-collection.png",
    description:
      "A modern full-stack MERN e-commerce platform with product collections, shopping features, and a responsive user experience.",
    year: "2026",
    role: "Full Stack",
    live: "https://ecommerce-web-application-dusky.vercel.app/",
    repo:
      "https://github.com/MuhammadAsad86/ecommerce-web-application-",
    problem:
      "Online shoppers need a simple and responsive way to browse products, explore collections, and manage shopping activity from a single platform.",
    solution:
      "RA Collection was developed as a full-stack e-commerce application using the MERN stack, connecting a responsive frontend with backend APIs and MongoDB data management.",
    features: [
      "Product browsing and collections",
      "Product detail experience",
      "Shopping cart functionality",
      "Responsive storefront",
      "Full-stack MERN architecture",
    ],
    challenges:
      "Keeping product data, collection views, cart interactions, and frontend state synchronized while maintaining a responsive user experience.",
    result:
      "A functional MERN e-commerce platform that provides a clean shopping experience with structured product management and responsive UI.",
  },

  "mern-blog": {
    title: "StackFrame",
    stack: "React · Redux Toolkit · Node · Express · MongoDB · JWT",
    image: "/images/mern-blog.png",
    description:
      "A full-featured MERN blogging platform with secure authentication, protected routes, content management, and interactive blog features.",
    year: "2026",
    role: "Full Stack",
    live: "https://mern-blog-theta-lilac.vercel.app/",
    repo: "https://github.com/MuhammadAsad86/mern-blog",
    problem:
      "A modern blogging application requires secure authentication, structured content management, and predictable state handling for an interactive user experience.",
    solution:
      "StackFrame combines React, Redux Toolkit, Node.js, Express, MongoDB, and JWT authentication to provide secure access, protected routes, and complete blog content workflows.",
    features: [
      "JWT authentication and protected routes",
      "Complete CRUD operations",
      "Redux Toolkit state management",
      "Blog content management",
      "Interactive frontend experience",
    ],
    challenges:
      "Managing authentication state, protected routes, CRUD operations, and global frontend state while keeping the application architecture organized.",
    result:
      "A complete MERN blogging platform with secure authentication, reliable content workflows, and centralized frontend state management.",
  },

  "shelf-life": {
    title: "Shelf Life",
    stack: "React · Node · Express · MongoDB · JWT",
    image: "/images/shelflife.png",
    description:
      "A full-stack personal library and reading tracker for managing books, tracking reading progress, and organizing a personal reading collection.",
    year: "2026",
    role: "Full Stack",
    live: "https://shelf-life-eta.vercel.app/",
    repo: "https://github.com/MuhammadAsad86/shelf-life",
    problem:
      "Readers need a simple place to organize their books, track reading progress, and manage their personal library without depending on scattered notes or apps.",
    solution:
      "Shelf Life provides a full-stack personal library system with authentication, book management, reading progress tracking, and organized collection workflows.",
    features: [
      "Personal library management",
      "Reading progress tracking",
      "Book search and discovery",
      "Ratings and reviews",
      "JWT authentication",
    ],
    challenges:
      "Building a consistent reading-state workflow while keeping authenticated user data, library records, and reading progress synchronized.",
    result:
      "A focused personal library and reading tracker that combines secure authentication with practical book organization and reading management.",
  },

  geofind: {
    title: "GeoFind",
    stack: "React · Node · Express · MongoDB · Redis · MapLibre",
    image: "/images/geofind.png",
    description:
      "A geospatial search engine built with the MERN stack for location-based search, ranking, and optimized geographic queries.",
    year: "2026",
    role: "Full Stack",
    live: "https://geo-find-one.vercel.app/",
    repo: "https://github.com/MuhammadAsad86/GeoFind",
    problem:
      "Location-based applications need efficient geographic search, ranking, and caching to return useful nearby results without unnecessary database overhead.",
    solution:
      "GeoFind combines MongoDB geospatial queries, 2dsphere indexing, Redis caching, MapLibre, and a MERN architecture to create an optimized location-search experience.",
    features: [
      "Geospatial search with MongoDB",
      "Location-based result ranking",
      "2dsphere indexing and geo queries",
      "Redis caching and query optimization",
      "MapLibre map experience",
    ],
    challenges:
      "Designing efficient geospatial queries, indexing location data correctly, and reducing repeated query costs through caching.",
    result:
      "A location-focused search engine demonstrating practical geospatial indexing, ranking, caching, and map-based discovery.",
  },
};

const ProjectCaseStudy = ({ projectId, onClose }) => {
  const project = PROJECTS[projectId];

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-6 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div className="mx-auto flex min-h-full w-full max-w-7xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#090909] shadow-2xl shadow-black/70"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition hover:bg-white/10"
          >
            <FiX size={19} />
          </button>

          <div className="grid min-h-[720px] lg:grid-cols-[46%_54%]">
            {/* LEFT: CLEAN PROJECT PREVIEW */}
            <div className="flex min-h-[560px] flex-col border-b border-white/10 bg-[#0d0d0d] lg:min-h-[720px] lg:border-b-0 lg:border-r">
              <div className="flex flex-1 items-center justify-center px-8 pb-8 pt-16 sm:px-12 lg:px-14">
                <div className="flex w-full items-center justify-center">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="block max-h-[540px] max-w-full object-contain drop-shadow-[0_25px_55px_rgba(0,0,0,0.5)]"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>

              <div className="border-t border-white/10 px-8 py-7 sm:px-12 lg:px-14">
                <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Case Study
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {project.title}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.split(" · ").map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: CASE STUDY CONTENT */}
            <div className="max-h-[88vh] overflow-y-auto">
              <div className="p-7 sm:p-9 lg:p-11">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Project Overview
                </p>

                <h1 className="mt-3 pr-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {project.title}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
                  <span className="text-zinc-300">Muhammad Asad</span>

                  <span className="text-zinc-700">•</span>

                  <span>{project.year}</span>

                  <span className="text-zinc-700">•</span>

                  <span>{project.role}</span>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    >
                      Live Demo
                      <FiArrowUpRight size={16} />
                    </a>
                  )}

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      GitHub
                      <FiGitBranch size={16} />
                    </a>
                  )}
                </div>

                <div className="my-8 border-t border-white/10" />

                <div className="space-y-10">
                  <section>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
                        <FiFlag size={17} />
                      </span>

                      <h3 className="text-lg font-semibold text-white">
                        Problem
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.problem}
                    </p>
                  </section>

                  <section>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
                        <FiTarget size={17} />
                      </span>

                      <h3 className="text-lg font-semibold text-white">
                        Solution
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.solution}
                    </p>
                  </section>

                  <section>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
                        <FiCheckCircle size={17} />
                      </span>

                      <h3 className="text-lg font-semibold text-white">
                        Key Features
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                        >
                          <FiCheckCircle
                            size={17}
                            className="mt-0.5 shrink-0 text-zinc-300"
                          />

                          <span className="text-sm leading-6 text-zinc-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
                        <FiCode size={17} />
                      </span>

                      <h3 className="text-lg font-semibold text-white">
                        Tech Stack
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.split(" · ").map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
                        <FiZap size={17} />
                      </span>

                      <h3 className="text-lg font-semibold text-white">
                        Challenges
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.challenges}
                    </p>
                  </section>

                  <section>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
                        <FiLayers size={17} />
                      </span>

                      <h3 className="text-lg font-semibold text-white">
                        Result
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.result}
                    </p>
                  </section>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Back to Projects
                    <FiArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCaseStudy;