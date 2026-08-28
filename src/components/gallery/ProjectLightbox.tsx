import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Quote,
  Star,
} from "lucide-react";
import { GalleryProject } from "../../types";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";

interface ProjectLightboxProps {
  project: GalleryProject;
  onClose: () => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  onClose,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const slides = project.slides || [project.image];

  const handleNextSlide = React.useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    },
    [slides.length],
  );

  const handlePrevSlide = React.useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setCurrentSlideIndex(
        (prev) => (prev - 1 + slides.length) % slides.length,
      );
    },
    [slides.length],
  );

  // Keyboard navigation & body-scroll locking for lightbox
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNextSlide();
      } else if (e.key === "ArrowLeft") {
        handlePrevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, handleNextSlide, handlePrevSlide]);

  return (
    <div className="fixed inset-0 z-51 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop dark blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-primary/75 backdrop-blur-xl"
      />

      {/* Modal Card wrapper - تم إعطاؤه ارتفاع ثابت صريح للشاشات الكبيرة والصغيرة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 24 }}
        transition={{ type: "spring", damping: 25, stiffness: 150 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-project-title"
        className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10 flex flex-col lg:flex-row h-[85vh] lg:h-[80vh]"
      >
        {/* Left Side: Premium Interactive Image Slider (تم ضبط الارتفاع ليتوافق مع الـ Flexbox) */}
        <div className="relative w-full lg:w-[58%] bg-black flex items-center justify-center shrink-0 h-64 sm:h-80 lg:h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlideIndex}
              src={slides[currentSlideIndex]}
              alt={project.title}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full h-full object-cover absolute inset-0 select-none"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </AnimatePresence>

          {/* Close Button on Image (Visible on mobile layout) */}
          <button
            onClick={onClose}
            aria-label="Stäng projekt"
            className="absolute top-4 right-4 p-2 bg-primary/75 text-white hover:bg-primary rounded-full transition-colors backdrop-blur-md z-20 border border-white/10 lg:hidden cursor-pointer"
          >
            <X className="h-4.5 w-4.5" />
          </button>

          {/* Category Badge overlay */}
          <div className="absolute top-4 left-4 z-20">
            <Badge
              variant="gold"
              className="text-[10px] uppercase tracking-widest px-3 py-1 font-sans font-bold shadow-md"
            >
              {project.category}
            </Badge>
          </div>

          {/* Slider Arrows (only if slides array has multiple images) */}
          {slides.length > 1 && (
            <>
              <button
                onClick={handlePrevSlide}
                aria-label="Föregående bild"
                className="absolute left-4 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/75 transition-all backdrop-blur-sm z-20 border border-white/10 outline-none cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNextSlide}
                aria-label="Nästa bild"
                className="absolute right-4 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/75 transition-all backdrop-blur-sm z-20 border border-white/10 outline-none cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Image indicator count numbers */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-white text-[10px] font-mono tracking-widest z-20">
                {currentSlideIndex + 1} / {slides.length}
              </div>

              {/* Bullet Indicators bar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all outline-none ${
                      currentSlideIndex === idx
                        ? "bg-gold scale-125"
                        : "bg-white/40 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Side: Premium specs scrollable panel */}
        <div className="w-full lg:w-[42%] flex flex-col flex-1 min-h-0 overflow-hidden bg-white text-left">
          {/* Fixed Top Section inside panel */}
          <div className="p-6 md:p-8 pb-4 border-b border-black/5 flex items-start justify-between shrink-0">
            <div className="space-y-1">
              <Typography
                variant="label"
                color="gold"
                className="text-[10px] tracking-widest uppercase font-semibold"
              >
                Projektdokumentation
              </Typography>
              <Typography
                id="lightbox-project-title"
                variant="h3"
                className="font-display text-xl md:text-2xl font-bold text-primary leading-tight"
              >
                {project.title}
              </Typography>
            </div>

            {/* Close button for desktop layouts */}
            <button
              onClick={onClose}
              aria-label="Stäng projekt"
              className="hidden lg:flex p-2 bg-light-gray text-primary hover:bg-primary hover:text-white rounded-full transition-colors shrink-0 outline-none border border-black/5"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Scrollable specs & descriptions body - تم تحويله لـ flex-1 التلقائي الصارم */}
          <div className="p-6 md:p-8 overflow-y-auto flex-1 min-h-0 space-y-6">
            {/* Introduction Paragraph */}
            <div className="space-y-2">
              <Typography
                variant="body"
                className="font-sans text-xs md:text-sm text-muted-dark leading-relaxed font-light"
              >
                {project.description}
              </Typography>
            </div>

            {/* Project specifications table rendering */}
            {/* {project.specs && project.specs.length > 0 && (
              <div className="bg-light-gray/60 p-4 rounded-2xl border border-black/3">
                <Typography
                  variant="label"
                  color="primary"
                  className="text-[9px] uppercase tracking-wider font-semibold block mb-2"
                >
                  Tekniska Parametrar
                </Typography>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
                  {project.specs.map((spec, i) => (
                    <div key={i} className="border-b border-black/4 pb-1">
                      <span className="block text-[9px] text-primary/40 uppercase tracking-widest">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-primary">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )} */}

            {/* Dynamic Scope of Work */}
            {project.scopeOfWork && project.scopeOfWork.length > 0 && (
              <div className="space-y-3">
                <Typography
                  variant="label"
                  color="gold"
                  className="text-[10px] tracking-[0.2em] uppercase font-bold block"
                >
                  Planerade och utförda arbeten
                </Typography>
                <ul className="space-y-2.5">
                  {project.scopeOfWork.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-primary/80 leading-relaxed font-light">
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pull-quote Testimonial Block */}
            {/* {project.testimonial && (
              <div className="bg-primary/2 p-5 rounded-2xl border-l-2 border-gold space-y-3 relative overflow-hidden">
                <Quote className="absolute right-3 top-3 h-10 w-10 text-gold/5 pointer-events-none" />
                <div className="flex items-center gap-1">
                  {Array.from({ length: project.testimonial.rating }).map(
                    (_, i) => (
                      <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                    ),
                  )}
                </div>
                <Typography
                  variant="body"
                  className="font-sans text-xs text-muted-dark italic leading-relaxed"
                >
                  &quot;{project.testimonial.text}&quot;
                </Typography>
                <Typography
                  variant="label"
                  className="text-[10px] font-semibold text-primary uppercase block"
                >
                  — {project.testimonial.author}
                </Typography>
              </div>
            )} */}
          </div>

          {/* Footer sticky panel action bar */}
          <div className="p-6 md:p-8 bg-light-gray/40 border-t border-black/5 mt-auto shrink-0">
            <a href="#contact" onClick={onClose} className="w-full block">
              <Button
                variant="primary"
                className="w-full text-xs uppercase tracking-widest font-bold py-3.5"
              >
                Diskutera Liknande Projekt Med Oss
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
