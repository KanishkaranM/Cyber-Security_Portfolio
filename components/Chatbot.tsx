import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { USER_INFO, SKILLS, PROJECTS } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `System connected. I am the AI assistant for ${USER_INFO.name}. How can I help you?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API key not configured");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `You are an AI assistant for ${USER_INFO.name}'s cybersecurity portfolio. 
      Context:
      Bio: ${USER_INFO.bio}
      Role: ${USER_INFO.role}
      Skills: ${SKILLS.map(s => s.name).join(', ')}
      Projects: ${PROJECTS.map(p => p.title).join(', ')}
      
      Answer questions helpfully and concisely. Maintain a slightly technical, professional tone.`;

      const contents = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n') + `\nUser: ${userMsg}\nAssistant:`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: contents,
        config: {
          systemInstruction
        }
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || 'No response generated.' }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Error: Connection failed or API key missing.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-cyber-green text-black rounded-full shadow-[0_0_15px_rgba(0,255,65,0.4)] hover:bg-green-400 transition-all z-50 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-cyber-dark border border-cyber-green rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.2)] flex flex-col z-50 overflow-hidden font-mono">
          {/* Header */}
          <div className="bg-cyber-gray px-4 py-3 border-b border-cyber-green/30 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="text-cyber-green" size={20} />
              <span className="text-white font-bold">AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-cyber-green/20 text-cyber-green border border-cyber-green/30 rounded-tr-none' : 'bg-cyber-gray text-gray-300 border border-gray-700 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg text-sm bg-cyber-gray text-gray-300 border border-gray-700 rounded-tl-none flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-cyber-gray border-t border-cyber-green/30 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-black/50 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-cyber-green transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 bg-cyber-green text-black rounded hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
