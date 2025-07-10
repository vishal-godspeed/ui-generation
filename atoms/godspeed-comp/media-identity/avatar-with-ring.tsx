import React from "react";

interface AvatarWithRingProps {
  src: string;
  alt?: string;
  size?: number;
  ringColor?: string;
  className?: string;
}

const AvatarWithRing: React.FC<AvatarWithRingProps> = ({
  src,
  alt = "Avatar",
  size = 48,
  ringColor = "bg-gradient-to-tr from-purple-400 via-pink-400 to-yellow-400",
  className = "",
}) => (
  <span
    className={`inline-flex items-center justify-center rounded-full p-1 ${ringColor} ${className}`}
    style={{ width: size + 8, height: size + 8 }}
    aria-label={alt}
  >
    <img
      src={src}
      alt={alt}
      className="rounded-full object-cover bg-white"
      style={{ width: size, height: size }}
    />
  </span>
);

export default AvatarWithRing; 