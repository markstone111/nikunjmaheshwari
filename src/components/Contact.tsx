import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-20 bg-brutal-bg dark:bg-tars-board font-sans border-t-4 border-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-black dark:text-white uppercase tracking-tighter drop-shadow-[2px_2px_0_rgba(74,222,128,1)]">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-2 border-black bg-white dark:bg-tars-dark p-4 shadow-brutal hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-none bg-brutal-green border-2 border-black flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold dark:text-white">Email</h3>
                  <a href="mailto:contact@nikunjmaheshwari.xyz" className="text-gray-800 dark:text-gray-300 font-semibold hover:text-brutal-green">
                    contact@nikunjmaheshwari.xyz
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 border-2 border-black bg-white dark:bg-tars-dark p-4 shadow-brutal hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-none bg-brutal-blue border-2 border-black flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold dark:text-white">Phone</h3>
                  <a href="tel:+919720324825" className="text-gray-800 dark:text-gray-300 font-semibold hover:text-brutal-green">
                    +91 9720324825
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 border-2 border-black bg-white dark:bg-tars-dark p-4 shadow-brutal hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-none bg-brutal-pink border-2 border-black flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold dark:text-white">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/nikunjm111/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-300 font-semibold hover:text-brutal-green"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-4 border-black bg-brutal-yellow dark:bg-tars-gray rounded-none shadow-brutal-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-6 h-6 text-black dark:text-brutal-green" />
                <h3 className="text-xl font-black text-black dark:text-white uppercase uppercase">Send a Message</h3>
              </div>
              <div className="border-2 border-black bg-white">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSen_JzIlvFNykCRBjN14t2PDToH4JDolNzMu9qj8T0yc-q8XA/viewform?embedded=true"
                  className="w-full h-[400px] border-0"
                  title="Contact Form"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}