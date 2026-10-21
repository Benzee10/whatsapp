import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import { GROUP_INFO, MESSAGE_SCRIPT, WHATSAPP_BG_URL } from './constants';
import type { Message } from './types';

const HOM_LINK = 'https://xibabes.pages.dev';
const AD_LINK = 'https://html-starter-6nu.pages.dev';
const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/CeEz6zEPQu91RLDSY8D1lt?s=cl&p=a&mlu=4&ilr=4&iam=0';
const SHARE_MESSAGE = encodeURIComponent(
    `🔥 I just found this private group with exclusive content! Join now: ${HOM_LINK}\n\nEnter code: MATURED2024`
);
const SHARES_NEEDED = 3; // Reduced from 5 to 3 for higher conversion

const ShareGate = ({ shareCount, onShareClick }: { shareCount: number, onShareClick: () => void }) => {
    const progress = (shareCount / SHARES_NEEDED) * 100;
    
    return (
        <div className="absolute inset-0 bg-[#E5DDD5] flex flex-col items-center justify-center p-6 text-center z-30 safe-area-inset">
            <h2 className="text-3xl sm:text-2xl font-bold text-[#075E54] mb-4">Almost there!</h2>
            
            {/* Value Proposition Card */}
            <div className="bg-[#FFFBF3] rounded-xl p-4 mb-6 border border-[#E3E3E3] w-full max-w-sm">
                <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                    <h3 className="font-semibold text-gray-800">Why share?</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Sharing unlocks access to <span className="font-bold text-[#075E54]">exclusive private content</span> 
                    that isn't available in the public chat. The more you share, the more you unlock.
                </p>
            </div>
            
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
                Share with {SHARES_NEEDED} groups on WhatsApp to unlock the private feed.
            </p>
            
            <div className="w-full max-w-sm bg-gray-300 rounded-full h-10 mb-3 overflow-hidden border border-gray-400">
                <div 
                    className="bg-green-500 h-full flex items-center justify-center text-white font-bold transition-all duration-500"
                    style={{ width: `${progress}%` }}
                >
                   {shareCount > 0 && `${shareCount}/${SHARES_NEEDED}`}
                </div>
            </div>
             <p className="text-gray-600 mb-8 text-base">Progress: {shareCount} of {SHARES_NEEDED} completed.</p>

            <button
                onClick={onShareClick}
                className="w-full max-w-sm bg-[#25D366] text-white font-bold py-5 px-6 rounded-full text-xl flex items-center justify-center gap-3 active:bg-[#128C7E] transition-colors touch-manipulation shadow-lg"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.428-9.888 9.89.001 2.245.654 4.288 1.902 6.046l-1.299 4.753 4.853-1.269z"/></svg>
                SHARE TO CONTINUE
            </button>
            <p className="text-gray-500 text-sm mt-4">Share with friends and get exclusive access!</p>
            
            <style>{`
              .safe-area-inset { 
                padding-top: max(1.5rem, env(safe-area-inset-top)); 
                padding-bottom: max(1.5rem, env(safe-area-inset-bottom)); 
              }
            `}</style>
        </div>
    );
};

const UnlockScreen = ({ onRedirect }: { onRedirect: () => void }) => {
    useEffect(() => {
        // Auto-redirect after 4 seconds
        const timer = setTimeout(onRedirect, 4000);
        return () => clearTimeout(timer);
    }, [onRedirect]);

    return (
        <div className="absolute inset-0 bg-[#E5DDD5] flex flex-col items-center justify-center p-6 text-center z-30 safe-area-inset">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-[#075E54] mb-2">You're In!</h2>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Your private feed access is being unlocked. Join the WhatsApp group to get full access.
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
                    <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                </div>
                <a 
                    href={WHATSAPP_GROUP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#25D366] text-white font-bold py-4 px-6 rounded-full text-lg text-center hover:bg-[#128C7E] transition-colors touch-manipulation"
                >
                    Join the WhatsApp Group
                </a>
                <p className="text-xs text-gray-500 mt-3">Tap above to join. Redirecting automatically...</p>
            </div>
            <style>{`
                @keyframes pulse { 
                    0%, 100% { opacity: 1; } 
                    50% { opacity: 0.5; } 
                }
                .animate-pulse { animation: pulse 1.5s ease-in-out infinite; }
            `}</style>
        </div>
    );
};

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingAvatar, setTypingAvatar] = useState<string | null>(null);
  const [showJoinAction, setShowJoinAction] = useState(false);
  const [showShareGate, setShowShareGate] = useState(false);
  const [showUnlockScreen, setShowUnlockScreen] = useState(false);
  const [shareCount, setShareCount] = useState(() => {
      // Persist share count in localStorage
      const saved = typeof window !== 'undefined' ? localStorage.getItem('shareCount') : null;
      return saved ? parseInt(saved, 10) : 0;
  });
  const [hasTrackedAppOpen, setHasTrackedAppOpen] = useState(false);

  // Track app open event
  useEffect(() => {
      if (!hasTrackedAppOpen && typeof window !== 'undefined') {
          gtag('event', 'app_open', { event_category: 'funnel' });
          setHasTrackedAppOpen(true);
      }
  }, [hasTrackedAppOpen]);

  // Effect to show join button after 6 seconds (reduced from 8 for faster engagement)
  useEffect(() => {
    const joinTimeout = window.setTimeout(() => {
      setShowJoinAction(true);
    }, 6000);

    return () => window.clearTimeout(joinTimeout);
  }, []);

  // Track chat viewed
  useEffect(() => {
      if (messages.length > 0 && typeof window !== 'undefined') {
          gtag('event', 'chat_viewed', { event_category: 'funnel' });
      }
  }, [messages]);

  // Track join prompt shown
  useEffect(() => {
      if (showJoinAction && typeof window !== 'undefined') {
          gtag('event', 'join_prompt_shown', { event_category: 'funnel' });
      }
  }, [showJoinAction]);

  // Track share gate shown
  useEffect(() => {
      if (showShareGate && typeof window !== 'undefined') {
          gtag('event', 'share_gate_shown', { event_category: 'funnel' });
      }
  }, [showShareGate]);

  // Effect for simulating the chat conversation
  useEffect(() => {
    let currentTimeout: number;

    const addMessageWithDelay = (index: number) => {
      if (index >= MESSAGE_SCRIPT.length) {
        setTypingAvatar(null);
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

  // Effect to show unlock screen after enough shares
  useEffect(() => {
      if (shareCount >= SHARES_NEEDED) {
          gtag('event', 'group_invite_triggered', { 
              event_category: 'funnel',
              value: shareCount 
          });
          setShowUnlockScreen(true);
      }
  }, [shareCount]);

  // Effect to redirect to WhatsApp group after unlock screen
  useEffect(() => {
      if (showUnlockScreen) {
          const timer = setTimeout(() => {
              window.location.href = WHATSAPP_GROUP_LINK;
          }, 4000);
          return () => clearTimeout(timer);
      }
  }, [showUnlockScreen]);

  const handleJoinClick = () => {
      // Track ad click
      if (typeof window !== 'undefined') {
          gtag('event', 'ad_click', {
              event_category: 'engagement',
              event_label: 'join_button_clicked'
          });
      }
      // Open ad in a focused window
      window.open(AD_LINK, '_blank', 'noopener,noreferrer');
      setShowJoinAction(false);
      setShowShareGate(true);
  };

  const handleShareClick = () => {
      if (typeof window !== 'undefined') {
          gtag('event', 'share_attempt', {
              event_category: 'engagement',
              event_label: `share_${shareCount + 1}`
          });
      }
      
      window.open(`https://api.whatsapp.com/send?text=${SHARE_MESSAGE}`);
      
      setShareCount(prev => {
          const newCount = Math.min(prev + 1, SHARES_NEEDED);
          // Persist to localStorage
          if (typeof window !== 'undefined') {
              localStorage.setItem('shareCount', newCount.toString());
          }
          return newCount;
      });
      
      // Show success feedback
      setTimeout(() => {
          alert('✅ Share successful! Keep going to unlock the private feed.');
      }, 500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full h-screen sm:w-full sm:max-w-md sm:h-[95vh] sm:max-h-[900px] flex flex-col bg-white sm:shadow-2xl sm:rounded-lg overflow-hidden relative">
        {!showShareGate && !showUnlockScreen && (
            <>
                <Header groupInfo={GROUP_INFO} />
                <div className="flex-grow overflow-hidden relative min-h-0">
                  <ChatWindow messages={messages} typingAvatar={typingAvatar} showJoinAction={showJoinAction} onJoinClick={handleJoinClick} />
                </div>
                <MessageInput />
            </>
        )}

        {showShareGate && !showUnlockScreen && (
            <ShareGate shareCount={shareCount} onShareClick={handleShareClick} />
        )}

        {showUnlockScreen && (
            <UnlockScreen onRedirect={() => { window.location.href = WHATSAPP_GROUP_LINK; }} />
        )}
      </div>
    </div>
  );
};

export default App;