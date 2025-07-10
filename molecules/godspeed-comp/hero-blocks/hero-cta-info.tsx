import React from "react";

interface HeroCtaInfoProps {
  title: string;
  description: string;
  cta?: React.ReactNode;
  visual?: React.ReactNode;
  className?: string;
}

const HeroCtaInfo: React.FC<HeroCtaInfoProps> = ({
  title,
  description,
  cta,
  visual,
  className = "",
}) => (
  <section className={`flex flex-col items-center text-center py-8 px-4 ${className}`}>
    {visual && <div className="mb-6">{visual}</div>}
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-primary-700">{title}</h1>
    <p className="text-gray-600 mb-4 max-w-xl mx-auto">{description}</p>
    {cta && <div className="mt-2">{cta}</div>}
  </section>
);

export default HeroCtaInfo; 