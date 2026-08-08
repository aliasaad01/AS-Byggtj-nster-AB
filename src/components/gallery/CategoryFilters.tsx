import * as React from "react";
import { SlidersHorizontal } from "lucide-react";

interface CategoryFiltersProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  getCategoryCount: (category: string) => number;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  getCategoryCount,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-black/5">
      <div className="flex items-center gap-2 text-muted-dark text-xs font-semibold uppercase tracking-wider">
        <SlidersHorizontal className="h-3.5 w-3.5 text-gold" />
        Filtrera Kategori:
      </div>

      <div className="flex flex-wrap gap-2 md:justify-end">
        {categories.map((category) => {
          const isActive =
            activeCategory.toLowerCase() === category.toLowerCase();
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 rounded-xl text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 outline-none flex items-center gap-2 border border-transparent cursor-pointer ${
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/15"
                  : "bg-white text-primary hover:bg-black/5 border-black/6"
              }`}
            >
              {category}
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-light-gray text-muted-dark"
                }`}
              >
                {getCategoryCount(category)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
