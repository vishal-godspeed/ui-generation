import React from "react";

interface FlexboxProps {
  direction?: "row" | "col";
  gap?: number | string;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Flexbox: React.FC<FlexboxProps> = ({
  direction = "row",
  gap = 4,
  align = "center",
  justify = "start",
  wrap = false,
  className = "",
  children,
}) => {
  const dir = direction === "col" ? "flex-col" : "flex-row";
  const gapClass = typeof gap === "number" ? `gap-${gap}` : gap;
  const alignMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };
  const justifyMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };
  return (
    <div className={`flex ${dir} ${gapClass} ${alignMap[align]} ${justifyMap[justify]}${wrap ? " flex-wrap" : ""} ${className}`}>
      {children}
    </div>
  );
};

export default Flexbox;
