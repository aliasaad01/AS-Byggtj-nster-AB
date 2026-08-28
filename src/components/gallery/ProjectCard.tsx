import * as React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { GalleryProject } from "../../types";
import { Typography } from "../ui/Typography";

interface ProjectCardProps {
  project: GalleryProject;
  index: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onClick,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-4/5 bg-white border border-black/4 shadow-md hover:shadow-2xl hover:border-gold/20 transition-all duration-500 z-51"
      onClick={onClick}
    >
      {/* Visual Image Container with custom ratio */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Gentle shadow gradient in standard state */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 via-black/20 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />

        {/* Non-hover overlay metadata card */}
        <div className="absolute bottom-6 left-6 right-6 z-10 transition-all duration-500 group-hover:translate-y-4 group-hover:opacity-0">
          <span className="text-[10px] text-gold font-sans font-bold uppercase tracking-widest bg-primary/75 px-3 py-1 rounded-full backdrop-blur-sm mb-2 inline-block">
            {project.category}
          </span>
          <h3 className="text-white font-display text-lg font-bold">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Glassmorphic premium hovering detailed panel */}
      <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/45 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-3 group-hover:translate-y-0">
        <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest mb-2 block">
          {project.category}
        </span>
        <Typography
          variant="h3"
          color="white"
          className="font-display text-xl font-bold mb-3"
        >
          {project.title}
        </Typography>

        <div className="flex items-center gap-2 text-gold font-sans text-xs font-bold uppercase tracking-widest">
          Visa projektdetaljer{" "}
          <ExternalLink className="h-3.5 w-3.5 text-gold shrink-0" />
        </div>
      </div>
    </motion.div>
  );
};
