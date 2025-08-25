
import React from 'react';

interface TypingIndicatorProps {
  avatar: string;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ avatar }) => {
  return (
    <div className="flex items-center mb-2">
      <img src={avatar} alt="typing user" className="w-8 h-8 rounded-full mr-3" />
      <div className="flex items-center bg-white px-4 py-3 rounded-lg shadow">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150 mx-1"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  );
};

export default TypingIndicator;