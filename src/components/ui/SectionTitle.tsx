import * as React from "react";
import { motion } from "motion/react";

interface SectionTitleProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  description,
  align = "left",
  theme = "light",
}) => {
  const isLeft = align === "left";

  return (
    <div
      className={`max-w-3xl ${isLeft ? "text-left" : "mx-auto text-center"} mb-12 md:mb-16`}
    >
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={`inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] ${
          theme === "light" ? "text-gold" : "text-gold"
        } mb-4`}
      >
        {badge}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-2xl md:text-5xl font-bold tracking-tight leading-tight ${
          theme === "light" ? "text-primary" : "text-white"
        } mb-6 text-balance`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`font-sans text-base md:text-lg whitespace-pre-line ${
            theme === "light" ? "text-muted-dark" : "text-white/70"
          } leading-relaxed`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
