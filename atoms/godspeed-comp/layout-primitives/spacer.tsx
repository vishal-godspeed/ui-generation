import React from "react";

interface SpacerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  direction?: "vertical" | "horizontal";
  className?: string;
}

const sizeMap = {
  xs: "1",
  sm: "2",
  md: "4",
  lg: "8",
  xl: "16",
};

const Spacer: React.FC<SpacerProps> = ({ size = "md", direction = "vertical", className = "" }) => {
  const style =
    direction === "vertical"
      ? { height: `${sizeMap[size]}px`, width: "100%" }
      : { width: `${sizeMap[size]}px`, height: "100%" };
  return <div style={style} className={className} aria-hidden="true" />;
};

export default Spacer;
