import React from "react";

interface GridProps {
  columns?: number;
  gap?: number | string;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({
  columns = 1,
  gap = 4,
  sm,
  md,
  lg,
  xl,
  className = "",
  children,
}) => {
  const colClass = `grid-cols-${columns}`;
  const gapClass = typeof gap === "number" ? `gap-${gap}` : gap;
  const smClass = sm ? `sm:grid-cols-${sm}` : "";
  const mdClass = md ? `md:grid-cols-${md}` : "";
  const lgClass = lg ? `lg:grid-cols-${lg}` : "";
  const xlClass = xl ? `xl:grid-cols-${xl}` : "";
  return (
    <div className={`grid ${colClass} ${gapClass} ${smClass} ${mdClass} ${lgClass} ${xlClass} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
