
import React from 'react';

interface HeaderProps {
  groupInfo: {
    name: string;
    avatar: string;
    members: string;
  };
}

const Header: React.FC<HeaderProps> = ({ groupInfo }) => {
  return (
    <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button className="mr-3">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </button>
        <img 
          src={groupInfo.avatar} 
          alt={groupInfo.name} 
          className="w-10 h-10 rounded-full mr-3" 
        />
        <div>
          <div className="font-semibold text-white flex items-center">
            {groupInfo.name}
            <span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 ml-2 min-w-[20px] text-center">18</span>
            <div className="flex ml-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full ml-1"></div>
            </div>
          </div>
          <div className="text-sm text-gray-200">{groupInfo.members}</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </button>
        <button>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H20C21.1 4 22 4.9 22 6V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V6C2 4.9 2.9 4 4 4H7ZM4 8V20H20V8H4Z"/>
          </svg>
        </button>
        <button>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;

interface HeaderProps {
  groupInfo: {
    name: string;
    avatar: string;
    members: string;
  };
}

const BackArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
  </svg>
);

const VideoCallIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
    <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
  </svg>
);

const PhoneCallIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.292-.088.442A15.433 15.433 0 0 0 18 18.485c.15.076.341.047.442-.088l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
    </svg>
);


const MoreOptionsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
    <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
  </svg>
);


const Header: React.FC<HeaderProps> = ({ groupInfo }) => {
  return (
    <div className="bg-[#075E54] flex items-center p-2.5 shadow-md z-10">
      <div className="flex items-center flex-grow">
        <BackArrowIcon />
        <img src={groupInfo.avatar} alt={groupInfo.name} className="w-10 h-10 rounded-full mx-3" />
        <div className="flex flex-col">
          <span className="text-white font-semibold text-lg">{groupInfo.name}</span>
          <span className="text-gray-300 text-sm truncate">{groupInfo.members}</span>
        </div>
      </div>
      <div className="flex items-center space-x-5 mr-2">
        <VideoCallIcon />
        <PhoneCallIcon />
        <MoreOptionsIcon />
      </div>
    </div>
  );
};

export default Header;