import React, { useRef } from "react";

interface CardCarouselProps {
  children: React.ReactNode;
  className?: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (ref.current) {
      ref.current.scrollBy({
        left: dir === "left" ? -240 : 240,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hidden sm:block"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-1"
        tabIndex={0}
        role="region"
        aria-label="Card carousel"
      >
        {children}
      </div>
      <button
        type="button"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hidden sm:block"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};

export default CardCarousel; 