import * as React from "react";
import { motion } from "motion/react";
import {
  Utensils,
  Bath,
  Sun,
  Hammer,
  Shield,
  Paintbrush,
  ArrowRight,
} from "lucide-react";
import { Service } from "../../types";
import { Card } from "../ui/Card";
import { Typography } from "../ui/Typography";

// Dynamic Icon rendering helper based on data model
export const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "Utensils":
      return (
        <Utensils className="h-6 w-6 text-primary group-hover:text-gold transition-colors duration-300" />
      );
    case "Bath":
      return (
        <Bath className="h-6 w-6 text-primary group-hover:text-gold transition-colors duration-300" />
      );
    case "Sun":
      return (
        <Sun className="h-6 w-6 text-primary group-hover:text-gold transition-colors duration-300" />
      );
    case "Spade":
      return (
        <Hammer className="h-6 w-6 text-primary group-hover:text-gold transition-colors duration-300" />
      );
    case "Fence":
      return (
        <Shield className="h-6 w-6 text-primary group-hover:text-gold transition-colors duration-300" />
      );
    case "Paintbrush":
      return (
        <Paintbrush className="h-6 w-6 text-primary group-hover:text-gold transition-colors duration-300" />
      );
    default:
      return (
        <Hammer className="h-6 w-6 text-primary group-hover:text-gold transition-colors duration-300" />
      );
  }
};

interface ServiceCardProps {
  service: Service;
  index: number;
  onSelect: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  onSelect,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        variant="flat"
        className="group h-full p-8 flex flex-col justify-between hover:border-gold/30 hover:shadow-xl transition-all duration-300 border-black/5 bg-white text-left"
      >
        <div>
          <div className="flex items-center justify-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-light-gray text-primary flex items-center justify-center group-hover:bg-gold/10 transition-all duration-300 shadow-sm border border-black/3">
              {getServiceIcon(service.icon)}
            </div>
            <Typography
              variant="h3"
              className="font-display font-bold text-lg md:text-xl text-primary group-hover:text-gold transition-colors duration-300"
            >
              {service.title}
            </Typography>
          </div>
          <Typography
            variant="body"
            className="text-muted-dark font-sans text-sm leading-relaxed mb-4 font-light"
          >
            {service.description}
          </Typography>
        </div>

        <div className="pt-4 border-t border-black/5">
          <button
            onClick={onSelect}
            className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary group-hover:text-gold group-hover:gap-3 transition-all duration-300 outline-none cursor-pointer"
          >
            Läs mer &amp; se omfattning <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </Card>
    </motion.div>
  );
};
