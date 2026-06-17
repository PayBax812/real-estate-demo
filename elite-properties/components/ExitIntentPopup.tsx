"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight, Clock, ShieldAlert } from "lucide-react";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Exit intent check (detect mouse leaving top of page)
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if it already showed this session
      const hasShown = sessionStorage.getItem("exit_popup_shown");
      if (hasShown) return;

      if (e.clientY < 50) {
        setIsOpen(true);
        sessionStorage.setItem("exit_popup_shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in all fields.");
      return;
    }
    
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-sm">
      {/* Modal Card container */}
      <div className="relative w-full max-w-md rounded-3xl glass border border-white/10 overflow-hidden shadow-2xl bg-surface/90 flex flex-col p-8">
        
        {/* Top Gold line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-gradient" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-1 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-colors bg-white/5 text-gray-400"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[10px] tracking-widest text-accent uppercase font-bold block mb-2">
                Exclusive Invitation
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Wait! Speak to our Pune Expert First
              </h3>
              <p className="text-body-sm text-gray-400 font-light leading-relaxed">
                Before you leave, request a customized premium property recommendations catalog based on your preferred location & budget.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-primary/80 text-white rounded-xl py-3 px-4 border border-white/10 text-body-sm focus:border-accent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="WhatsApp Mobile Number"
                  className="w-full bg-primary/80 text-white rounded-xl py-3 px-4 border border-white/10 text-body-sm focus:border-accent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl btn-gold text-body-sm font-semibold flex items-center justify-center space-x-2 mt-4 hover:cursor-pointer"
            >
              <span>Get Recommendations Now</span>
              <ArrowRight size={16} />
            </button>

            {/* Trust footer indicators */}
            <div className="flex items-center space-x-4 justify-center text-[10px] text-gray-500 pt-2 border-t border-white/5">
              <div className="flex items-center space-x-1">
                <Clock size={12} className="text-accent" />
                <span>Call in 5 mins</span>
              </div>
              <div className="flex items-center space-x-1">
                <ShieldAlert size={12} className="text-accent" />
                <span>Zero Brokerage</span>
              </div>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <Clock size={24} className="text-accent animate-spin" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Advisor Dispatched!
            </h3>
            <p className="text-xs text-gray-300 max-w-xs leading-relaxed">
              We are preparing your custom catalog. A senior real estate consultant will reach out on WhatsApp shortly.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
