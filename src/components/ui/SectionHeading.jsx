import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  headingId,
}) {
  return (
    <div
      className={`mb-14 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : ""
      }`}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block font-mono text-sm tracking-wide mb-3"
        style={{
          color: "var(--color-primary)",
        }}
      >
        {eyebrow}
      </motion.span>

      <motion.h2
        id={headingId}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="font-display font-semibold text-3xl md:text-4xl"
        style={{
          color: "var(--color-text)",
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-[15.5px] leading-relaxed"
          style={{
            color: "var(--color-muted)",
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}