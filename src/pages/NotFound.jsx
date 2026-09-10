import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-8xl font-bold"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        className="font-display text-2xl font-semibold mt-4"
        style={{
          color: "var(--color-text)",
        }}
      >
        This route doesn't exist.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
        className="mt-3 max-w-sm"
        style={{
          color: "var(--color-muted)",
        }}
      >
        The page you're looking for was moved, renamed, or never built. Let's
        get you back to the homepage.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
      >
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 rounded-xl font-semibold text-sm transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
            color: "var(--color-button-text)",
            boxShadow:
              "0 10px 25px color-mix(in srgb, var(--color-primary) 25%, transparent)",
          }}
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}