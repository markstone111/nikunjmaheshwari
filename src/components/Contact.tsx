import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Send, CheckCircle2, ExternalLink } from 'lucide-react';

const topics = [
  'Collaboration',
  'Hiring / Full-Time',
  'Freelance / Contract',
  'Quick Chat'
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Collaboration');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Compose mailto payload
    const subject = encodeURIComponent(`[Portfolio] ${selectedTopic} - from ${name}`);
    const body = encodeURIComponent(
      `Hello Nikunj,\n\nName: ${name}\nEmail: ${email}\nTopic: ${selectedTopic}\n\nMessage:\n${message}\n\n---\nSent via Portfolio Contact Form`
    );

    // Open user's email client
    window.open(`mailto:contact@nikunjmaheshwari.xyz?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi Nikunj! My name is ${name || '[Your Name]'} (${email || 'No email provided'}).\n\nI'm reaching out regarding: ${selectedTopic}\n\nMessage:\n${message || 'Looking forward to connecting!'}`
    );
    window.open(`https://wa.me/919720324825?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-brutal-bg dark:bg-tars-board font-sans border-t-4 border-black transition-colors duration-300">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3.5 py-1 mb-3 bg-brutal-yellow text-black border-2 border-black font-mono font-bold text-xs uppercase shadow-brutal-sm">
              COMMUNICATION CHANNELS // DIRECT DISPATCH
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white uppercase tracking-tighter drop-shadow-[3px_3px_0_rgba(74,222,128,1)]">
              Get in Touch
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT COLUMN: Contact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919720324825"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-3 border-black bg-white dark:bg-tars-dark p-4 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all block"
              >
                <div className="w-12 h-12 rounded-none bg-[#25D366] border-2 border-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-7 h-7 text-black fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.545 1.782.834 2.801.834h.005c3.18 0 5.767-2.587 5.768-5.766.001-3.18-2.586-5.821-5.778-5.821zm3.398 8.167c-.146.411-.848.791-1.196.84-.344.048-.775.076-2.518-.647-.977-.405-1.611-1.391-1.66-1.456-.048-.065-.395-.526-.395-1.002 0-.476.248-.711.336-.808.089-.097.195-.121.26-.121.066 0 .13.002.187.005.061.003.141-.024.22.167.081.195.276.674.3.723.025.049.041.106.008.17-.033.065-.049.106-.098.163-.049.057-.102.127-.146.171-.049.049-.1.102-.043.2.057.098.254.419.546.679.376.335.693.439.791.488.098.049.155.041.212-.025.057-.065.244-.284.309-.382.065-.098.13-.081.22-.049.089.033.569.268.667.317.098.049.163.073.187.114.024.04.024.235-.122.646z"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.52 1.34 5L2 22l5.18-1.31C8.61 21.49 10.26 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.57 0-3.04-.44-4.3-1.2l-.31-.18-3.07.78.82-2.99-.2-.32C4.19 14.86 3.75 13.48 3.75 12c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25z"/>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black dark:text-white uppercase">WhatsApp</h3>
                    <span className="text-[10px] font-mono font-bold bg-[#25D366] text-black px-1.5 py-0.2 border border-black">
                      FAST
                    </span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-300 font-bold text-sm truncate">
                    +91 9720324825
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:contact@nikunjmaheshwari.xyz"
                className="group flex items-center gap-4 border-3 border-black bg-white dark:bg-tars-dark p-4 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all block"
              >
                <div className="w-12 h-12 rounded-none bg-brutal-green border-2 border-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-base font-black dark:text-white uppercase">Email</h3>
                  <p className="text-gray-800 dark:text-gray-300 font-bold text-sm truncate">
                    contact@nikunjmaheshwari.xyz
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+919720324825"
                className="group flex items-center gap-4 border-3 border-black bg-white dark:bg-tars-dark p-4 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all block"
              >
                <div className="w-12 h-12 rounded-none bg-brutal-blue border-2 border-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-base font-black dark:text-white uppercase">Phone</h3>
                  <p className="text-gray-800 dark:text-gray-300 font-bold text-sm truncate">
                    +91 9720324825
                  </p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/nikunjm111/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-3 border-black bg-white dark:bg-tars-dark p-4 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all block"
              >
                <div className="w-12 h-12 rounded-none bg-brutal-pink border-2 border-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6 text-black" />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-base font-black dark:text-white uppercase">LinkedIn</h3>
                  <p className="text-gray-800 dark:text-gray-300 font-bold text-sm truncate">
                    Connect on LinkedIn
                  </p>
                </div>
              </a>

            </div>
            
            {/* RIGHT COLUMN: Bespoke Neo-Brutalist Form (7 cols) */}
            <div className="lg:col-span-7 border-4 border-black bg-white dark:bg-tars-dark p-6 sm:p-8 shadow-brutal-lg">
              
              <div className="flex flex-wrap items-center justify-between border-b-3 border-black pb-4 mb-6 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brutal-green border border-black animate-pulse" />
                  <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-tight">
                    Send a Message
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 border border-black">
                  DIRECT DISPATCH
                </span>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-brutal-green border-3 border-black shadow-brutal">
                    <CheckCircle2 size={32} className="text-black" />
                  </div>
                  <h4 className="text-2xl font-black uppercase text-black dark:text-white">
                    Ready to Send!
                  </h4>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 max-w-md mx-auto">
                    Your email client should have opened with the pre-filled message. If it didn't open automatically, you can send directly via WhatsApp:
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="brutal-btn bg-[#25D366] text-black px-5 py-2.5 text-sm font-black uppercase flex items-center gap-2"
                    >
                      Chat on WhatsApp Now
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="brutal-btn bg-white dark:bg-tars-gray text-black dark:text-white px-5 py-2.5 text-sm font-bold uppercase"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Topic Selector Pills */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase mb-2 text-gray-700 dark:text-gray-300">
                      What is this about?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTopic(t)}
                          className={`px-3 py-1 text-xs font-bold border-2 border-black transition-all ${
                            selectedTopic === t
                              ? 'bg-black text-white dark:bg-brutal-green dark:text-black shadow-brutal-sm -translate-y-0.5'
                              : 'bg-gray-100 dark:bg-tars-gray text-black dark:text-white hover:bg-gray-200'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase mb-1 text-gray-700 dark:text-gray-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Chen"
                        className="w-full p-2.5 border-3 border-black bg-gray-50 dark:bg-tars-board text-black dark:text-white font-mono text-sm shadow-brutal-sm outline-none focus:bg-white dark:focus:bg-tars-gray focus:shadow-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase mb-1 text-gray-700 dark:text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@domain.com"
                        className="w-full p-2.5 border-3 border-black bg-gray-50 dark:bg-tars-board text-black dark:text-white font-mono text-sm shadow-brutal-sm outline-none focus:bg-white dark:focus:bg-tars-gray focus:shadow-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Body */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase mb-1 text-gray-700 dark:text-gray-300">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project, idea, or questions..."
                      className="w-full p-3 border-3 border-black bg-gray-50 dark:bg-tars-board text-black dark:text-white font-mono text-sm shadow-brutal-sm outline-none focus:bg-white dark:focus:bg-tars-gray focus:shadow-none transition-all resize-y"
                    />
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="brutal-btn flex-1 bg-brutal-green text-black py-3 px-6 text-sm sm:text-base font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-black hover:text-brutal-green transition-colors"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="brutal-btn bg-[#25D366] text-black py-3 px-4 text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2"
                      title="Send directly on WhatsApp"
                    >
                      WhatsApp
                    </button>
                  </div>

                  {/* Google Forms external fallback link */}
                  <div className="pt-2 text-center">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSen_JzIlvFNykCRBjN14t2PDToH4JDolNzMu9qj8T0yc-q8XA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:underline transition-colors"
                    >
                      Prefer Google Forms? Open form in external tab <ExternalLink size={12} />
                    </a>
                  </div>

                </form>
              )}

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
