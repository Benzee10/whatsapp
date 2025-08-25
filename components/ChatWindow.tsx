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
      <div className="bg-white rounded-t-3xl shadow-2xl w-full mx-0 sm:mx-4 sm:max-w-sm mb-0 p-6 pb-8 sm:pb-6 text-center safe-area-bottom">
        {/* Location Warning Message */}
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Access Restricted</h2>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">You were removed because your location does not match. Click the join button to verify your location.</p>

        {/* Member Avatars */}
        <div className="flex justify-center items-center mb-8 -space-x-2">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LlmiQuoxyVY90_y9NqtZ7vuO8ZzJG0j5JlU4pWPopFLmE0TjTgZDYyI&s=10" 
            alt="Member" 
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJV2XHAUTvnd_MjP8ni23c_Bce4lcl6ivVEaXj5WOlhytV1DsceIqcFvM&s=10" 
            alt="Member" 
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7YclcvudcKJKkVKcmED-5H0Zvr6_DggzOmw&s" 
            alt="Member" 
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>

        {/* Join Button */}
        <button
          onClick={onJoinClick}
          className="bg-[#25D366] text-white font-semibold py-4 px-8 rounded-full text-lg active:bg-[#128C7E] transition-colors w-full touch-manipulation"
        >
          Join The Group
        </button>
      </div>
      <style>{`
          @keyframes slide-up { 
            from { transform: translateY(100%); } 
            to { transform: translateY(0); } 
          } 
          .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
          .safe-area-bottom { padding-bottom: max(2rem, env(safe-area-inset-bottom)); }
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
      <div ref={scrollRef} className="h-full overflow-y-auto overflow-x-hidden px-3 sm:px-4 pt-4 pb-4 flex flex-col bg-[#E5DDD5] touch-pan-y" onClick={handleClick}>
        {messages.map(msg =>
          msg.type === 'system' ? (
            <div key={msg.id} className="bg-[#FFFBF3] self-center text-center text-sm text-[#8696A0] rounded-md px-4 py-2 my-3 shadow-sm border border-[#E3E3E3] max-w-xs">
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