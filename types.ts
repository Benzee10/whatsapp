
import type { ReactNode } from 'react';

export type Sender = 'me' | 'other';

export interface Message {
  id: number;
  text: ReactNode;
  timestamp: string;
  sender: Sender;
  senderName?: string;
  senderColor?: string;
  type?: 'message' | 'system';
  avatar?: string;
}