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

  // Basic text formatter: strip out any asterisks or markdown to ensure clean text
  const formatText = (text: string) => {
    // Remove all asterisks just in case the AI still sends them
    return text.replace(/\*/g, '');
  };

  return (
    <>
      {/* The Chat Modal */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-8 w-[380px] h-[600px] flex flex-col shadow-2xl z-[9999] rounded-2xl border border-white/10 cursor-auto"
          style={{
            background: "#111111", // Dark theme background
            fontFamily: "system-ui, -apple-system, sans-serif"
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-5 py-4 shrink-0 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[spin_3s_linear_infinite] blur-[2px] opacity-80"></div>
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 animate-[spin_4s_linear_infinite_reverse]"></div>
                <div className="absolute inset-1 rounded-full bg-[#111] z-10 flex items-center justify-center border border-white/20">
                  <span className="text-white text-[8px] font-bold tracking-wider">AI</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-[15px] leading-tight">Ask me anything</span>
                <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">About Prajwal</span>
              </div>
            </div>
            
            {/* Header Icons */}
            <div className="flex items-center gap-3 text-gray-400">
              {/* Analytics Icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:text-white transition-colors"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              {/* Plus Icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:text-white transition-colors"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              {/* Delete Icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:text-white transition-colors"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              {/* Close Icon */}
              <button onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-white transition-colors ml-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-5 pb-24 flex flex-col gap-6 scrollbar-hide relative text-white">
            <div className="text-gray-500 text-xs font-semibold tracking-widest uppercase text-center mb-2">Prajwal's AI</div>
            
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "ai" ? (
                  <div className="bg-[#1c1c1c] border border-white/10 rounded-2xl rounded-tl-sm px-5 py-4 text-[14px] leading-relaxed shadow-sm max-w-[92%] w-fit relative break-words">
                    <p className="text-gray-200">{formatText(msg.content)}</p>
                    {/* Badge */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex items-center gap-2 bg-black/40 border border-white/5 rounded-full px-2 py-1 cursor-pointer hover:bg-white/10 transition-colors">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center relative shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[spin_3s_linear_infinite] blur-[1px]"></div>
                          <div className="absolute inset-0.5 rounded-full bg-black z-10"></div>
                        </div>
                        <span className="text-[11px] font-semibold pr-1 text-gray-300">Prajwal</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/10 text-white border border-white/20 rounded-2xl rounded-tr-sm px-4 py-2.5 text-[14px] leading-relaxed shadow-sm max-w-[85%] w-fit break-words font-medium">
                    {msg.content}
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1c1c1c] border border-white/10 rounded-2xl rounded-tl-sm px-5 py-4 text-gray-500 text-sm flex gap-1 shadow-sm">
                  <span className="animate-pulse">●</span><span className="animate-pulse" style={{animationDelay: "200ms"}}>●</span><span className="animate-pulse" style={{animationDelay: "400ms"}}>●</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
            
            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {SUGGESTIONS.map(sug => (
                  <button
                    key={sug}
                    onClick={() => handleSend(sug)}
                    className="px-4 py-2 rounded-full border border-white/10 bg-[#1a1a1a] text-gray-300 text-[13px] hover:bg-white/10 hover:text-white transition-all cursor-pointer font-medium"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer Input Area */}
          <div className="p-4 shrink-0 bg-[#111111] border-t border-white/5 rounded-b-2xl relative">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-3 relative"
            >
              <input 
                type="text" 
                placeholder="ask something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border border-white/20 rounded-full px-6 py-3 text-[14px] text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors"
                style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem' }}
              />
              <button 
                type="button" 
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
              </button>
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center disabled:opacity-50 hover:bg-white/20 transition-colors shrink-0 cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
            
            {/* Siri-style Glowing Orb */}
            <div className="absolute right-4 bottom-[72px] w-14 h-14 pointer-events-none flex items-center justify-center z-50">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-[spin_4s_linear_infinite] blur-md opacity-80 scale-110"></div>
              <div className="absolute inset-1 rounded-full bg-gradient-to-bl from-cyan-400 via-blue-500 to-purple-600 animate-[spin_3s_linear_infinite_reverse] blur-sm"></div>
              <div className="absolute inset-2 rounded-full bg-black/80 z-10 flex items-center justify-center border border-white/10 shadow-inner">
                <div className="w-3 h-3 rounded-full bg-white/20 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Siri-style Avatar Trigger Button (When Chat is closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-[9999] hover:scale-110 transition-transform duration-300 flex flex-col items-center group cursor-pointer border-none bg-transparent"
          style={{ width: "80px", height: "80px" }}
          title="Chat with AI"
        >
          <div className="w-full h-full relative flex items-center justify-center">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-[spin_4s_linear_infinite] blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
            {/* Inner Core */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 animate-[spin_3s_linear_infinite_reverse] blur-sm"></div>
            {/* Center Dark Sphere */}
            <div className="absolute inset-3 rounded-full bg-[#111] z-10 flex items-center justify-center border border-white/20 shadow-[inset_0_0_15px_rgba(255,255,255,0.2)]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#siri-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                  <defs>
                    <linearGradient id="siri-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop stopColor="#38bdf8" offset="0%" />
                      <stop stopColor="#c084fc" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
               </svg>
            </div>
          </div>
          
          <div className="absolute -top-14 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1c1c1c] text-white text-xs px-4 py-2 rounded-xl border border-white/10 shadow-lg whitespace-nowrap font-medium">
            Ask AI Assistant ✦
          </div>
        </button>
      )}
    </>
  );
}
