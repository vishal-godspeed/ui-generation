import React from "react";

interface IconTextInlineProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const IconTextInline: React.FC<IconTextInlineProps> = ({ icon, text, className = "" }) => (
  <span className={`inline-flex items-center gap-1 ${className}`}>
    {icon}
    <span>{text}</span>
  </span>
);

export default IconTextInline; 