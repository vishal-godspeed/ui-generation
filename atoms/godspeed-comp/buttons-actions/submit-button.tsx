import React from "react";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      type="submit"
      className={`btn bg-success-500 hover:bg-success-700 text-white focus:ring-4 focus:ring-success-300 font-semibold rounded-md px-4 py-2 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
