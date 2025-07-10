import React from 'react';

interface SocialIcon {
  href: string;
  icon: React.ReactNode;
}

const FooterWithSocials: React.FC = () => {
  // Social icons data
  const socialIcons: SocialIcon[] = [
    {
      href: "#",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="4" fill="#0d1836"/>
        </svg>
      )
    },
    {
      href: "#",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="4" fill="#0d1836"/>
        </svg>
      )
    },
    {
      href: "#",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="4" fill="#0d1836"/>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-400/40 via-blue-300/40 to-purple-300/40 min-h-screen flex flex-col justify-end">
      <footer className="w-full bg-white/30 backdrop-blur-md border-t border-white/20 py-10 px-4 rounded-t-2xl shadow-lg">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-gray-900 text-2xl sm:text-3xl font-semibold mb-4">Xultions.</span>
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6 text-center">
            Start your day with the spirit of exercising and you will get many very important benefits
          </p>
          <div className="flex gap-7 mt-2">
            {socialIcons.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterWithSocials;