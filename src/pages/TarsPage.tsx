import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mic, Square, Zap, HardDrive } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export default function TarsPage() {
  // Determine initial state from SessionStorage if it exists
  const getInitialMessages = (): ChatMessage[] => {
    const saved = sessionStorage.getItem('tars_history');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse history");
      }
    }
    return [{
      id: 'msg-0',
      role: 'model',
      content: "TARS ONLINE. I AM SYNCED WITH NIKUNJ'S BRAIN. WHAT DO YOU WANT TO KNOW?"
    }];
  };

  const [messages, setMessages] = useState<ChatMessage[]>(getInitialMessages);
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'TARS' | 'CASE'>('TARS');
  const [isRecording, setIsRecording] = useState(false);
  const [rateLimitRemaining, setRateLimitRemaining] = useState<number>(50);
  const [speechError, setSpeechError] = useState<string | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Sync state to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('tars_history', JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  // Robust Speech Recognition Initialization
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(prev => prev + (prev.endsWith(' ') ? '' : ' ') + transcript);
        setIsRecording(false);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech Rec Error:", event.error);
        setSpeechError("Microphone access denied or unsupported.");
        setIsRecording(false);
      };
      
      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

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
    if (!recognitionRef.current) {
      alert("Your browser does not support Speech Recognition. Use Chrome/Edge desktop.");
      return;
    }
    
    setSpeechError(null);
    
    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (err) {
        console.error("Recording start error", err);
        setIsRecording(false);
      }
    }
  };

  const handleSendMessage = async () => {
    const trimmedMessage = inputValue.trim();
    if (!trimmedMessage || isLoading || rateLimitRemaining === 0) return;

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
      const response = await fetch('/api/tars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: trimmedMessage,
          mode: mode,
          history: messages.slice(1) // exclude initial greeting from strict history structure
        }),
      });

      const data = await response.json();

      // Read Vercel KV rate limit data if provided
      if (data.remaining !== undefined) {
        setRateLimitRemaining(data.remaining);
      }

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
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-widest hidden sm:block">
              SYSTEM CONSOLE
            </h1>
            {/* Visual Rate Limit Block */}
            <div className={`text-xs md:text-sm font-black px-3 py-1 border-2 border-white ${rateLimitRemaining > 5 ? 'bg-brutal-green text-black' : 'bg-brutal-pink text-black animate-pulse'}`}>
              QUOTA: {rateLimitRemaining}/50
            </div>
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
          {speechError && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center w-full">
               <div className="p-2 border-2 border-black bg-brutal-pink text-black font-black text-sm shadow-brutal-sm">
                 {speechError}
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
             disabled={isLoading || !inputValue.trim() || rateLimitRemaining === 0}
             className={`p-4 border-4 border-black font-black uppercase shadow-[4px_4px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2
               ${rateLimitRemaining === 0 ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-black text-white hover:bg-brutal-green hover:text-black'}
             `}
          >
            <span className="hidden md:block">{rateLimitRemaining === 0 ? 'LOCKED' : 'EXECUTE'}</span>
            <Send />
          </button>
        </div>

      </div>
    </section>
  );
}
