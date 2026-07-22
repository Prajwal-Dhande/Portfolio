"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "ai";
  content: string;
};

const SUGGESTIONS = [
  "What has Prajwal built?",
  "What's his tech stack?",
  "Tell me about him",
];

// Glowing AI Icon for header
const AIIcon = ({ size = 38 }: { size?: number }) => (
  <div style={{ width: size, height: size, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-[2px] opacity-90 animate-[spin_4s_linear_infinite]"></div>
    <div className="relative w-[90%] h-[90%] rounded-full bg-black overflow-hidden border border-white/10 flex items-center justify-center z-10 shadow-inner">
      <img src="/siri.png" alt="Siri" className="w-full h-full object-cover scale-105" onError={(e) => {
        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23222"/><text x="50" y="55" font-family="sans-serif" font-size="20" fill="white" text-anchor="middle">Siri</text></svg>';
      }} />
    </div>
  </div>
);

// Floating trigger button with glowing effect
const SiriIcon = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center rounded-full ${className}`}>
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-[3px] opacity-80 animate-[spin_3s_linear_infinite]"></div>
    <div className="absolute -inset-[6px] bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500 rounded-full blur-[8px] opacity-50 animate-[spin_5s_linear_infinite_reverse]"></div>
    <div className="relative w-full h-full rounded-full overflow-hidden border-[1.5px] border-white/40 shadow-[inset_0_0_10px_rgba(255,255,255,0.5),0_0_15px_rgba(0,0,0,0.8)] bg-black z-10">
      <img src="/siri.png" alt="Siri" className="w-full h-full object-cover scale-105" onError={(e) => {
        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23222"/><text x="50" y="55" font-family="sans-serif" font-size="20" fill="white" text-anchor="middle">AI</text></svg>';
      }} />
    </div>
  </div>
);

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hey! What do you want to know about Prajwal? 👋" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", content: text }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      
      const data = await res.json();
      
      if (data && data.reply) {
        setMessages(prev => [...prev, { role: "ai", content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: "ai", content: "Sorry, I didn't get a valid response from the server." }]);
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages(prev => [...prev, { role: "ai", content: "Oops! I couldn't connect to my brain." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: "ai", content: "Hey! What do you want to know about Prajwal? 👋" }]);
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed z-[9999] animate-[slideIn_0.3s_ease-out] cursor-auto inset-0 sm:inset-auto sm:bottom-[100px] sm:right-6 w-full sm:w-[400px] h-[100dvh] sm:h-[580px] sm:max-h-[80vh]"
        >
          <div className="w-full h-full bg-[#1a1b2e] flex flex-col overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(99,102,241,0.1)] border border-white/10 rounded-none sm:rounded-[20px]">

            {/* ===== HEADER ===== */}
            <div style={{
              padding: '16px 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              flexShrink: 0,
            }}>
              {/* Left: AI Icon + Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <AIIcon size={38} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#f0f0f5', letterSpacing: '0.3px' }}>Ask me anything</div>
                  <div style={{ fontSize: '11px', color: '#6b7280', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', marginTop: '2px' }}>ABOUT PRAJWAL</div>
                </div>
              </div>
              {/* Right: Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {/* Sparkle */}
                <button onClick={() => {}} style={{ width: '32px', height: '32px', borderRadius: '8px', border: 'none', backgroundColor: 'transparent', color: '#6b7280', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </button>
                {/* New Chat */}
                <button onClick={clearChat} style={{ width: '32px', height: '32px', borderRadius: '8px', border: 'none', backgroundColor: 'transparent', color: '#6b7280', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
                {/* Clear */}
                <button onClick={clearChat} style={{ width: '32px', height: '32px', borderRadius: '8px', border: 'none', backgroundColor: 'transparent', color: '#6b7280', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
                {/* Close */}
                <button onClick={() => setIsOpen(false)} style={{ width: '32px', height: '32px', borderRadius: '8px', border: 'none', backgroundColor: 'transparent', color: '#6b7280', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            </div>

            {/* ===== SUBTITLE ===== */}
            <div style={{ textAlign: 'center', padding: '10px 0 4px', fontSize: '10px', color: '#4b5563', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
              PRAJWAL&apos;S AI
            </div>

            {/* ===== CHAT MESSAGES ===== */}
            <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '8px 20px 16px', position: 'relative' }} className="scrollbar-hide">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === "user" ? 'flex-end' : 'flex-start' }} className="animate-[fadeIn_0.3s_ease-out]">
                    {msg.role === "user" ? (
                      <div style={{
                        maxWidth: '80%', padding: '12px 18px',
                        backgroundColor: '#2d2f45', borderRadius: '18px 18px 6px 18px',
                        color: '#e5e7eb', fontSize: '14px', fontWeight: 400,
                        lineHeight: 1.6, wordBreak: 'break-word',
                      }}>
                        {msg.content}
                      </div>
                    ) : (
                      <div>
                        <div style={{
                          maxWidth: '85%', padding: '14px 18px',
                          backgroundColor: '#252740', borderRadius: '18px 18px 18px 6px',
                          color: '#d1d5db', fontSize: '14px', fontWeight: 400,
                          lineHeight: 1.7, wordBreak: 'break-word',
                          border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          {msg.content.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                            if (part.startsWith("**") && part.endsWith("**")) {
                              return <strong key={i} style={{ fontWeight: 600, color: '#f3f4f6' }}>{part.slice(2, -2)}</strong>;
                            }
                            return part;
                          })}
                        </div>
                        {/* AI label below message */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px', paddingLeft: '4px' }}>
                          <div style={{ width: '20px', height: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-[1px] opacity-80"></div>
                            <div className="relative w-[16px] h-[16px] rounded-full bg-[#111] border border-white/20 z-10"></div>
                          </div>
                          <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: 500 }}>Prajwal</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Loading */}
                {isLoading && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="animate-pulse">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6366f1' }} className="animate-bounce" />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8b5cf6', animationDelay: '0.1s' }} className="animate-bounce" />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ec4899', animationDelay: '0.2s' }} className="animate-bounce" />
                  </div>
                )}
                
                {/* Suggestions */}
                {messages.length === 1 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }} className="animate-[fadeIn_0.5s_ease-out]">
                    {SUGGESTIONS.map(sug => (
                      <button
                        key={sug}
                        onClick={() => handleSend(sug)}
                        style={{
                          padding: '10px 16px', borderRadius: '12px',
                          border: '1px solid rgba(255,255,255,0.08)',
                          backgroundColor: '#252740', color: '#9ca3af',
                          fontSize: '13px', fontWeight: 500, cursor: 'pointer',
                          transition: 'all 0.2s', whiteSpace: 'nowrap',
                        }}
                        className="hover:!bg-[#2d2f45] hover:!text-white hover:!border-[rgba(255,255,255,0.15)]"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Glowing Orb (decorative) */}
              <div style={{
                position: 'absolute', bottom: '20px', right: '20px',
                width: '70px', height: '70px', borderRadius: '50%',
                background: 'radial-gradient(circle, #6366f1 0%, #4c1d95 40%, transparent 70%)',
                filter: 'blur(2px)', opacity: 0.6,
                pointerEvents: 'none',
              }} />
            </div>

            {/* ===== INPUT AREA ===== */}
            <div style={{
              padding: '14px 20px 18px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              flexShrink: 0,
            }}>
              <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="ask something..."
                  style={{
                    flex: 1, backgroundColor: '#1e1f2e',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#e5e7eb', fontSize: '14px', fontWeight: 400,
                    padding: '12px 18px', borderRadius: '999px',
                    outline: 'none', transition: 'all 0.2s',
                  }}
                  className="focus:!border-[rgba(255,255,255,0.2)] placeholder:text-gray-500"
                />
                {/* Mic icon */}
                <button type="button" style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  border: 'none', backgroundColor: 'transparent',
                  color: '#6b7280', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="1" width="6" height="11" rx="3"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="23" x2="12" y2="17"/></svg>
                </button>
                {/* Send icon */}
                <button
                  type="submit"
                  disabled={!input.trim()}
                  style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    border: 'none', backgroundColor: 'transparent',
                    color: input.trim() ? '#818cf8' : '#4b5563',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'color 0.2s',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-[90px] right-4 sm:bottom-8 sm:right-8 z-[9999] hover:scale-110 transition-transform duration-300 flex flex-col items-center group cursor-pointer border-none bg-transparent"
          style={{ width: "70px", height: "70px" }}
          title="Chat with AI"
        >
          <SiriIcon className="w-full h-full shadow-2xl rounded-full" />
        </button>
      )}
    </>
  );
}
