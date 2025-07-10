import React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`btn text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-semibold rounded-md px-4 py-2 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
