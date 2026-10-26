import type { Message } from './types';

type ScriptMessage = Omit<Message, 'id'>;

/** Shuffle chat messages without moving system notices or reversing timestamps. */
export function createChatSequence(
  script: readonly ScriptMessage[],
  random: () => number = Math.random,
): ScriptMessage[] {
  const conversation = script.filter(message => message.type !== 'system');

  // Fisher–Yates gives every message (including media) an equal chance
  // of appearing first, without repeating or dropping any messages.
  for (let i = conversation.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [conversation[i], conversation[j]] = [conversation[j], conversation[i]];
  }

  let index = 0;
  return script.map(slot => {
    if (slot.type === 'system') return { ...slot };
    return { ...conversation[index++], timestamp: slot.timestamp };
  });
}
