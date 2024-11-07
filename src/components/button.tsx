import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: React.ComponentProps<"button">["className"];
}
const Button = (props: ButtonProps) => {
  const { children, className } = props;
  return (
    <button
      className={cn(
        "shadow-sm bg-mainColor hover:bg-mainHoverColor transition-all hover:shadow-md text-white p-2 px-4 rounded-md text-sm",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
