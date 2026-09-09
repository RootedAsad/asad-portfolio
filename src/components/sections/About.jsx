import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Line,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";
import {
  FiUser,
  FiAward,
  FiBriefcase,
  FiCode,
} from "react-icons/fi";

import SectionHeading from "../ui/SectionHeading";
import { stats } from "../../data/experience";
import { useCountUp } from "../../hooks/useCountUp";

/* =========================
   SUBTLE THREE.JS VISUAL
========================= */

function TechOrbit() {
  const groupRef = useRef(null);

  const nodes = useMemo(() => {
    const count = 16;
    const radius = 1.65;
    const points = [];

    for (let i = 0; i < count; i += 1) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      points.push([
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      ]);
    }

    return points;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.12;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <Sphere args={[0.55, 32, 32]}>
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#5b21b6"
          emissiveIntensity={1.5}
          metalness={0.65}
          roughness={0.25}
          transparent
          opacity={0.85}
        />
      </Sphere>

      {/* Core wireframe */}
      <Sphere args={[0.72, 24, 24]}>
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.25}
        />
      </Sphere>

      {/* Technology nodes */}
      {nodes.map((position, index) => (
        <Sphere
          key={`node-${index}`}
          args={[0.055, 12, 12]}
          position={position}
        >
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0891b2"
            emissiveIntensity={1.7}
          />
        </Sphere>
      ))}

      {/* Connections */}
      {nodes.map((start, index) => {
        const end = nodes[(index + 1) % nodes.length];

        return (
          <Line
            key={`connection-${index}`}
            points={[start, end]}
            color="#8b5cf6"
            transparent
            opacity={0.22}
            lineWidth={0.7}
          />
        );
      })}

      {/* Orbit rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.95, 0.008, 8, 96]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.22}
        />
      </mesh>

      <mesh rotation={[0.9, 0.35, 0]}>
        <torusGeometry args={[2.15, 0.008, 8, 96]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
}

function About3DBackground() {
  return (
    <div
      className="pointer-events-none absolute right-[-120px] top-[240px] hidden h-[430px] w-[430px] opacity-70 lg:block"
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        dpr={[1, 1.25]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={0.5} />

        <pointLight
          position={[3, 3, 4]}
          intensity={8}
          distance={8}
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={5}
          distance={7}
        />

        <Float
          speed={0.8}
          rotationIntensity={0.12}
          floatIntensity={0.35}
        >
          <TechOrbit />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

/* =========================
   STATS
========================= */

function Stat({ label, value, index }) {
  const { ref, value: count } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.35,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="surface-card rounded-2xl border border-white/10 p-5 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="font-display text-3xl font-bold text-gradient">
        {count}+
      </div>

      <div className="mt-1 font-mono text-xs text-muted">
        {label}
      </div>
    </motion.div>
  );
}

/* =========================
   JOURNEY
========================= */

const journey = [
  {
    icon: FiUser,
    label: "BS Information Technology",
    sub: "Currently studying at MNS University of Agriculture, Multan and building a strong foundation in software development and modern technologies.",
  },
  {
    icon: FiAward,
    label: "MERN Stack Development",
    sub: "Completed 3 months of hands-on NAVTTC training focused on React, Node.js, Express, MongoDB, REST APIs and modern development practices.",
  },
  {
    icon: FiBriefcase,
    label: "Full Stack Web Internship",
    sub: "Completed a remote internship at Zenvyro Labs, gaining practical experience through development tasks and full-stack projects.",
  },
  {
    icon: FiCode,
    label: "Building Full-Stack Projects",
    sub: "Continuously designing, developing and deploying responsive web applications while improving my skills through practical projects.",
  },
];

function JourneyCard({ step, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [4, -4]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const Icon = step.icon;

  const handleMouseMove = (event) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -7,
      }}
      className="surface-card group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start gap-5">
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/5 text-primary"
        >
          <Icon size={20} />
        </motion.div>

        <div className="min-w-0">
          <h3 className="font-display text-[15px] font-semibold leading-snug">
            {step.label}
          </h3>

          <p className="mt-2 font-mono text-xs leading-relaxed text-muted">
            {step.sub}
          </p>
        </div>
      </div>

      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

function JourneyCards() {
  return (
    <div className="mt-14">
      <motion.div
        initial={{
          opacity: 0,
          x: -20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-3 flex items-center gap-4"
      >
        <span className="h-px w-8 bg-primary/60" />

        <span className="font-mono text-xs uppercase tracking-[0.25em] text-secondary">
          My Journey So Far
        </span>
      </motion.div>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-6 max-w-2xl text-sm leading-relaxed text-muted"
      >
        My journey into web development has been shaped through education,
        hands-on training, internship experience and continuous project
        development. Each step has helped me grow as a developer and build
        stronger full-stack development skills.
      </motion.p>

      <div className="grid gap-5 md:grid-cols-2">
        {journey.map((step, index) => (
          <JourneyCard
            key={step.label}
            step={step}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================
   ABOUT
========================= */

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-28"
      aria-labelledby="about-heading"
    >
      <About3DBackground />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="01 · About"
          title="About Me"
          headingId="about-heading"
        />

        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[15.5px] leading-relaxed text-muted"
            >
              I'm a MERN Stack Developer focused on building responsive and
              full-stack web applications using React, Node.js, Express and
              MongoDB. I enjoy turning ideas into practical digital products
              with clean interfaces and reliable functionality.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 text-[15.5px] leading-relaxed text-muted"
            >
              My development experience includes REST APIs, JWT
              authentication, protected routes, role-based access, Redux
              Toolkit, MongoDB and modern frontend development. I focus on
              building applications that are responsive, maintainable and
              useful in real-world scenarios.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 text-[15.5px] leading-relaxed text-muted"
            >
              I'm currently pursuing a BS in Information Technology at MNS
              University of Agriculture, Multan, while continuing to build
              real-world projects and strengthen my full-stack development
              skills.
            </motion.p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <Stat
                key={stat.label}
                {...stat}
                index={index}
              />
            ))}
          </div>

          <JourneyCards />
        </div>
      </div>
    </section>
  );
}