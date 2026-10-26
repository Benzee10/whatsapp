import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = readFileSync(new URL('../chatSequence.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { createChatSequence } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);

const script = [
  { type: 'system', text: 'Joined', timestamp: '11:15 PM', sender: 'other' },
  ...['voice', 'text', 'photo', 'video'].map((text, i) => ({
    text, timestamp: `11:${16 + i} PM`, sender: 'other', avatar: text,
  })),
];

test('shuffles without losing messages, metadata, notices or chronological slots', () => {
  const original = structuredClone(script);
  const result = createChatSequence(script, () => 0);
  assert.deepEqual(script, original);
  assert.deepEqual(result[0], script[0]);
  assert.deepEqual(result.map(m => m.timestamp), script.map(m => m.timestamp));
  assert.deepEqual(result.slice(1).map(m => m.text).sort(), ['photo', 'text', 'video', 'voice']);
  assert.notDeepEqual(result, script);
  for (const message of result.slice(1)) assert.equal(message.avatar, message.text);
});

test('any message type can open the conversation', () => {
  const starters = new Set();
  // Enumerate all Fisher–Yates choices for four conversation messages.
  for (let a = 0; a < 4; a++) for (let b = 0; b < 3; b++) for (let c = 0; c < 2; c++) {
    const draws = [(a + 0.5) / 4, (b + 0.5) / 3, (c + 0.5) / 2];
    starters.add(createChatSequence(script, () => draws.shift())[1].text);
  }
  assert.deepEqual([...starters].sort(), ['photo', 'text', 'video', 'voice']);
});

test('handles empty and system-only scripts', () => {
  assert.deepEqual(createChatSequence([]), []);
  assert.deepEqual(createChatSequence([script[0]]), [script[0]]);
});
