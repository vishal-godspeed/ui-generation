import React from "react";

interface DialogueContentProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  padding?: string;
  rounded?: string;
  className?: string;
}

const sizeMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

const DialogueContent: React.FC<DialogueContentProps> = ({
  children,
  size = "md",
  padding = "p-6",
  rounded = "rounded-2xl",
  className = "",
}) => (
  <div className={`bg-white dark:bg-gray-900 shadow-lg w-full ${sizeMap[size]} ${padding} ${rounded} ${className}`}>{children}</div>
);

export default DialogueContent;
