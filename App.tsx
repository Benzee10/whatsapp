import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import { GROUP_INFO, MESSAGE_SCRIPT, WHATSAPP_BG_URL } from './constants';
import type { Message } from './types';

const ShareGate = ({ shareCount, onShareClick }: { shareCount: number, onShareClick: () => void }) => {
    const progress = (shareCount / 5) * 100;
    return (
        <div className="absolute inset-0 bg-[#E5DDD5] flex flex-col items-center justify-center p-6 text-center z-30">
            <h2 className="text-2xl font-bold text-[#075E54] mb-4">Almost there!</h2>
            <p className="text-gray-700 mb-6 text-lg">Share with 5 groups on WhatsApp to unlock the private feed.</p>
            
            <div className="w-full bg-gray-300 rounded-full h-8 mb-2 overflow-hidden border border-gray-400">
                <div 
                    className="bg-green-500 h-full flex items-center justify-center text-white font-bold transition-all duration-500"
                    style={{ width: `${progress}%` }}
                >
                   {shareCount > 0 && `${shareCount}/5`}
                </div>
            </div>
             <p className="text-gray-600 mb-8 text-sm">Progress: {shareCount} of 5 completed.</p>

            <button
                onClick={onShareClick}
                className="w-full bg-[#25D366] text-white font-bold py-4 px-6 rounded-full text-lg flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-transform transform hover:scale-105"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.428-9.888 9.89.001 2.245.654 4.288 1.902 6.046l-1.299 4.753 4.853-1.269z"/></svg>
                SHARE TO CONTINUE
            </button>
        </div>
    );
};

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingAvatar, setTypingAvatar] = useState<string | null>(null);
  const [showJoinAction, setShowJoinAction] = useState(false);
  const [showShareGate, setShowShareGate] = useState(false);
  const [shareCount, setShareCount] = useState(0);

  // Effect for simulating the chat conversation
  useEffect(() => {
    let currentTimeout: number;

    const addMessageWithDelay = (index: number) => {
      if (index >= MESSAGE_SCRIPT.length) {
        setTypingAvatar(null);
        // Show the join action after the last message has been displayed
        window.setTimeout(() => setShowJoinAction(true), 1000); 
        return;
      }

      const messageData = MESSAGE_SCRIPT[index];
      const displayMessage = () => {
        setTypingAvatar(null);
        setMessages(prev => [...prev, { ...messageData, id: Date.now() + index }]);
        currentTimeout = window.setTimeout(() => addMessageWithDelay(index + 1), 1500 + Math.random() * 1000);
      };

      if (messageData.sender === 'other' && messageData.type !== 'system') {
        setTypingAvatar(messageData.avatar || null);
        currentTimeout = window.setTimeout(displayMessage, 1200 + Math.random() * 1500);
      } else {
        displayMessage();
      }
    };
    currentTimeout = window.setTimeout(() => addMessageWithDelay(0), 1000);
    return () => window.clearTimeout(currentTimeout);
  }, []);

  // Effect to redirect after 5 shares
  useEffect(() => {
      if (shareCount >= 5) {
          window.location.href = 'https://whatsapp.com/channel/0029VaR8AHz0LKZ9GuzyLs1b';
      }
  }, [shareCount]);

  const handleJoinClick = () => {
      window.open('https://ln.run/L-Gey', '_blank');
      setShowJoinAction(false);
      setShowShareGate(true);
  };

  const handleShareClick = () => {
      const message = encodeURIComponent(`You've been invited to the Matured mind group. Don't miss out: ${window.location.href}`);
      window.open(`https://api.whatsapp.com/send?text=${message}`);
      setShareCount(prev => Math.min(prev + 1, 5));
  };


  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="w-full max-w-md h-full sm:h-[90vh] sm:max-h-[800px] flex flex-col bg-[#E5DDD5] shadow-2xl rounded-lg overflow-hidden relative">
        {!showShareGate && (
            <>
                <Header groupInfo={GROUP_INFO} />
                <div 
                  className="flex-grow overflow-hidden relative min-h-0"
                  style={{ backgroundImage: `url(${WHATSAPP_BG_URL})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-5" />
                  <ChatWindow messages={messages} typingAvatar={typingAvatar} showJoinAction={showJoinAction} onJoinClick={handleJoinClick} />
                </div>
                <MessageInput />
            </>
        )}

        {showShareGate && <ShareGate shareCount={shareCount} onShareClick={handleShareClick} />}
      </div>
    </div>
  );
};

export default App;