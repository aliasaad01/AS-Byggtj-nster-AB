import * as React from "react";
import { motion } from "motion/react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "flat" | "glass" | "glassDark" | "outline";
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "flat",
  hoverEffect = true,
  className = "",
  ...props
}) => {
  const baseStyles = "rounded-xl overflow-hidden transition-all duration-500";
  
  const variants = {
    flat: "bg-white border border-black/5 shadow-sm",
    glass: "glass-card",
    glassDark: "glass-card-dark text-white",
    outline: "border border-black/10 bg-transparent",
  };

  const hoverStyles = hoverEffect 
    ? "hover:-translate-y-1 hover:shadow-lg hover:border-gold/30" 
    : "";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
