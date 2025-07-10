import React from "react";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  color?: string;
  label?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ orientation = "horizontal", color = "border-gray-200", label, className = "" }) => {
  if (orientation === "vertical") {
    return (
      <div className={`h-full w-px ${color} bg-current mx-2 ${className}`} role="separator" aria-orientation="vertical">
        {label && <span className="sr-only">{label}</span>}
      </div>
    );
  }
  return (
    <div className={`w-full h-px ${color} bg-current my-4 ${className}`} role="separator" aria-orientation="horizontal">
      {label && <span className="sr-only">{label}</span>}
    </div>
  );
};

export default Divider;
