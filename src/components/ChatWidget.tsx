import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Bot, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { chatData, ChatOption } from '../data/chatScripts';
import { PopupModal } from 'react-calendly';

interface ChatWidgetProps {
  lang: Language;
}

type Message = {
  type: 'bot' | 'user';
  text: string;
};

const ChatWidget: React.FC<ChatWidgetProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentScriptNode, setCurrentScriptNode] = useState('welcome');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentData = chatData[lang];
  // Ideally this rootElement is set elsewhere, but often defaults to document.body if not specified.
  // react-calendly needs a rootElement to mount the modal. 
  // We'll use document.getElementById('root') which is standard in Vite.
  const rootElement = document.getElementById('root');

  // Initialize chat when opening or changing language
  useEffect(() => {
    // Reset if language changes while open
    setMessages([]);
    setCurrentScriptNode('welcome');
    processNode('welcome', true);
  }, [lang]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const processNode = async (nodeId: string, clear: boolean = false) => {
    if (nodeId === 'back') {
        processNode('welcome');
        return;
    }

    const node = currentData[nodeId];
    if (!node) return;

    if (clear) setMessages([]);

    setIsTyping(true);
    
    // Simulate typing delay for each message bubble
    for (let i = 0; i < node.text.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800)); // Typing delay
        setMessages(prev => [...prev, { type: 'bot', text: node.text[i] }]);
    }
    
    setIsTyping(false);
    setCurrentScriptNode(nodeId);
  };

  const handleOptionClick = (option: ChatOption) => {
    // Add user selection as a message
    setMessages(prev => [...prev, { type: 'user', text: option.label }]);
    
    if (option.action === 'trigger-booking') {
        setIsCalendarOpen(true);
        // Optionally add a follow up message from bot like "Opening calendar..."
    } else if (option.action === 'link' && option.value) {
        window.open(option.value, '_blank');
    } else {
        processNode(option.id);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        setHasUnread(false);
        if (messages.length === 0) {
            processNode('welcome', true);
        }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[70vh] bg-surface border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
                {/* Header */}
                <div className="bg-primary/10 p-4 border-b border-white/10 flex justify-between items-center backdrop-blur-md">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <Bot className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Concierge</h3>
                            <p className="text-xs text-green-400 flex items-center">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button onClick={handleToggle} className="text-gray-400 hover:text-white transition">
                        <Minus className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                                msg.type === 'user' 
                                ? 'bg-primary text-black rounded-tr-none' 
                                : 'bg-white/10 text-white rounded-tl-none'
                            }`}>
                                <p className="text-sm">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                         <div className="flex justify-start">
                             <div className="bg-white/10 text-white rounded-2xl rounded-tl-none px-4 py-3 flex space-x-1">
                                 <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                 <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                 <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                             </div>
                         </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Options / Input Area */}
                <div className="p-4 bg-surface border-t border-white/10">
                    {!isTyping && currentData[currentScriptNode]?.options && (
                        <div className="flex flex-wrap gap-2">
                             {currentData[currentScriptNode].options?.map((opt) => (
                                 <button
                                     key={opt.id}
                                     onClick={() => handleOptionClick(opt)}
                                     className="text-xs sm:text-sm border border-primary/30 text-primary hover:bg-primary hover:text-black px-3 py-2 rounded-full transition-all duration-200 mb-1"
                                 >
                                     {opt.label}
                                 </button>
                             ))}
                        </div>
                    )}
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-black rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center z-50 group hover:bg-white"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && hasUnread && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-background"></span>
        )}
      </motion.button>

      {/* Calendly Popup Modal */}
      {isCalendarOpen && (
        <PopupModal
            url="https://calendly.com/haimphysio"
            rootElement={document.getElementById('root') || document.body}
            open={isCalendarOpen}
            onModalClose={() => setIsCalendarOpen(false)}
        />
      )}
    </>
  );
};

export default ChatWidget;
