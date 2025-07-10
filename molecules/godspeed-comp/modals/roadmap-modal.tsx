import React, { useState } from 'react';

interface User {
  id: string;
  name: string;
  avatar: string;
  role?: string;
  badge?: {
    text: string;
    color: string;
  };
}

interface RoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  users?: User[];
  onShare?: (emails: string) => void;
}

const RoadmapModal: React.FC<RoadmapModalProps> = ({
  isOpen,
  onClose,
  title = "VSX Roadmap",
  users = [
    {
      id: '1',
      name: 'Leslie Alexander',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      role: 'Owner'
    },
    {
      id: '2',
      name: 'Darrell Steward',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      badge: {
        text: 'New',
        color: 'yellow'
      }
    },
    {
      id: '3',
      name: 'Arlene McCoy',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
  ],
  onShare = (emails) => console.log('Sharing with:', emails)
}) => {
  const [activeTab, setActiveTab] = useState<'share' | 'links' | 'publish'>('share');
  const [inviteInput, setInviteInput] = useState('');
  const [allowEditAccess, setAllowEditAccess] = useState(true);
  const [accessLevel, setAccessLevel] = useState<'view' | 'edit'>('view');

  const handleShare = () => {
    if (inviteInput.trim()) {
      onShare(inviteInput);
      setInviteInput('');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText('https://example.com/roadmap/vsx');
    // You could add a toast notification here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gray-900 rounded-2xl shadow-lg w-full max-w-lg p-6 flex flex-col gap-4" id="roadmap-modal">
        <div className="flex items-center justify-between mb-2">
          <div className="text-white text-xl font-semibold" data-roadmap-title>{title}</div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
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
        </div>
        
        <div className="flex gap-2 mb-4" data-roadmap-tabs>
          <button 
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'share' ? 'bg-gray-800 text-white font-semibold' : 'text-gray-400 hover:bg-gray-800'
            }`}
            onClick={() => setActiveTab('share')}
          >
            Share
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'links' ? 'bg-gray-800 text-white font-semibold' : 'text-gray-400 hover:bg-gray-800'
            }`}
            onClick={() => setActiveTab('links')}
          >
            Links
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'publish' ? 'bg-gray-800 text-white font-semibold' : 'text-gray-400 hover:bg-gray-800'
            }`}
            onClick={() => setActiveTab('publish')}
          >
            Publish
          </button>
        </div>
        
        {activeTab === 'share' && (
          <>
            <div className="mb-4" data-roadmap-invite>
              <label className="block text-gray-400 text-sm mb-1">Invite</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type names or emails..." 
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500" 
                  value={inviteInput}
                  onChange={(e) => setInviteInput(e.target.value)}
                />
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                  onClick={handleShare}
                >
                  Share
                </button>
              </div>
            </div>
            
            <div className="mb-4" data-roadmap-shared>
              <label className="block text-gray-400 text-sm mb-1">Shared with</label>
              <div className="flex flex-col gap-2">
                {users.map(user => (
                  <div key={user.id} className="flex items-center gap-3">
                    <img src={user.avatar} className="w-8 h-8 rounded-full" alt={user.name} />
                    <span className="text-white font-semibold">{user.name}</span>
                    {user.role && (
                      <span className="text-gray-400 text-xs ml-2">{user.role}</span>
                    )}
                    {user.badge && (
                      <span className={`bg-${user.badge.color}-400 text-black text-xs px-2 py-0.5 rounded ml-2`}>
                        {user.badge.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'links' && (
          <div className="mb-4" data-roadmap-link>
            <label className="block text-gray-400 text-sm mb-1">Get Link</label>
            <div className="flex items-center gap-2">
              <span className="text-white">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 inline align-middle" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.102 1.101" 
                  />
                </svg>
                {' '}Anyone with this link
              </span>
              <button 
                className="bg-gray-800 text-blue-500 px-3 py-1 rounded-lg text-sm font-semibold flex items-center gap-1"
                onClick={copyLink}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
                  />
                </svg>
                Copy doc link
              </button>
              <select 
                className="bg-gray-800 text-white rounded-lg px-2 py-1 text-sm"
                value={accessLevel}
                onChange={(e) => setAccessLevel(e.target.value as 'view' | 'edit')}
              >
                <option value="view">Can View</option>
                <option value="edit">Can Edit</option>
              </select>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-2" data-roadmap-advanced>
          <span className="text-gray-400 text-sm">Allow people who can edit to change access</span>
          <label className="inline-flex items-center cursor-pointer relative">
            <input 
              type="checkbox" 
              className="sr-only peer"
              checked={allowEditAccess}
              onChange={() => setAllowEditAccess(!allowEditAccess)}
            />
            <div className="w-10 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute w-4 h-4 bg-white rounded-full left-1 top-1 peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>
        
        <div className="text-gray-500 text-xs mt-2" data-roadmap-note>
          The permissions of this doc are stored
        </div>
      </div>
    </div>
  );
};

export default RoadmapModal;