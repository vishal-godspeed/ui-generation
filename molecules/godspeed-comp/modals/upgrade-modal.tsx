import React from 'react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  customIcon?: React.ReactNode;
  customTitle?: string;
  customPrice?: React.ReactNode;
  customPlan?: string;
  customFeatures?: string[];
  customDescription?: string;
  customLink?: {
    text: string;
    url: string;
  };
  customPayAmount?: string;
  onUpgrade?: () => void;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  customIcon,
  customTitle = "Upgrade to Scale",
  customPrice = <>USD <span className="text-2xl font-bold text-black">549</span>/mo <span className="text-xs">billed annually</span></>,
  customPlan = "Everything in Rise +",
  customFeatures = [
    "25 users",
    "Multiple Payment Methods",
    "Advance Invoices",
    "Priority Phone Support",
    "Custom User Roles",
    "NetSuite & Intacct"
  ],
  customDescription = "For businesses that want to improve revenue workflow efficiencies with automation, deep integrations and in-depth subscription analytics.",
  customLink = {
    text: "Take me to the pricing page",
    url: "#"
  },
  customPayAmount = "549",
  onUpgrade = () => console.log("Upgrade clicked")
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-8 flex flex-col gap-4" id="upgrade-modal">
        <div className="flex items-center gap-4 mb-2">
          <div className="bg-orange-100 rounded-xl p-3 flex items-center justify-center" data-upgrade-icon>
            {customIcon || (
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <rect width="32" height="32" rx="8" fill="#FF7A2F"/>
                <text x="16" y="22" textAnchor="middle" fill="#fff" fontSize="18" fontFamily="Arial" fontWeight="bold">⚡</text>
              </svg>
            )}
          </div>
          <div>
            <div className="text-gray-900 text-lg font-semibold" data-upgrade-title>
              {customTitle}
            </div>
            <div className="text-gray-500 text-sm" data-upgrade-price>
              {customPrice}
            </div>
          </div>
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="ml-auto text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
        
        <div className="text-purple-700 font-semibold text-lg mb-2" data-upgrade-plan>
          {customPlan}
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-2" data-upgrade-features>
          {customFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700 text-sm">
              <span className="text-purple-600">✔</span> {feature}
            </div>
          ))}
        </div>
        
        <div className="text-gray-500 text-sm mb-4" data-upgrade-description>
          {customDescription}
        </div>
        
        <a 
          href={customLink.url} 
          className="text-blue-600 underline text-sm mb-4" 
          data-upgrade-link
        >
          {customLink.text}
        </a>
        
        <div className="bg-orange-50 rounded-xl p-4 flex flex-col items-center gap-2">
          <div className="text-gray-900 text-lg font-semibold" data-upgrade-pay>
            Pay Now <span className="text-orange-600">{customPayAmount}</span> <span className="text-xs">USD</span>
          </div>
          <button 
            className="w-full py-3 rounded-xl bg-[#FF7A2F] hover:bg-orange-600 text-white font-semibold text-lg transition" 
            data-upgrade-action
            onClick={onUpgrade}
          >
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;