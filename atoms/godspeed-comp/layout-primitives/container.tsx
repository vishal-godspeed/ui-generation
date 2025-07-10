import React from "react";

interface ContainerProps {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: string;
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}

const maxWidthMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  full: "w-full",
};

const Container: React.FC<ContainerProps> = ({
  maxWidth = "lg",
  padding = "px-4 py-8",
  center = true,
  className = "",
  children,
}) => {
  return (
    <div className={`${maxWidthMap[maxWidth]} ${padding} ${center ? "mx-auto" : ""} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
