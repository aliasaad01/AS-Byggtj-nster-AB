import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, id, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wider text-primary/70 mb-2">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          ref={ref}
          className={`w-full bg-light-gray border-0 border-b-2 border-black/10 focus:border-gold focus:ring-0 px-1 py-3 transition-all text-primary placeholder:text-black/30 font-sans text-sm focus:bg-white focus:outline-none ${
            error ? "border-red-500 focus:border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-500 font-sans font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
