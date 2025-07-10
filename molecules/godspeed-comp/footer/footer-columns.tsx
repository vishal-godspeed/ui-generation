import React from 'react';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const FooterColumns: React.FC = () => {
  // Footer columns data
  const columns: FooterColumn[] = [
    {
      title: "Product",
      links: [
        { text: "About", href: "#" },
        { text: "How It's Work", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Mobile", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Help/FAQ", href: "#" },
        { text: "Documentation", href: "#" },
        { text: "Guide", href: "#" },
        { text: "Tutorial", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { text: "About", href: "#" },
        { text: "Sumbit on issue", href: "#" },
        { text: "Support", href: "#" },
        { text: "Company us", href: "#" }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-400/40 via-blue-300/40 to-purple-300/40 min-h-screen flex flex-col justify-end">
      <footer className="w-full bg-white/30 backdrop-blur-md border-t border-white/20 py-10 px-4 sm:py-12 md:py-16 rounded-t-2xl shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 sm:gap-16 md:flex-row md:items-start md:justify-between md:gap-20">
          {/* Left section */}
          <div className="w-full max-w-md flex flex-col items-center md:items-start md:w-[340px]">
            <span className="text-gray-900 text-2xl sm:text-3xl font-semibold mb-4">Xultions.</span>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-8 text-center md:text-left">
              Start your day with the spirit of exercising and you will get many very important benefits
            </p>
          </div>
          
          {/* Columns */}
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col min-w-[160px] items-center md:items-start">
              <span className="text-gray-900 text-lg font-semibold mb-2">{column.title}</span>
              {column.links.map((link, linkIndex) => (
                <a 
                  key={linkIndex} 
                  href={link.href} 
                  className="text-gray-800 text-base mb-2 hover:text-indigo-600 transition"
                >
                  {link.text}
                </a>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default FooterColumns;