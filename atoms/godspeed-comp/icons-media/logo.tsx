import React from "react";

interface LogoProps {
  svg?: React.ReactNode;
  imgSrc?: string;
  label?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ svg, imgSrc, label = "Logo", className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="bg-blue-500 rounded-xl p-2 flex items-center justify-center">
      {svg ? (
        svg
      ) : imgSrc ? (
        <img src={imgSrc} alt={label} className="w-8 h-8 object-contain" />
      ) : (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      )}
    </span>
    {label && <span className="font-bold text-lg text-gray-900 dark:text-white">{label}</span>}
  </div>
);

export default Logo;
