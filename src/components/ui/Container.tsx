import * as React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean; // If true, removes the horizontal padding
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  clean = false,
  size = "xl",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={`mx-auto w-full ${clean ? "" : "px-6 lg:px-8"} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
