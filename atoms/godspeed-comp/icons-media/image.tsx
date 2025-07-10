import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt?: string;
  rounded?: boolean;
  shadow?: boolean;
  fallbackSrc?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt = "Image", rounded = false, shadow = false, fallbackSrc, className = "" }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => fallbackSrc && setImgSrc(fallbackSrc)}
      className={`object-cover ${rounded ? "rounded-xl" : "rounded"} ${shadow ? "shadow-lg" : ""} ${className}`}
    />
  );
};

export default Image;
