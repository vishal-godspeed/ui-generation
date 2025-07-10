import React from "react";

interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      aria-label="Close"
      className={`inline-flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 transition ${className}`}
      {...props}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
};

export default CloseButton;
