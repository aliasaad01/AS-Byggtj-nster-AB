import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { PROJECTS } from "../data/projectsData";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Typography } from "../components/ui/Typography";
import { GalleryProject } from "../types";
import { ProjectCard } from "../components/gallery/ProjectCard";
import { ProjectLightbox } from "../components/gallery/ProjectLightbox";
import { CategoryFilters } from "../components/gallery/CategoryFilters";

export const Gallery: React.FC = () => {
  // مرجع للوصول إلى بداية الفلاتر عند التصفح
  const filterRef = React.useRef<HTMLDivElement>(null);

  // 1. Dynamic Category Extraction (with counts)
  const categories = React.useMemo(() => {
    const rawCategories = PROJECTS.map((p) => p.category);
    const unique = Array.from(new Set(rawCategories));
    return ["Alla", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = React.useState("Alla");

  // 2. Dynamic Pagination Configuration
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 6; // Fits premium visual grid balance (3 columns x 2 rows)

  // 3. Lightbox State
  const [selectedProject, setSelectedProject] =
    React.useState<GalleryProject | null>(null);

  // Filter project database dynamically
  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "Alla") return PROJECTS;
    return PROJECTS.filter(
      (project) =>
        project.category.toLowerCase() === activeCategory.toLowerCase(),
    );
  }, [activeCategory]);

  // Reset pagination on category filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Pagination Math
  const totalPages = Math.ceil(filteredProjects.length / pageSize);
  const paginatedProjects = React.useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredProjects.slice(startIndex, startIndex + pageSize);
  }, [filteredProjects, currentPage]);

  // Get count for a category to display on tags/badges
  const getCategoryCount = React.useCallback((cat: string) => {
    if (cat === "Alla") return PROJECTS.length;
    return PROJECTS.filter((p) => p.category === cat).length;
  }, []);

  // دالة تغيير الصفحة مع السكرول السلس لبداية الفلاتر
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (filterRef.current) {
      filterRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Section id="projects" variant="light" className="relative py-18 md:py-24">
      {/* Decorative premium background visuals */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold/2 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/1 blur-3xl rounded-full pointer-events-none" />

      <Container size="xl">
        {/* أنيميشن دخول خفيف وناعم للهيدر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16"
        >
          <div className="max-w-2xl space-y-3 text-left">
            <Typography
              variant="label"
              color="gold"
              className="text-xs uppercase tracking-[0.25em] font-semibold block"
            >
              Vår Exklusiva Portfölj
            </Typography>
            <Typography
              variant="h2"
              color="primary"
              className="text-3xl md:text-5xl font-display font-extrabold tracking-tight leading-tight"
            >
              Inspireras av Våra Slutförda Drömprojekt
            </Typography>
            <Typography
              variant="body"
              className="text-muted-dark text-sm md:text-base font-light"
            >
              Bläddra igenom våra nyligen levererade entreprenader. Varje
              projekt är ett bevis på extrem noggrannhet, premiummaterial och
              tidslös design.
            </Typography>
          </div>

          {/* Quick Stats Banner */}
          <div className="hidden xl:flex items-center gap-8 border-l border-black/5 pl-8 py-2">
            <div className="text-left">
              <div className="text-2xl font-display font-bold text-primary">
                100%
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-dark font-medium">
                Nöjda Kunder
              </div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-display font-bold text-primary">
                {PROJECTS.length}+
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-dark font-medium">
                Slutförda Projekt
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Category Filtering Controller Grid - المرجع يبدأ من هنا */}
        <motion.div
          ref={filterRef}
          className="scroll-mt-28"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <CategoryFilters
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            getCategoryCount={getCategoryCount}
          />
        </motion.div>

        {/* Active Filters Display & Project Count Indicator */}
        <div className="flex items-center justify-between text-xs text-muted-dark mb-8">
          <div>
            Visar{" "}
            <span className="font-bold text-primary">
              {filteredProjects.length}
            </span>{" "}
            projekt i{" "}
            <span className="font-bold text-gold">“{activeCategory}”</span>
          </div>
          {totalPages > 1 && (
            <div className="hidden sm:block">
              Sida{" "}
              <span className="font-semibold text-primary">{currentPage}</span>{" "}
              av {totalPages}
            </div>
          )}
        </div>

        {/* Gallery Project Grid Layout - حركة انسيابية وسلسة بدون أي قفزات */}
        <motion.div
          layout
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-112.5"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
        >
          <AnimatePresence mode="popLayout">
            {paginatedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                  mass: 0.8,
                }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  index={idx}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if category has no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-black/10 flex flex-col items-center justify-center max-w-xl mx-auto space-y-4">
            <Layers className="h-10 w-10 text-muted-dark/40" />
            <Typography
              variant="body"
              className="text-muted-dark font-sans text-sm font-light"
            >
              Det finns inga projekt tillgängliga i den valda kategorin just nu.
              Vi uppdaterar ständigt galleriet med nya slutförda drömprojekt.
            </Typography>
          </div>
        )}

        {/* Dynamic Pagination Controls Row */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 pt-8 border-t border-black/5">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border outline-none ${
                currentPage === 1
                  ? "bg-black/2 text-primary/30 border-black/5 cursor-not-allowed"
                  : "bg-white text-primary border-black/10 hover:bg-black/3 cursor-pointer"
              }`}
            >
              <ChevronLeft className="h-4 w-4 shrink-0" /> Föregående
            </button>

            {/* Pagination Numbers Grid */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isCurrent = currentPage === pageNumber;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-10 h-10 rounded-xl text-xs font-mono font-bold transition-all outline-none cursor-pointer ${
                      isCurrent
                        ? "bg-primary text-white shadow-md shadow-primary/10"
                        : "bg-white text-primary hover:bg-black/3 border border-black/5"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border outline-none ${
                currentPage === totalPages
                  ? "bg-black/2 text-primary/30 border-black/5 cursor-not-allowed"
                  : "bg-white text-primary border-black/10 hover:bg-black/3 cursor-pointer"
              }`}
            >
              Nästa <ChevronRight className="h-4 w-4 shrink-0" />
            </button>
          </div>
        )}
      </Container>

      {/* Exquisite Lightbox Details Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectLightbox
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Gallery;
