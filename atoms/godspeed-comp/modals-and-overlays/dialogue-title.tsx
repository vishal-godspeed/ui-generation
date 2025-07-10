import React from "react";

interface DialogueTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const DialogueTitle: React.FC<DialogueTitleProps> = ({ children, icon, className = "" }) => (
  <div className={`flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4 ${className}`}>
    {icon && <span className="text-primary-500">{icon}</span>}
    <span>{children}</span>
  </div>
);

export default DialogueTitle;
