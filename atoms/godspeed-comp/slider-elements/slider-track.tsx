import React from "react";

interface SliderTrackProps {
  progress?: number;
  color?: string;
  rounded?: boolean;
  className?: string;
}

const SliderTrack: React.FC<SliderTrackProps> = ({ progress = 0, color = "bg-primary-500", rounded = true, className = "" }) => (
  <div className={`relative w-full h-2 bg-gray-200 ${rounded ? "rounded-full" : "rounded"} ${className}`}>
    <div
      className={`absolute top-0 left-0 h-2 ${color} ${rounded ? "rounded-full" : "rounded"}`}
      style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
    />
  </div>
);

export default SliderTrack;
