import React from "react";

type LinkButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  className = "",
  href,
  ...props
}) => {
  const baseClass = `inline-flex items-center text-info-500 hover:text-info-700 underline font-medium transition ${className}`;
  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={baseClass} {...props}>
      {children}
    </button>
  );
};

export default LinkButton;
