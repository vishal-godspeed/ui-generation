import React from "react";

interface OverlayProps {
  open: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ open, onClick, className = "", children }) => {
  if (!open) return null;
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-200 ${className}`}
      onClick={onClick}
      aria-modal="true"
      role="dialog"
    >
      {children}
    </div>
  );
};

export default Overlay;
