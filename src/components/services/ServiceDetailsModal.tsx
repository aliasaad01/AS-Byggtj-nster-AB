import * as React from "react";
import { motion } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";
import { Service } from "../../types";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";
import { getServiceIcon } from "./ServiceCard";

interface ServiceDetailsModalProps {
  service: Service;
  onClose: () => void;
}

export const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({
  service,
  onClose,
}) => {
  // Lock body scroll and handle Escape key to dismiss details drawer
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-primary/45 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl z-10 border border-black/5 text-left"
      >
        <button
          onClick={onClose}
          aria-label="Stäng detaljer"
          className="absolute top-6 right-6 p-1.5 text-primary/50 hover:text-primary hover:bg-light-gray rounded-full transition-colors outline-none"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
            {getServiceIcon(service.icon)}
          </div>
          <Typography variant="h3" className="font-display font-bold text-xl text-primary">
            {service.title}
          </Typography>
        </div>

        <Typography variant="body" className="text-muted-dark font-sans text-sm leading-relaxed mb-8 font-light">
          {service.description}
        </Typography>

        <Typography variant="label" color="gold" className="text-xs font-bold uppercase tracking-widest mb-4 block">
          Vad som ingår i tjänsten:
        </Typography>

        <ul className="space-y-4 mb-8">
          {service.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <Typography variant="body" className="font-sans text-sm text-primary/80 leading-relaxed font-light">
                {detail}
              </Typography>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a href="#contact" onClick={onClose} className="w-full">
            <Button variant="primary" className="w-full text-xs uppercase tracking-widest font-bold py-4">
              Begär Offert För {service.title}
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
