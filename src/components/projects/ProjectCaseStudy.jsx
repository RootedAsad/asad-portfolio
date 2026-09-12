import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
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
      "https://github.com/RootedAsad/Project-Management-Team-Collaboration-Platform",
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
    repo: "https://github.com/RootedAsad/ecommerce-web-application-",
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
    repo: "https://github.com/RootedAsad/mern-blog",
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
    repo: "https://github.com/RootedAsad/shelf-life",
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
    repo: "https://github.com/RootedAsad/GeoFind",
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

const ProjectCaseStudy = ({ projectId: projectIdProp }) => {
  const { projectId: routeProjectId } = useParams();
  const navigate = useNavigate();

  const projectId = projectIdProp || routeProjectId;
  const project = PROJECTS[projectId];

  const handleClose = () => {
    navigate("/");
  };

  if (!project) return null;

  const canonicalUrl = `https://asad-portfolio-tau.vercel.app/portfolio/projects/${projectId}`;

  return (
    <>
      <Helmet>
        <title>{project.title} — RootedAsad Case Study</title>

        <meta name="description" content={project.description} />

        <link rel="canonical" href={canonicalUrl} />

        <meta
          property="og:title"
          content={`${project.title} — RootedAsad Case Study`}
        />

        <meta
          property="og:description"
          content={project.description}
        />

        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
      </Helmet>

      <motion.div
        className="fixed inset-0 z-[9999] overflow-y-auto p-4 sm:p-6 lg:p-8"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-bg) 82%, transparent)",
          backdropFilter: "blur(14px)",
        }}
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
            className="relative w-full overflow-hidden rounded-[28px] shadow-2xl"
            style={{
              backgroundColor: "var(--color-bg)",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 25px 70px rgba(0,0,0,.30)",
            }}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close case study"
              className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full transition"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-card) 86%, transparent)",
                color: "var(--color-text)",
                border: "1px solid var(--color-border)",
              }}
            >
              <FiX size={19} />
            </button>

            <div className="grid min-h-[720px] lg:grid-cols-[46%_54%]">
              <div
                className="flex min-h-[560px] flex-col lg:min-h-[720px]"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                  borderBottomWidth: "1px",
                }}
              >
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

                <div
                  className="px-8 py-7 sm:px-12 lg:px-14"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  <div
                    className="mb-3 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-card) 88%, transparent)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-muted)",
                    }}
                  >
                    Case Study
                  </div>

                  <h2
                    className="text-3xl font-bold tracking-tight sm:text-4xl"
                    style={{ color: "var(--color-text)" }}
                  >
                    {project.title}
                  </h2>

                  <p
                    className="mt-3 max-w-2xl text-sm leading-6"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.split(" · ").map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-3 py-1.5 text-xs"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--color-card) 88%, transparent)",
                          border: "1px solid var(--color-border)",
                          color: "var(--color-muted)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="max-h-[88vh] overflow-y-auto">
                <div className="p-7 sm:p-9 lg:p-11">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Project Overview
                  </p>

                  <h1
                    className="mt-3 pr-12 text-3xl font-bold tracking-tight sm:text-4xl"
                    style={{ color: "var(--color-text)" }}
                  >
                    {project.title}
                  </h1>

                  <div
                    className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
                    style={{ color: "var(--color-muted)" }}
                  >
                    <span style={{ color: "var(--color-text)" }}>
                      Muhammad Asad
                    </span>
                    <span style={{ color: "var(--color-border)" }}>•</span>
                    <span>{project.year}</span>
                    <span style={{ color: "var(--color-border)" }}>•</span>
                    <span>{project.role}</span>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-semibold transition hover:-translate-y-0.5"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                          color: "var(--color-button-text)",
                          boxShadow: "0 8px 24px rgba(245,158,11,.20)",
                        }}
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
                        className="inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-semibold transition hover:-translate-y-0.5"
                        style={{
                          backgroundColor: "var(--color-card)",
                          color: "var(--color-text)",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        GitHub
                        <FiGitBranch size={16} />
                      </a>
                    )}
                  </div>

                  <div
                    className="my-8"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                  />

                  <div className="space-y-10">
                    <section>
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor: "var(--color-card)",
                            color: "var(--color-primary)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          <FiFlag size={17} />
                        </span>

                        <h3
                          className="text-lg font-semibold"
                          style={{ color: "var(--color-text)" }}
                        >
                          Problem
                        </h3>
                      </div>

                      <p
                        className="text-sm leading-7 sm:text-base"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {project.problem}
                      </p>
                    </section>

                    <section>
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor: "var(--color-card)",
                            color: "var(--color-primary)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          <FiTarget size={17} />
                        </span>

                        <h3
                          className="text-lg font-semibold"
                          style={{ color: "var(--color-text)" }}
                        >
                          Solution
                        </h3>
                      </div>

                      <p
                        className="text-sm leading-7 sm:text-base"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {project.solution}
                      </p>
                    </section>

                    <section>
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor: "var(--color-card)",
                            color: "var(--color-primary)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          <FiCheckCircle size={17} />
                        </span>

                        <h3
                          className="text-lg font-semibold"
                          style={{ color: "var(--color-text)" }}
                        >
                          Key Features
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3 rounded-2xl p-4"
                            style={{
                              backgroundColor:
                                "color-mix(in srgb, var(--color-card) 72%, transparent)",
                              border: "1px solid var(--color-border)",
                            }}
                          >
                            <FiCheckCircle
                              size={17}
                              className="mt-0.5 shrink-0"
                              style={{ color: "var(--color-primary)" }}
                            />

                            <span
                              className="text-sm leading-6"
                              style={{ color: "var(--color-muted)" }}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor: "var(--color-card)",
                            color: "var(--color-primary)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          <FiCode size={17} />
                        </span>

                        <h3
                          className="text-lg font-semibold"
                          style={{ color: "var(--color-text)" }}
                        >
                          Tech Stack
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.split(" · ").map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full px-3 py-2 text-sm"
                            style={{
                              backgroundColor: "var(--color-card)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-muted)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section>
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor: "var(--color-card)",
                            color: "var(--color-primary)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          <FiZap size={17} />
                        </span>

                        <h3
                          className="text-lg font-semibold"
                          style={{ color: "var(--color-text)" }}
                        >
                          Challenges
                        </h3>
                      </div>

                      <p
                        className="text-sm leading-7 sm:text-base"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {project.challenges}
                      </p>
                    </section>

                    <section>
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor: "var(--color-card)",
                            color: "var(--color-primary)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          <FiLayers size={17} />
                        </span>

                        <h3
                          className="text-lg font-semibold"
                          style={{ color: "var(--color-text)" }}
                        >
                          Result
                        </h3>
                      </div>

                      <p
                        className="text-sm leading-7 sm:text-base"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {project.result}
                      </p>
                    </section>
                  </div>

                  <div
                    className="mt-10 pt-6"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                  >
                    <button
                      type="button"
                      onClick={handleClose}
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
                      style={{
                        backgroundColor: "var(--color-card)",
                        color: "var(--color-text)",
                        border: "1px solid var(--color-border)",
                      }}
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
    </>
  );
};

export default ProjectCaseStudy;