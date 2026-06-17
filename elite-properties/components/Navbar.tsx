"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, PhoneCall } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex flex-col group">
            <span className="font-display text-2xl font-bold tracking-wide text-white">
              <span className="text-gold-gradient">Elite</span> Properties
            </span>
            <span className="text-[10px] tracking-[0.25em] text-accent uppercase font-semibold -mt-1 transition-colors group-hover:text-white">
              Real Estate Consultant
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-body-sm font-medium text-gray-300 hover:text-accent transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={getWhatsAppUrl(COMPANY.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-primary transition-all duration-300"
              aria-label="WhatsApp Us"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "#contact")}
              className="px-6 py-2.5 rounded-full btn-gold text-body-sm"
            >
              Schedule Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-accent p-1 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6 text-center max-w-xs w-full px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="font-display text-2xl font-semibold text-white hover:text-accent transition-colors py-2"
            >
              {link.label}
            </a>
          ))}

          <div className="w-full h-[1px] bg-white/10 my-4" />

          <a
            href={getWhatsAppUrl(COMPANY.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 w-full py-3 rounded-full border border-green-500/50 bg-green-500/10 text-green-400 font-semibold"
          >
            <MessageCircle size={20} />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, "#contact")}
            className="w-full py-3 rounded-full btn-gold text-center block"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </>
  );
}
