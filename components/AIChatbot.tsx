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
    
    // Add user message
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
      setMessages(prev => [...prev, { role: "ai", content: "Oops! I couldn't connect to my brain. Is the local server running?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Modal */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 w-[340px] md:w-[380px] h-[500px] flex flex-col shadow-2xl z-[9999]"
          style={{
            background: "#111111",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.1)",
            fontFamily: "system-ui, sans-serif"
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">🤖</div>
              <div>
                <h3 className="text-sm font-semibold text-white/90 m-0">Ask me anything</h3>
                <p className="text-[10px] tracking-widest text-white/40 uppercase m-0 mt-0.5">About Prajwal</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/40 hover:text-white/80 p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <p className="text-[10px] tracking-widest text-white/30 uppercase mb-2">Prajwal's AI</p>
            
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div 
                  className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-white text-black rounded-br-sm" 
                      : "bg-[#1C1C1E] text-white/90 rounded-bl-sm border border-white/5"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl bg-[#1C1C1E] text-white/50 rounded-bl-sm border border-white/5 text-sm flex gap-1">
                  <span className="animate-bounce">.</span><span className="animate-bounce" style={{animationDelay: "75ms"}}>.</span><span className="animate-bounce" style={{animationDelay: "150ms"}}>.</span>
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
                    className="px-3 py-1.5 rounded-full border border-white/10 text-white/60 text-xs hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 shrink-0">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2 bg-[#1C1C1E] rounded-full border border-white/10 px-4 py-2"
            >
              <input 
                type="text" 
                placeholder="Ask something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center disabled:opacity-50 hover:bg-gray-200 transition-colors shrink-0 cursor-pointer"
              >
                <span className="text-xs font-bold leading-none" style={{ transform: "translateY(-1px)" }}>↗</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating 3D Avatar Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-[9999] hover:scale-105 transition-transform duration-200 flex flex-col items-center group cursor-pointer border-none bg-transparent"
        style={{ width: "120px", height: "140px" }}
        title="Chat with AI"
      >
        {/* Placeholder for 3D character - user should drop their .gif or image here */}
        <div className="w-full h-full relative">
          <img 
            src="/3d-avatar.gif" 
            alt="3D AI Avatar" 
            className="w-full h-full object-contain filter drop-shadow-2xl"
            onError={(e) => {
              // Fallback styling if file doesn't exist yet
              const target = e.target as HTMLImageElement;
              target.onerror = null; 
              target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='140' viewBox='0 0 120 140'><rect width='120' height='140' fill='rgba(255,255,255,0.1)' rx='12'/><text x='50%' y='45%' dominant-baseline='middle' text-anchor='middle' font-size='30'>🤖</text><text x='50%' y='65%' dominant-baseline='middle' text-anchor='middle' font-size='12' fill='white'>Drop avatar</text><text x='50%' y='75%' dominant-baseline='middle' text-anchor='middle' font-size='12' fill='white'>here</text></svg>";
            }}
          />
        </div>
        
        {/* Helper text bubble (shows on hover) */}
        {!isOpen && (
          <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-3 py-1.5 rounded-full border border-white/20 shadow-lg whitespace-nowrap">
            Ask me anything! ↗
          </div>
        )}
      </button>
    </>
  );
}
