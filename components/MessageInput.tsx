
import React from 'react';

const SmileyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.975.435-.975.975s.435.975.975.975.975-.435.975-.975S9.915 8.25 9.375 8.25Zm5.25 0c-.54 0-.975.435-.975.975s.435.975.975.975.975-.435.975-.975-.435-.975-.975-.975ZM12 15a4.505 4.505 0 0 0 4.5-4.5H7.5A4.505 4.505 0 0 0 12 15Z" clipRule="evenodd" />
    </svg>
);

const PaperclipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500 -rotate-45">
      <path fillRule="evenodd" d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.5 10.5a.75.75 0 0 0 1.061 1.06l10.5-10.5a.75.75 0 0 1 1.06 0Zm-2.474 3.535a2.25 2.25 0 0 0-3.182 0l-6.75 6.75a.75.75 0 0 0 1.06 1.06l6.75-6.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
      <path d="M11.03 8.283a3.75 3.75 0 0 1 5.304 0l4.5 4.5a3.75 3.75 0 0 1-5.304 5.303l-7.5-7.5a2.25 2.25 0 0 1 3.182-3.182l6.75 6.75a.75.75 0 0 0 1.06-1.06l-6.75-6.75a3.75 3.75 0 0 0-5.304 0l-1.5 1.5a.75.75 0 1 0 1.06 1.06l1.5-1.5Z" />
    </svg>
);

const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
      <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
      <path fillRule="evenodd" d="M9.344 3.071.866 15.75A2.25 2.25 0 0 0 2.866 19.5h18.268a2.25 2.25 0 0 0 2.001-3.75L14.656 3.071a2.25 2.25 0 0 0-4.002 0ZM12 15.75a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z" clipRule="evenodd" />
    </svg>
);

const MicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
    <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
    <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.75 6.75 0 1 1-13.5 0v-1.5A.75.75 0 0 1 6 10.5Z" />
  </svg>
);

const MessageInput: React.FC = () => {
  return (
    <div className="bg-[#F0F0F0] p-3 flex items-center space-x-3">
      <div className="flex-grow flex items-center bg-white rounded-full px-4 py-3 shadow-sm">
        <SmileyIcon />
        <input
          type="text"
          placeholder="Message"
          disabled
          className="bg-transparent flex-grow mx-3 text-gray-700 outline-none placeholder-gray-400"
        />
        <PaperclipIcon />
        <CameraIcon />
      </div>
      <button className="bg-[#075E54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
        <MicIcon />
      </button>
    </div>
  );
};

export default MessageInput;