import React from "react";

interface GradientBgProps {
  children?: React.ReactNode;
  gradient?: string;
  rounded?: string;
  className?: string;
}

const GradientBg: React.FC<GradientBgProps> = ({
  children,
  gradient = "bg-gradient-to-tr from-purple-400 via-pink-400 to-yellow-400",
  rounded = "rounded-xl",
  className = "",
}) => (
  <div className={`${gradient} ${rounded} ${className}`}>{children}</div>
);

export default GradientBg; 