import React from 'react';

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
    <div className="bg-[#075E54] flex items-center p-3 sm:p-2.5 shadow-md z-10 safe-area-top">
      <div className="flex items-center flex-grow min-w-0">
        <button className="p-1 -ml-1 mr-2 touch-manipulation">
          <BackArrowIcon />
        </button>
        <img src={groupInfo.avatar} alt={groupInfo.name} className="w-10 h-10 rounded-full mr-3 flex-shrink-0" />
        <div className="flex flex-col min-w-0 flex-grow">
          <span className="text-white font-semibold text-lg truncate">{groupInfo.name}</span>
          <span className="text-gray-300 text-sm truncate">{groupInfo.members}</span>
        </div>
      </div>
      <div className="flex items-center space-x-4 ml-2">
        <button className="p-2 -m-2 touch-manipulation">
          <VideoCallIcon />
        </button>
        <button className="p-2 -m-2 touch-manipulation">
          <PhoneCallIcon />
        </button>
        <button className="p-2 -m-2 touch-manipulation">
          <MoreOptionsIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;