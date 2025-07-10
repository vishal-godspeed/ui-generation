import React from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  "aria-label": string;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
