import React from 'react';
import type { Message } from './types';

// --- UTILITIES & COMPONENTS ---

const generateRandomPhoneNumber = () => {
    const countryCode = '+1'; 
    const areaCode = Math.floor(Math.random() * (999 - 200 + 1) + 200);
    const firstPart = Math.floor(Math.random() * (999 - 200 + 1) + 200);
    const secondPart = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    return `${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
};

const VoiceMessage = ({ duration }: { duration: string }) => (
    <div className="flex items-center w-48">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white bg-green-500 rounded-full p-1 mr-2 flex-shrink-0">
            <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125a.375.375 0 0 1 .375-.375h6.75a.375.375 0 0 1 .375.375V4.125a.375.375 0 0 1-.375.375h-6.75a.375.375 0 0 1-.375-.375V4.125Z" clipRule="evenodd" />
        </svg>
        <div className="flex-grow h-1 bg-gray-300 rounded-full relative">
            <div className="absolute top-0 left-0 h-1 bg-green-500 rounded-full w-3/4"></div>
            <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-green-500 rounded-full -translate-y-1/2"></div>
        </div>
        <span className="text-xs text-gray-500 ml-2">{duration}</span>
    </div>
);

const PhotoGroupMessage = ({ count, seed }: { count: number; seed: string }) => {
    const imageUrls = [
        'https://images.unsplash.com/photo-1494790108755-2616c04b9914?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop'
    ];

    return (
        <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden">
            {[...Array(Math.min(count, 4))].map((_, i) => (
                <div key={i} className={`relative ${count > 4 && i === 3 ? 'brightness-50' : ''}`}>
                    <img src={imageUrls[i] || `https://picsum.photos/seed/${seed}${i}/200/200`} className="w-full h-full object-cover" alt={`photo ${i + 1}`} />
                    {count > 4 && i === 3 && (
                        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                            +{count - 3}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const VideoGroupMessage = ({ count, seed }: { count: number; seed: string }) => (
    <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden">
        {[...Array(Math.min(count, 4))].map((_, i) => (
            <div key={i} className={`relative ${count > 4 && i === 3 ? 'brightness-50' : ''}`}>
                <img src={`https://picsum.photos/seed/${seed}${i}/200/200`} className="w-full h-full object-cover" alt={`video ${i + 1}`} />
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 17.385 2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                </svg>
                {count > 4 && i === 3 && (
                    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-50">
                        +{count - 3}
                    </div>
                )}
            </div>
        ))}
    </div>
);


// --- CHAT DATA ---

const RANDOM_NUMBER_1 = generateRandomPhoneNumber();
const RANDOM_NUMBER_2 = generateRandomPhoneNumber();
const RANDOM_NUMBER_3 = generateRandomPhoneNumber();

export const GROUP_INFO = {
  name: 'Matured mind',
  avatar: 'https://picsum.photos/seed/group/200/200',
  members: `You, ${RANDOM_NUMBER_1}, ${RANDOM_NUMBER_2}, ${RANDOM_NUMBER_3}`,
};

const SENDER_1 = {
    sender: 'other' as const,
    senderName: RANDOM_NUMBER_1,
    senderColor: 'text-purple-500',
    avatar: 'https://picsum.photos/seed/female1/200/200',
};

const SENDER_2 = {
    sender: 'other' as const,
    senderName: RANDOM_NUMBER_2,
    senderColor: 'text-green-500',
    avatar: 'https://picsum.photos/seed/male1/200/200',
};

const SENDER_3 = {
    sender: 'other' as const,
    senderName: RANDOM_NUMBER_3,
    senderColor: 'text-blue-500',
    avatar: 'https://picsum.photos/seed/female2/200/200',
};

export const MESSAGE_SCRIPT: Omit<Message, 'id'>[] = [
    {
        type: 'system',
        text: `${RANDOM_NUMBER_1} joined the group`,
        timestamp: '11:15 PM',
        sender: 'other',
    },
    {
        ...SENDER_1,
        text: <VoiceMessage duration="0:07" />,
        timestamp: '11:16 PM',
    },
    {
        ...SENDER_2,
        text: "You found it. Welcome to the inner circle. You see the stuff they're posting?",
        timestamp: '11:16 PM',
    },
    {
        ...SENDER_2,
        text: <PhotoGroupMessage count={5} seed="naughty_photos" />,
        timestamp: '11:17 PM',
    },
    {
        ...SENDER_1,
        text: <PhotoGroupMessage count={8} seed="private_pics" />,
        timestamp: '11:17 PM',
    },
    {
        ...SENDER_1,
        text: <VideoGroupMessage count={3} seed="exclusive_content1" />,
        timestamp: '11:17 PM',
    },
    {
        ...SENDER_3,
        text: "Wait till you see the videos... \uD83D\uDE0F",
        timestamp: '11:18 PM',
    },
    {
        ...SENDER_3,
        text: <VideoGroupMessage count={8} seed="naughty_videos" />,
        timestamp: '11:18 PM',
    },
    {
        ...SENDER_2,
        text: <VideoGroupMessage count={6} seed="premium_vids" />,
        timestamp: '11:19 PM',
    },
    {
        ...SENDER_1,
        text: "This is insane! I can't believe this is real.",
        timestamp: '11:19 PM',
    },
    {
        ...SENDER_3,
        text: <PhotoGroupMessage count={9} seed="exclusive_shots" />,
        timestamp: '11:19 PM',
    },
    {
        ...SENDER_1,
        text: <VideoGroupMessage count={4} seed="hidden_clips" />,
        timestamp: '11:20 PM',
    },
    {
        ...SENDER_3,
        text: <VideoGroupMessage count={7} seed="secret_archive" />,
        timestamp: '11:20 PM',
    },
    {
        ...SENDER_2,
        text: "Just the beginning. The real unfiltered content is in the private feed. Only a few spots left.",
        timestamp: '11:21 PM',
    },
    {
        ...SENDER_1,
        text: <PhotoGroupMessage count={15} seed="mega_gallery" />,
        timestamp: '11:21 PM',
    },
    {
        ...SENDER_3,
        text: <PhotoGroupMessage count={7} seed="behind_scenes" />,
        timestamp: '11:21 PM',
    },
    {
        ...SENDER_2,
        text: <VideoGroupMessage count={12} seed="ultimate_collection" />,
        timestamp: '11:21 PM',
    }
];


export const WHATSAPP_BG_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX/27i+19gDAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=";