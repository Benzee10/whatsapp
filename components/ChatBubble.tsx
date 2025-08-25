
import React from 'react';
import type { Message } from '../types';

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isMe = message.sender === 'me';

  return (
    <div className={`flex w-full mb-2 ${isMe ? 'justify-end' : 'justify-start items-start'}`}>
      {!isMe && message.avatar && (
        <img src={message.avatar} alt={message.senderName || ''} className="w-8 h-8 rounded-full mr-3" />
      )}
      <div className={`relative max-w-xs md:max-w-md px-3 py-2 rounded-lg shadow ${isMe ? 'bg-[#DCF8C6]' : 'bg-white'}`}>
        {!isMe && message.senderName && (
          <div className={`text-sm font-bold mb-1 ${message.senderColor || 'text-gray-600'}`}>
            {message.senderName}
          </div>
        )}
        <div className="text-gray-800 text-sm break-words">
          {message.text}
        </div>
        <div className="text-right text-xs text-gray-400 mt-1">
          {message.timestamp}
          {isMe && <ReadReceipts />}
        </div>
      </div>
    </div>
  );
};

const ReadReceipts = () => (
    <svg viewBox="0 0 18 18" height="18" width="18" className="inline-block ml-1 -mb-0.5">
        <path fill="#4FC3F7" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.37.37 0 0 1-.52.063l-2.794-2.474a.434.434 0 0 0-.67.482l3.332 2.95a.37.37 0 0 0 .52-.063l7.018-8.998a.433.433 0 0 0 .075-.594zm-4.435 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.37.37 0 0 1-.52.063l-2.794-2.474a.434.434 0 0 0-.67.482l3.332 2.95a.37.37 0 0 0 .52-.063l7.018-8.998a.433.433 0 0 0 .075-.594z"></path>
    </svg>
);


export default ChatBubble;
