import React from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  badge?: React.ReactNode;
  className?: string;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-20 h-20",
};

const Avatar: React.FC<AvatarProps> = ({ src, alt = "Avatar", size = "md", badge, className = "" }) => (
  <div className={`relative inline-block ${sizeMap[size]} ${className}`}>
    <img
      src={src}
      alt={alt}
      className={`rounded-full border-2 border-gray-200 object-cover ${sizeMap[size]}`}
    />
    {badge && (
      <span className="absolute bottom-0 right-0 block w-3 h-3 rounded-full ring-2 ring-white bg-green-400">{badge}</span>
    )}
  </div>
);

export default Avatar;
