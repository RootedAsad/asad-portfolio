import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiLayers,
  FiMapPin,
} from "react-icons/fi";

import { timeline } from "../../data/experience";
import GithubStats from "./GithubStats";

/* -------------------------------------------------------------------------- */
/* ICONS                                                                      */
/* -------------------------------------------------------------------------- */

const icons = {
  experience: FiBriefcase,
  training: FiAward,
  education: FiBookOpen,
  detail: FiLayers,
};

/* -------------------------------------------------------------------------- */
/* ACCENTS                                                                    */
/* -------------------------------------------------------------------------- */

const accents = {
  experience: {
    gradient: "linear-gradient(135deg, #4F8CFF 0%, #22D3EE 100%)",
    glow: "rgba(79, 140, 255, 0.30)",
    solid: "#4F8CFF",
    soft: "rgba(79, 140, 255, 0.08)",
  },

  training: {
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #4F8CFF 100%)",
    glow: "rgba(139, 92, 246, 0.30)",
    solid: "#8B5CF6",
    soft: "rgba(139, 92, 246, 0.08)",
  },

  education: {
    gradient: "linear-gradient(135deg, #22D3EE 0%, #6366F1 100%)",
    glow: "rgba(34, 211, 238, 0.30)",
    solid: "#22D3EE",
    soft: "rgba(34, 211, 238, 0.08)",
  },

  detail: {
    gradient: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
    glow: "rgba(99, 102, 241, 0.30)",
    solid: "#6366F1",
    soft: "rgba(99, 102, 241, 0.08)",
  },
};

/* -------------------------------------------------------------------------- */
/* DATA META                                                                  */
/* -------------------------------------------------------------------------- */

function getItemMeta(item) {
  const explicitType = item?.type;

  if (explicitType === "training") {
    return {
      type: "training",
      label: "TRAINING",
      accent: accents.training,
    };
  }

  if (explicitType === "experience") {
    return {
      type: "experience",
      label: "EXPERIENCE",
      accent: accents.experience,
    };
  }

  if (explicitType === "detail") {
    return {
      type: "detail",
      label: "INTERNSHIP",
      accent: accents.detail,
    };
  }

  if (explicitType === "education") {
    return {
      type: "education",
      label: "EDUCATION",
      accent: accents.education,
    };
  }

  const text = [
    item?.title,
    item?.org,
    item?.description,
    item?.date,
  ]
    .join(" ")
    .toLowerCase();

  if (
    text.includes("navttc") ||
    text.includes("mern stack development")
  ) {
    return {
      type: "training",
      label: "TRAINING",
      accent: accents.training,
    };
  }

  if (
    text.includes("zenvyro") ||
    text.includes("full stack web developer intern")
  ) {
    return {
      type: "experience",
      label: "EXPERIENCE",
      accent: accents.experience,
    };
  }

  if (
    text.includes("digital content") ||
    text.includes("content & operations") ||
    text.includes("content and operations")
  ) {
    return {
      type: "detail",
      label: "INTERNSHIP",
      accent: accents.detail,
    };
  }

  return {
    type: "education",
    label: "EDUCATION",
    accent: accents.education,
  };
}

/* -------------------------------------------------------------------------- */
/* HEADING                                                                    */
/* -------------------------------------------------------------------------- */

function ExperienceHeading() {
  return (
    <div className="relative z-30 mx-auto max-w-3xl text-center">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/80" />

        <span className="rounded-full border border-cyan-500/25 bg-cyan-500/[0.07] px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300">
          04 · Experience
        </span>

        <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400/80" />
      </div>

      <h2
        id="experience-heading"
        className="font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-[42px]"
      >
        Where I've{" "}
        <span className="bg-gradient-to-r from-[#4F8CFF] via-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">
          grown
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
        Internship, training and education, the path that shaped how I build.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* THREE.JS BACKGROUND                                                        */
/* -------------------------------------------------------------------------- */

function ThreeExperienceBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = container.clientWidth;
    let height = container.clientHeight || 1;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      100
    );

    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      width,
      height
    );

    renderer.setClearColor(
      0x000000,
      0
    );

    container.appendChild(
      renderer.domElement
    );

    const ambientLight =
      new THREE.AmbientLight(
        0x4f8cff,
        0.45
      );

    scene.add(ambientLight);

    const pointLight =
      new THREE.PointLight(
        0x22d3ee,
        0.65,
        35
      );

    pointLight.position.set(
      6,
      4,
      8
    );

    scene.add(pointLight);

    const compact =
      width < 640;

    const particleCount =
      compact ? 24 : 60;

    const positions =
      new Float32Array(
        particleCount * 3
      );

    for (
      let i = 0;
      i < particleCount;
      i += 1
    ) {
      positions[i * 3] =
        (Math.random() - 0.5) * 20;

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * 15;

      positions[i * 3 + 2] =
        (Math.random() - 0.5) * 8 - 4;
    }

    const particleGeometry =
      new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3
      )
    );

    const particleMaterial =
      new THREE.PointsMaterial({
        color: 0x4f8cff,
        size: 0.04,
        transparent: true,
        opacity: 0.16,
      });

    const particles =
      new THREE.Points(
        particleGeometry,
        particleMaterial
      );

    scene.add(particles);

    const rings =
      new THREE.Group();

    const ringColors = [
      0x4f8cff,
      0x22d3ee,
      0x8b5cf6,
    ];

    const ringCount =
      compact ? 2 : 3;

    for (
      let i = 0;
      i < ringCount;
      i += 1
    ) {
      const geometry =
        new THREE.TorusGeometry(
          3.8 + i * 1.35,
          0.006,
          8,
          72
        );

      const material =
        new THREE.MeshBasicMaterial({
          color:
            ringColors[
              i %
                ringColors.length
            ],
          transparent: true,
          opacity: 0.07,
          wireframe: true,
          depthWrite: false,
        });

      const ring =
        new THREE.Mesh(
          geometry,
          material
        );

      ring.rotation.x =
        Math.PI / 2 +
        i * 0.3;

      ring.rotation.y =
        i * 0.45;

      rings.add(ring);
    }

    rings.position.z = -5;

    scene.add(rings);

    let pointerX = 0;
    let pointerY = 0;

    const timer =
      new THREE.Timer();

    let animationFrame = null;

    const handlePointerMove =
      (event) => {
        const rect =
          container.getBoundingClientRect();

        if (
          event.clientX <
            rect.left ||
          event.clientX >
            rect.right ||
          event.clientY <
            rect.top ||
          event.clientY >
            rect.bottom
        ) {
          return;
        }

        pointerX =
          ((event.clientX -
            rect.left) /
            rect.width -
            0.5) *
          2;

        pointerY =
          ((event.clientY -
            rect.top) /
            rect.height -
            0.5) *
          2;
      };

    const render =
      () => {
        timer.update();

        const elapsed =
          timer.getElapsed();

        particles.rotation.y =
          elapsed * 0.008;

        particles.rotation.x =
          elapsed * 0.002;

        rings.rotation.z =
          elapsed * 0.01;

        rings.rotation.y =
          elapsed * 0.006;

        camera.position.x +=
          (pointerX * 0.25 -
            camera.position.x) *
          0.02;

        camera.position.y +=
          (-pointerY * 0.16 -
            camera.position.y) *
          0.02;

        camera.lookAt(
          0,
          0,
          0
        );

        renderer.render(
          scene,
          camera
        );
      };

    const animate =
      () => {
        render();

        animationFrame =
          requestAnimationFrame(
            animate
          );
      };

    if (reducedMotion) {
      render();
    } else {
      window.addEventListener(
        "pointermove",
        handlePointerMove
      );

      animate();
    }

    const resizeObserver =
      new ResizeObserver(() => {
        width =
          container.clientWidth;

        height =
          container.clientHeight ||
          1;

        camera.aspect =
          width / height;

        camera.updateProjectionMatrix();

        renderer.setPixelRatio(
          Math.min(
            window.devicePixelRatio,
            2
          )
        );

        renderer.setSize(
          width,
          height
        );
      });

    resizeObserver.observe(
      container
    );

    return () => {
      if (
        animationFrame !==
        null
      ) {
        cancelAnimationFrame(
          animationFrame
        );
      }

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      resizeObserver.disconnect();

      particleGeometry.dispose();
      particleMaterial.dispose();

      rings.children.forEach(
        (ring) => {
          ring.geometry.dispose();
          ring.material.dispose();
        }
      );

      renderer.dispose();

      if (
        renderer.domElement.parentNode ===
        container
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-30 dark:opacity-50"
    />
  );
}

/* -------------------------------------------------------------------------- */
/* TIMELINE NODE                                                              */
/* -------------------------------------------------------------------------- */

function TimelineNode({
  Icon,
  accent,
  active,
}) {
  return (
    <div className="relative grid h-10 w-10 place-items-center">
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{
          background:
            accent.gradient,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: active
            ? 0.6
            : 0.25,
          scale: active
            ? 1.18
            : 1,
        }}
        transition={{
          duration: 0.3,
        }}
      />

      <span
        className="relative grid h-10 w-10 place-items-center rounded-full border border-white/30 shadow-xl dark:border-white/20"
        style={{
          background:
            accent.gradient,
          boxShadow:
            `0 0 22px ${accent.glow}`,
        }}
      >
        <Icon
          size={15}
          className="text-white"
        />
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* EXPERIENCE CARD                                                            */
/* -------------------------------------------------------------------------- */

function ExperienceCard({
  item,
  index,
  active,
  side,
}) {
  const cardRef =
    useRef(null);

  const rectRef =
    useRef(null);

  const [
    hovered,
    setHovered,
  ] = useState(false);

  const rawX =
    useMotionValue(0.5);

  const rawY =
    useMotionValue(0.5);

  const smoothX =
    useSpring(rawX, {
      stiffness: 180,
      damping: 24,
      mass: 0.45,
    });

  const smoothY =
    useSpring(rawY, {
      stiffness: 180,
      damping: 24,
      mass: 0.45,
    });

  const rotateX =
    useTransform(
      smoothY,
      [0, 1],
      [3, -3]
    );

  const rotateY =
    useTransform(
      smoothX,
      [0, 1],
      [-3, 3]
    );

  const glowX =
    useTransform(
      smoothX,
      [0, 1],
      ["10%", "90%"]
    );

  const glowY =
    useTransform(
      smoothY,
      [0, 1],
      ["10%", "90%"]
    );

  const meta =
    getItemMeta(item);

  const {
    type,
    label,
    accent,
  } = meta;

  const Icon =
    icons[type] ||
    FiBriefcase;

  let title =
    item?.title ||
    "";

  let organization =
    item?.org ||
    "";

  let description =
    item?.description ||
    "";

  if (type === "training") {
    title =
      "NAVTTC MERN Stack Development Training";

    organization =
      organization ||
      "NAVTTC";

    description =
      description ||
      "Hands-on training focused on React, Node.js, Express, MongoDB, REST APIs, authentication and modern full-stack development.";
  }

  if (type === "experience") {
    title =
      "Full Stack Web Developer Intern";

    organization =
      organization ||
      "ZENVYRO LABS (Pvt) Ltd.";

    description =
      description ||
      "Worked on web development tasks, responsive UI implementation, debugging, testing and collaborative professional development workflows.";
  }

  if (type === "detail") {
    title =
      "Digital Content & Operations Intern";

    organization =
      organization ||
      "Professional Software House";

    description =
      "Collaborated in a professional software house environment, managed digital assets, and supported cross-functional content and operational workflows.";
  }

  if (type === "education") {
    title =
      "BS Information Technology";

    organization =
      organization ||
      "MNS University of Agriculture, Multan";

    description =
      description
        .replace(
          /6th semester/gi,
          "7th Semester"
        )
        .replace(
          /6th/gi,
          "7th"
        );

    if (!description) {
      description =
        "Academic journey focused on software development, databases, information systems and modern computing practices.";
    }
  }

  const glow =
    useMotionTemplate`
      radial-gradient(
        220px circle at ${glowX} ${glowY},
        ${accent.glow},
        transparent 72%
      )
    `;

  const handleMouseEnter =
    () => {
      if (cardRef.current) {
        rectRef.current =
          cardRef.current.getBoundingClientRect();
      }

      setHovered(true);
    };

  const handleMouseMove =
    (event) => {
      const rect =
        rectRef.current;

      if (!rect) {
        return;
      }

      rawX.set(
        (event.clientX -
          rect.left) /
          rect.width
      );

      rawY.set(
        (event.clientY -
          rect.top) /
          rect.height
      );
    };

  const handleMouseLeave =
    () => {
      setHovered(false);

      rawX.set(0.5);
      rawY.set(0.5);
    };

  return (
    <motion.article
      ref={cardRef}
      onMouseEnter={
        handleMouseEnter
      }
      onMouseMove={
        handleMouseMove
      }
      onMouseLeave={
        handleMouseLeave
      }
      style={{
        rotateX,
        rotateY,
        transformStyle:
          "preserve-3d",
      }}
      whileHover={{
        y: -5,
      }}
      className="relative z-30 block overflow-hidden rounded-[22px] border border-zinc-200 bg-white/95 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/[0.10] dark:bg-[#0c111b]/95 dark:shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:p-6"
    >
      {/* Hover glow */}

      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: glow,
        }}
        animate={{
          opacity:
            hovered || active
              ? 1
              : 0,
        }}
        transition={{
          duration: 0.25,
        }}
      />

      {/* Top accent */}

      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{
          background:
            accent.gradient,
        }}
      />

      {/* Side accent */}

      <div
        className={`absolute bottom-0 top-0 w-[2px] ${
          side === "right"
            ? "right-0"
            : "left-0"
        }`}
        style={{
          background:
            accent.gradient,
        }}
      />

      {/* Content */}

      <div
        className="relative z-10"
        style={{
          transform:
            "translateZ(20px)",
        }}
      >
        {/* Top */}

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  color:
                    accent.solid,
                }}
              >
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              <span className="text-zinc-300 dark:text-zinc-700">
                /
              </span>

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-500">
                {label}
              </span>

              {item?.date && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-800">
                    /
                  </span>

                  <span className="font-mono text-[9px] text-zinc-500 dark:text-zinc-600">
                    {type === "education"
                      ? item.date
                          .replace(/6th semester/gi, "7th Semester")
                          .replace(/6th/gi, "7th")
                      : item.date}
                  </span>
                </>
              )}
            </div>
          </div>

          <motion.div
            animate={{
              rotate: hovered
                ? 6
                : 0,
              scale: hovered
                ? 1.06
                : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 20,
            }}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border"
            style={{
              background:
                accent.soft,
              borderColor:
                `${accent.solid}35`,
              boxShadow:
                hovered
                  ? `0 0 25px ${accent.glow}`
                  : "none",
            }}
          >
            <Icon
              size={16}
              style={{
                color:
                  accent.solid,
              }}
            />
          </motion.div>
        </div>

        {/* Title */}

        <h3 className="mt-4 font-display text-lg font-semibold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-xl">
          {title}
        </h3>

        {/* Organization */}

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span
            className="font-mono text-[10px] font-medium"
            style={{
              color:
                accent.solid,
            }}
          >
            {organization}
          </span>

          {(type ===
            "experience" ||
            type === "training" ||
            type === "detail") && (
            <span className="flex items-center gap-1 text-[9px] text-zinc-500">
              <FiMapPin
                size={10}
              />
              {type === "experience"
                ? "Remote"
                : "Physical"}
            </span>
          )}
        </div>

        {/* Divider */}

        <div className="my-4 h-px bg-gradient-to-r from-zinc-200 via-zinc-100 to-transparent dark:from-white/10 dark:via-white/[0.04] dark:to-transparent" />

        {/* Description */}

        <p className="max-w-2xl text-[12px] leading-6 text-zinc-600 dark:text-zinc-400 sm:text-[13px]">
          {description}
        </p>

        {/* Tags */}

        <div className="mt-4 flex flex-wrap gap-2">
          {type ===
            "training" &&
            [
              "React",
              "Node.js",
              "Express",
              "MongoDB",
            ].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 rounded-lg border border-violet-500/15 bg-violet-500/[0.05] px-2.5 py-1.5 font-mono text-[9px] text-zinc-600 dark:text-zinc-400"
              >
                <FiCheckCircle
                  size={9}
                  style={{
                    color:
                      accent.solid,
                  }}
                />
                {tag}
              </span>
            ))}

          {type ===
            "experience" &&
            [
              "Development",
              "Responsive UI",
              "Debugging",
              "Testing",
            ].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 rounded-lg border border-blue-500/15 bg-blue-500/[0.05] px-2.5 py-1.5 font-mono text-[9px] text-zinc-600 dark:text-zinc-400"
              >
                <FiCheckCircle
                  size={9}
                  style={{
                    color:
                      accent.solid,
                  }}
                />
                {tag}
              </span>
            ))}

          {type ===
            "detail" &&
            [
              "Digital Assets",
              "Content Support",
              "Operations",
            ].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 rounded-lg border border-indigo-500/15 bg-indigo-500/[0.05] px-2.5 py-1.5 font-mono text-[9px] text-zinc-600 dark:text-zinc-400"
              >
                <FiCheckCircle
                  size={9}
                  style={{
                    color:
                      accent.solid,
                  }}
                />
                {tag}
              </span>
            ))}

          {type ===
            "education" && (
            <>
              <span className="rounded-lg border border-cyan-500/15 bg-cyan-500/[0.05] px-2.5 py-1.5 font-mono text-[9px] text-zinc-600 dark:text-zinc-400">
                7th Semester
              </span>

              <span className="rounded-lg border border-cyan-500/15 bg-cyan-500/[0.05] px-2.5 py-1.5 font-mono text-[9px] text-zinc-600 dark:text-zinc-400">
                Expected 2027
              </span>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/* SCROLL REVEAL                                                              */
/* -------------------------------------------------------------------------- */

const timelineRevealVariants = {
  hidden: {
    opacity: 0,
    y: 56,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const timelineOrder = {
  training: 0,
  experience: 1,
  detail: 2,
  education: 3,
};

/* -------------------------------------------------------------------------- */
/* TIMELINE ROW                                                               */
/* -------------------------------------------------------------------------- */


function TimelineRow({
  item,
  index,
}) {
  const [
    active,
    setActive,
  ] = useState(false);

  const meta =
    getItemMeta(item);

  const Icon =
    icons[meta.type] ||
    FiBriefcase;

  const isEven =
    index % 2 === 0;

  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.18,
      }}
      variants={timelineRevealVariants}
      transition={{
        delay: index * 0.08,
      }}
      onMouseEnter={() =>
        setActive(true)
      }
      onMouseLeave={() =>
        setActive(false)
      }
      className="relative z-20 pl-14 lg:grid lg:grid-cols-[1fr_2.75rem_1fr] lg:items-center lg:gap-8 lg:pl-0"
    >
      {/* Mobile node */}

      <div className="absolute left-0 top-1 z-40 lg:hidden">
        <TimelineNode
          Icon={Icon}
          accent={meta.accent}
          active={active}
        />
      </div>

      {/* Desktop node */}

      <div className="absolute left-1/2 top-1/2 z-40 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
        <TimelineNode
          Icon={Icon}
          accent={meta.accent}
          active={active}
        />
      </div>

      {/* Card */}

      <div
        className={
          isEven
            ? "lg:col-start-1 lg:row-start-1"
            : "lg:col-start-3 lg:row-start-1"
        }
      >
        <ExperienceCard
          item={item}
          index={index}
          active={active}
          side={
            isEven
              ? "right"
              : "left"
          }
        />
      </div>
    </motion.li>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN                                                                       */
/* -------------------------------------------------------------------------- */

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden py-24 sm:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="section-container relative z-20">
        {/* HEADING */}

        <ExperienceHeading />

        {/* TIMELINE */}

        <div className="relative z-10 mx-auto mt-14 max-w-5xl sm:mt-16">
          {/* BACKGROUND ONLY */}

          <ThreeExperienceBackground />

          {/* TIMELINE SPINE */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-5 top-0 z-10 w-px bg-gradient-to-b from-cyan-400/45 via-blue-500/20 to-transparent lg:left-1/2 lg:-translate-x-1/2"
          />

          {/* IMPORTANT:
              No initial/whileInView variants here.
              Cards must always be rendered and visible. */}

          <ol
            className="relative z-20 flex list-none flex-col gap-9 lg:gap-11"
            style={{
              perspective: 1400,
            }}
          >
            {[...timeline]
              .sort(
                (a, b) =>
                  timelineOrder[getItemMeta(a).type] -
                  timelineOrder[getItemMeta(b).type]
              )
              .map((item, index) => (
                <TimelineRow
                  key={`${item?.title || "timeline"}-${index}`}
                  item={item}
                  index={index}
                />
              ))}
          </ol>
        </div>

        {/* GITHUB */}

        <div className="relative z-20 mt-20">
          <GithubStats />
        </div>
      </div>
    </section>
  );
}