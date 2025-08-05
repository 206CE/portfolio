'use client';

{/* 1.0.0 BROKEN
  > err unused var
  > Remove Formating
  > Add API Parameter for LLM
  > Add Site Content in pre prompt
  > Make more interactive
   
  
  
  



import { useState, useRef, FormEvent } from 'react';
import { Transition } from '@headlessui/react';
import { FiMessageCircle } from 'react-icons/fi';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

{/*CSS Properties
  --text-primary
  --primary-hover


export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        { sender: 'bot', text: data.response || data.error || 'No response' },
      ]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { sender: 'bot', text: 'Error contacting server.' },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <>
      {/* Chat Icon Button 
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-(--accent-blue) text-(--text-primary) p-4 rounded-full shadow-lg hover:text-(--primary-hover) cursor-pointer transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          <FiMessageCircle size={28} />
        </button>
      )}

      {/* Chat Box 
      <Transition
        show={open}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md">
          <div className="p-4 bg-(--surface) rounded shadow flex flex-col h-[500px]">
            {/* Close Button 
            <button
              className="absolute top-2 right-2 text-(--text-secondary) hover:text-(--secondary-hover)"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              type="button"
            >
              ×
            </button>
            <div className="flex-1 overflow-y-auto space-y-2 mb-4">
              {messages.map((msg, idx) => (
                <Transition
                  key={idx}
                  show={true}
                  enter="transition-opacity duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                >
                  <div
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg max-w-xs break-words ${
                        msg.sender === 'user'
                          ? 'bg-(--primary) text-(--text-primary) rounded-br-none'
                          : 'bg-(--surface) text-(--text-secondary) rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </Transition>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2 rounded-lg bg-(--surface) text-(--text-secondary) animate-pulse">
                    ...
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={sendMessage} className="flex gap-2">
              <input
                ref={inputRef}
                className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-(--primary) text-(--text-primary) px-4 py-2 rounded disabled:opacity-50"
                disabled={loading || !input.trim()}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Transition>
    </>
  );
}  */}