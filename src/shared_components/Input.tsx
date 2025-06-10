import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "normal" | "one-line" | "ghost" | "lined";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "normal", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          variant === "one-line" && "border-b-[1px] border-gray",
          variant === "lined" && "border-[1px] border-lightgray",
          variant === "ghost" && "bg-transparent placeholder:text-gray",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
