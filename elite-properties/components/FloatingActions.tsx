"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, Calendar, ArrowUp } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConsultClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Buttons Desktop (bottom right) */}
      <div 
        className={`fixed bottom-8 right-6 z-40 flex flex-col space-y-4 transition-all duration-500 pointer-events-none ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Click to Call */}
        <a
          href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
          className="p-4 rounded-full btn-outline bg-primary/80 backdrop-blur-md shadow-lg border border-accent/30 text-accent hover:bg-accent hover:text-primary transition-all duration-300 pointer-events-auto flex items-center justify-center relative group"
          aria-label="Call Us"
        >
          <Phone size={22} />
          {/* Tooltip */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-surface/90 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium font-sans">
            Call Consultant
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl(COMPANY.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 pointer-events-auto flex items-center justify-center relative group shadow-lg shadow-green-500/20 whatsapp-pulse"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} fill="currentColor" />
          {/* Tooltip */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-surface/90 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium font-sans">
            WhatsApp Inquiry
          </span>
        </a>
      </div>

      {/* Sticky Bottom Consultation Bar (Mobile only) */}
      <div className="fixed bottom-0 left-0 w-full z-40 lg:hidden glass shadow-2xl border-t border-white/10 p-3 grid grid-cols-3 gap-3">
        <a
          href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
          className="flex flex-col items-center justify-center py-2 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-semibold"
        >
          <Phone size={16} className="mb-1 text-accent" />
          <span>Call Us</span>
        </a>
        <a
          href={getWhatsAppUrl(COMPANY.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 rounded-xl border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold"
        >
          <MessageCircle size={16} className="mb-1 text-green-400" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#contact"
          onClick={handleConsultClick}
          className="flex flex-col items-center justify-center py-2 rounded-xl btn-gold text-xs font-semibold"
        >
          <Calendar size={16} className="mb-1" />
          <span>Consult</span>
        </a>
      </div>
    </>
  );
}
