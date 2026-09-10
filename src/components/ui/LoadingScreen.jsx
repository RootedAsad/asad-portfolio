import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] grid place-items-center"
          style={{
            backgroundColor: "var(--color-bg)",
            color: "var(--color-text)",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          aria-label="Loading RootedAsad portfolio"
          role="status"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="font-mono text-2xl font-semibold tracking-tight md:text-3xl"
              style={{
                color: "var(--color-text)",
                fontFamily: '"JetBrains Mono", monospace',
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span style={{ color: "var(--color-primary)" }}>
                &lt;
              </span>

              RootedAsad

              <span style={{ color: "var(--color-secondary)" }}>
                /&gt;
              </span>
            </motion.div>

            <motion.div
              className="h-[3px] w-40 overflow-hidden rounded-full"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-muted) 16%, transparent)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.15 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                  boxShadow:
                    "0 0 14px color-mix(in srgb, var(--color-primary) 35%, transparent)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.1,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.span
              className="font-mono text-[9px] uppercase tracking-[0.22em]"
              style={{
                color: "var(--color-muted)",
                fontFamily: '"JetBrains Mono", monospace',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
            >
              Build · Learn · Grow
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}