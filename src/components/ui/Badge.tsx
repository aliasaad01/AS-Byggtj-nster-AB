import * as React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = "primary", className = "" }) => {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider";
  
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-light-gray text-primary",
    gold: "bg-gold/10 text-gold border border-gold/20",
    outline: "border border-black/10 text-muted-dark",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
