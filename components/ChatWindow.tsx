import React, { useRef, useEffect } from 'react';
import type { Message } from '../types';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';

interface ChatWindowProps {
  messages: Message[];
  typingAvatar: string | null;
  showJoinAction: boolean;
  onJoinClick: () => void;
}

const JoinGroupBubble = ({ onJoinClick }: { onJoinClick: () => void }) => (
    <div className="bg-red-100 border border-red-300 self-center text-center text-sm rounded-lg px-4 py-3 my-4 shadow-md max-w-xs mx-auto animate-fade-in">
      <h3 className="font-bold text-red-600 mb-1">❌ You have been removed</h3>
      <p className="text-gray-700 mb-3">You were removed from this group for violating community guidelines.</p>
      <button
        onClick={onJoinClick}
        className="bg-green-500 text-white font-bold py-2 px-6 rounded-full text-base hover:bg-green-600 transition-transform transform hover:scale-105"
      >
        JOIN GROUP
      </button>
      <style>{`
          @keyframes fade-in { 
            from { opacity: 0; transform: translateY(10px); } 
            to { opacity: 1; transform: translateY(0); } 
          } 
          .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  );

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, typingAvatar, showJoinAction, onJoinClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typingAvatar, showJoinAction]);

  const handleClick = () => {
    window.open('https://ln.run/L-Gey', '_blank');
  };

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto px-4 pt-4 pb-2 flex flex-col" onClick={handleClick}>
       <div className="bg-[#E1F2FB] self-center text-center text-sm text-[#597883] rounded-md px-3 py-1 mb-4 shadow">
        TODAY
      </div>
      {messages.map(msg =>
        msg.type === 'system' ? (
          <div key={msg.id} className="bg-[#E1F2FB] self-center text-center text-sm text-[#597883] rounded-md px-3 py-1 my-2 shadow">
            {msg.text}
          </div>
        ) : (
          <ChatBubble key={msg.id} message={msg} />
        )
      )}
      {typingAvatar && <TypingIndicator avatar={typingAvatar} />}
      {showJoinAction && <JoinGroupBubble onJoinClick={onJoinClick} />}
    </div>
  );
};

export default ChatWindow;