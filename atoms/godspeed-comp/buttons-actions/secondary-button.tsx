import React from "react";

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`btn bg-secondary-500 hover:bg-secondary-700 text-white focus:ring-4 focus:ring-secondary-300 font-semibold rounded-md px-4 py-2 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
