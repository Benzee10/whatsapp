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

const JoinGroupOverlay = ({ onJoinClick }: { onJoinClick: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-end justify-center z-50 animate-slide-up">
      <div className="bg-white rounded-t-2xl shadow-2xl w-full max-w-sm mx-4 mb-0 p-6 text-center">
        <h3 className="font-bold text-red-600 mb-2 text-lg">❌ You have been removed</h3>
        <p className="text-gray-700 mb-4 text-sm">You were removed from this group for violating community guidelines.</p>
        <button
          onClick={onJoinClick}
          className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-base hover:bg-green-600 transition-transform transform hover:scale-105 w-full"
        >
          JOIN GROUP
        </button>
      </div>
      <style>{`
          @keyframes slide-up { 
            from { transform: translateY(100%); } 
            to { transform: translateY(0); } 
          } 
          .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
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
    <>
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
      </div>
      {showJoinAction && <JoinGroupOverlay onJoinClick={onJoinClick} />}
    </>
  );
};

export default ChatWindow;