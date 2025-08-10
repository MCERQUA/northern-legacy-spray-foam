import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Contact Modal */}
      <div className={`
        fixed inset-0 z-40 flex items-center justify-center p-4
        transition-all duration-300
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-midnight/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Modal Content */}
        <div className={`
          relative z-50 w-full max-w-md
          transform transition-all duration-300
          ${isOpen ? 'scale-100' : 'scale-95'}
        `}>
          <div className="bg-arctic-white rounded-3xl p-8 shadow-northern border border-ice-blue/30">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-legacy-green/10 transition-colors"
            >
              <X className="w-5 h-5 text-charcoal" />
            </button>
            
            <h3 className="text-2xl font-bold text-charcoal mb-6">Contact Northern Legacy</h3>
            
            {/* Contact Form */}
            <form className="space-y-4 mb-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-ice-blue/50 focus:border-forest-green/50 focus:outline-none focus:ring-2 focus:ring-forest-green/20 transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-ice-blue/50 focus:border-forest-green/50 focus:outline-none focus:ring-2 focus:ring-forest-green/20 transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-ice-blue/50 focus:border-forest-green/50 focus:outline-none focus:ring-2 focus:ring-forest-green/20 transition-all"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-xl border border-ice-blue/50 focus:border-forest-green/50 focus:outline-none focus:ring-2 focus:ring-forest-green/20 transition-all">
                  <option value="">Select Service</option>
                  <option value="attic-insulation">Attic Insulation</option>
                  <option value="wall-insulation">Wall Insulation</option>
                  <option value="basement-insulation">Basement Insulation</option>
                  <option value="commercial-insulation">Commercial Insulation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Project Details (optional)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-ice-blue/50 focus:border-forest-green/50 focus:outline-none focus:ring-2 focus:ring-forest-green/20 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-forest-green hover:bg-forest-green/90 text-white font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
            
            <div className="space-y-4">
              <a
                href="tel:3207602543"
                className="flex items-center gap-4 p-4 rounded-2xl bg-ice-blue hover:bg-legacy-green/10 transition-colors group"
              >
                <div className="p-3 rounded-full bg-forest-green/15 group-hover:bg-forest-green/25 transition-colors">
                  <Phone className="w-6 h-6 text-forest-green" />
                </div>
                <div>
                  <p className="font-bold text-charcoal">Call Us Now</p>
                  <p className="text-sm text-cool-gray">(320) 760-2543</p>
                </div>
              </a>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  // Scroll to contact form
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full p-4 rounded-2xl bg-legacy-green hover:bg-legacy-green/90 text-arctic-white font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-legacy hover:shadow-northern"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button with Metal Glass Effect and better contrast */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-30 group"
        aria-label="Contact Northern Legacy Spray Foam"
      >
        <div className="relative">
          {/* Subtle glow effect with white/blue glow */}
          <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
          
          {/* Button with metal glass effect matching MetalMenuBar */}
          <div className="
            relative w-14 h-14 sm:w-16 sm:h-16 rounded-full
            bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90
            backdrop-blur-xl border border-slate-700/50
            shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.2)]
            transform transition-all duration-300
            group-hover:scale-110
            flex items-center justify-center
            overflow-hidden
          "
          style={{
            background: `linear-gradient(135deg, 
              rgba(71, 85, 105, 0.15) 0%, 
              rgba(51, 65, 85, 0.25) 25%, 
              rgba(30, 41, 59, 0.35) 50%, 
              rgba(51, 65, 85, 0.25) 75%, 
              rgba(71, 85, 105, 0.15) 100%)`,
          }}>
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Inner glow */}
            <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-slate-700/20 to-transparent pointer-events-none" />
            
            {/* White phone icon for better contrast */}
            <Phone className="w-5 h-5 text-white relative z-10 drop-shadow-sm" />
            
            {/* Active-style highlight effect with white/blue theme */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  rgba(59, 130, 246, 0.05) 50%, 
                  rgba(255, 255, 255, 0.1) 100%)`,
                boxShadow: `
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                  0 0 20px rgba(255, 255, 255, 0.1)
                `
              }}
            />
          </div>
          
          {/* Pulse animation with green color */}
          <div className="absolute inset-0 rounded-full border-2 border-forest-green/30 animate-ping" />
        </div>
      </button>
    </>
  );
};

export default FloatingContactButton;