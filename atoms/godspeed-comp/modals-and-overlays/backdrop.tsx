import React from "react";

interface BackdropProps {
  open: boolean;
  blur?: boolean;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ open, blur = true, color = "bg-black/60", className = "", children }) => {
  if (!open) return null;
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${color} ${blur ? "backdrop-blur-sm" : ""} transition-all duration-200 ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};

export default Backdrop;
