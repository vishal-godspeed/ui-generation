import React from 'react';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface ProfileCardProps {
  name: string;
  title: string;
  status?: string;
  about: string;
  profileImage: string;
  socialLinks: SocialLink[];
  onContact?: () => void;
  onPortfolioCheck?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  status,
  about,
  profileImage,
  socialLinks,
  onContact = () => console.log('Contact clicked'),
  onPortfolioCheck = () => console.log('Portfolio clicked')
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #a4508b 0%, #5f0a87 100%)', minHeight: '100vh' }}>
      <div className="relative max-w-3xl w-full mx-auto bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-stretch p-6 md:p-10 mt-4" style={{ minHeight: '420px' }}>
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-3xl md:text-4xl font-bold text-black">{name}</h2>
              <span className="ml-2 text-2xl font-bold text-gray-400">...</span>
            </div>
            <div className="text-lg font-semibold text-gray-400 mt-1">{title}</div>
            
            {status && (
              <div className="inline-block mt-3 mb-4 px-4 py-1 border-2 border-yellow-400 bg-yellow-50 text-yellow-600 font-semibold rounded-full text-sm">
                {status}
              </div>
            )}
            
            <div className="mt-2">
              <h3 className="text-lg font-bold mb-1">About</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {about}
              </p>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-1">Social</h3>
              <div className="flex gap-4 text-2xl text-black mt-1">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    aria-label={link.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mt-8 mb-2">
            <button 
              onClick={onContact}
              className="flex-1 py-3 rounded-full bg-black text-white font-semibold text-lg shadow hover:bg-gray-900 transition"
            >
              Contact
            </button>
            <button 
              onClick={onPortfolioCheck}
              className="flex-1 py-3 rounded-full border-2 border-black text-black font-semibold text-lg bg-white hover:bg-gray-100 transition"
            >
              Check Portfolio
            </button>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="md:absolute md:right-[-80px] md:top-1/2 md:-translate-y-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="w-40 h-40 rounded-full border-8 border-white shadow-lg overflow-hidden flex items-center justify-center bg-gray-200">
            <img src={profileImage} alt={`${name}'s profile`} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;