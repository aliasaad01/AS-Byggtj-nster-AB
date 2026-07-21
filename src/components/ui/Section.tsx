import * as React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "white" | "light" | "dark" | "gold";
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = "white",
  id,
  className = "",
  ...props
}) => {
  const bgClasses = {
    white: "bg-white text-primary",
    light: "bg-light-gray text-primary",
    dark: "bg-primary text-white",
    gold: "bg-gold-light text-primary",
  };

  return (
    <section
      id={id}
      className={`py-14 md:py-20 relative overflow-hidden transition-colors duration-500 ${bgClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
