import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mic, Square, Zap, HardDrive } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export default function TarsPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: 'msg-0',
    role: 'model',
    content: "TARS ONLINE. I AM SYNCED WITH NIKUNJ'S BRAIN. WHAT DO YOU WANT TO KNOW?"
  }]);
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'TARS' | 'CASE'>('TARS');
  const [isRecording, setIsRecording] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Speech Recognition Setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition: any = null;
  
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(prev => prev + ' ' + transcript);
      setIsRecording(false);
    };

    recognition.onerror = () => {
      setIsRecording(false);
    };
    
    recognition.onend = () => {
      setIsRecording(false);
    };
  }

  const toggleRecording = () => {
    if (!recognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }
    
    if (isRecording) {
      recognition.stop();
      setIsRecording(false);
    } else {
      recognition.start();
      setIsRecording(true);
    }
  };

  const handleSendMessage = async () => {
    const trimmedMessage = inputValue.trim();
    if (!trimmedMessage || isLoading) return;

    // Create user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: trimmedMessage
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Send to our Vercel Serverless Function
      const augmentedMessage = `(MODE: ${mode}) ${trimmedMessage}`;
      
      const response = await fetch('/api/tars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: augmentedMessage,
          history: messages.slice(1) // exclude initial greeting from strict history structure
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          role: 'model',
          content: data.response
        }]);
      } else {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          role: 'model',
          content: `SYSTEM ERROR: ${data.error || 'Unknown network failure.'}`
        }]);
      }

    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: "CRITICAL FAILURE. BACKEND OFFLINE."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-brutal-bg dark:bg-tars-board pb-10 pt-24 px-4 sm:px-8 font-mono flex justify-center">
      <div className="w-full max-w-5xl flex flex-col h-[85vh] border-4 border-black bg-white dark:bg-tars-gray shadow-brutal-lg overflow-hidden relative">
        
        {/* TARS Header Bar */}
        <div className="w-full bg-black text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center border-b-4 border-black">
          <div className="flex items-center gap-4">
            <HardDrive className="text-brutal-green animate-pulse" />
            <h1 className="text-3xl font-black uppercase tracking-widest">
              SYSTEM CONSOLE
            </h1>
          </div>
          
          {/* Mode Switcher */}
          <div className="flex mt-4 md:mt-0 gap-2 font-black border-2 border-white p-1">
            <button 
              onClick={() => setMode('TARS')}
              className={`px-4 py-1 uppercase ${mode === 'TARS' ? 'bg-brutal-green text-black' : 'bg-transparent text-white'}`}
            >
              TARS (Quick)
            </button>
            <button 
              onClick={() => setMode('CASE')}
              className={`px-4 py-1 uppercase ${mode === 'CASE' ? 'bg-brutal-blue text-black' : 'bg-transparent text-white'}`}
            >
              CASE (Detail)
            </button>
          </div>
        </div>

        {/* Chat Log Window */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-100 dark:bg-[#1a1a1a]">
          {messages.map((msg) => (
             <motion.div 
               key={msg.id}
               initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
               animate={{ opacity: 1, x: 0 }}
               className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
             >
               <div className={`
                 max-w-[85%] md:max-w-[70%] p-5 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]
                 ${msg.role === 'user' 
                    ? 'bg-brutal-yellow text-black' 
                    : 'bg-white dark:bg-tars-dark dark:text-brutal-green dark:shadow-[4px_4px_0_rgba(74,222,128,1)]'}
               `}>
                 <div className="text-xs font-black mb-2 opacity-50 uppercase">
                    {msg.role === 'user' ? 'YOU \\\\' : mode + ' \\\\'}
                 </div>
                 <p className="whitespace-pre-wrap font-bold text-[1.05rem] leading-relaxed">
                   {msg.content}
                 </p>
               </div>
             </motion.div>
          ))}
          {isLoading && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="flex justify-start w-full"
            >
               <div className="p-4 border-4 border-black bg-white dark:bg-tars-dark dark:text-white shadow-brutal-sm font-black flex gap-2 items-center">
                 <Zap className="animate-spin text-brutal-pink" />
                 <span>PROCESSING {mode} DIRECTIVE...</span>
               </div>
            </motion.div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Console Input Bar */}
        <div className="w-full bg-white dark:bg-tars-gray border-t-4 border-black p-4 flex gap-4">
          <button 
             onClick={toggleRecording}
             type="button"
             className={`p-4 border-4 border-black transition-all shadow-brutal-sm flex items-center justify-center hover:translate-y-1 hover:translate-x-1 hover:shadow-none
                ${isRecording ? 'bg-brutal-pink text-black animate-pulse' : 'bg-gray-200 dark:bg-gray-800 dark:text-white'}
             `}
          >
            {isRecording ? <Square fill="currentColor" /> : <Mic />}
          </button>
          
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="[ TYPE DIRECTIVE HERE ]"
            className="flex-1 p-4 border-4 border-black bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brutal-green text-black uppercase font-black text-lg transition-all"
          />
          
          <button 
             onClick={handleSendMessage}
             disabled={isLoading || !inputValue.trim()}
             className="p-4 bg-black text-white hover:bg-brutal-green hover:text-black border-4 border-black font-black uppercase shadow-[4px_4px_0_rgba(0,0,0,1)] disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <span className="hidden md:block">EXECUTE</span>
            <Send />
          </button>
        </div>

      </div>
    </section>
  );
}
