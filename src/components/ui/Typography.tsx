import * as React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "display" | "h1" | "h2" | "h3" | "bodyLarge" | "body" | "label" | "caption";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label";
  color?: "primary" | "muted" | "white" | "gold" | "inherit";
  className?: string;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  as,
  color = "inherit",
  className = "",
  children,
  ...props
}) => {
  // Map variant to default HTML tags
  const defaultAsMap: Record<string, string> = {
    display: "h1",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    bodyLarge: "p",
    body: "p",
    label: "span",
    caption: "span",
  };

  const Component = as || (defaultAsMap[variant] as any) || "p";

  const variantStyles = {
    display: "font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-balance",
    h1: "font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight text-balance",
    h2: "font-display text-2xl md:text-4xl font-bold tracking-tight leading-snug",
    h3: "font-display text-xl md:text-2xl font-bold tracking-snug",
    bodyLarge: "font-sans text-base md:text-lg leading-relaxed",
    body: "font-sans text-sm md:text-base leading-relaxed",
    label: "font-sans text-xs font-bold uppercase tracking-[0.25em]",
    caption: "font-sans text-xs text-muted-dark font-medium",
  };

  const colorStyles = {
    primary: "text-primary",
    muted: "text-muted-dark",
    white: "text-white",
    gold: "text-gold",
    inherit: "",
  };

  return (
    <Component
      className={`${variantStyles[variant]} ${colorStyles[color]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
