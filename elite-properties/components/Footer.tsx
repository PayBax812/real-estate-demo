"use client";

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { COMPANY, SERVICES, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      
      {/* Scroll Top Button */}
      <div className="absolute top-0 right-10 -translate-y-1/2 z-20">
        <button
          onClick={handleScrollTop}
          className="p-3.5 rounded-full btn-gold shadow-lg shadow-accent/25 hover:cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex flex-col h-fit w-fit">
              <span className="font-display text-2xl font-bold tracking-wide text-white">
                <span className="text-gold-gradient">Elite</span> Properties
              </span>
              <span className="text-[10px] tracking-[0.25em] text-accent uppercase font-semibold -mt-1">
                Real Estate Consultant
              </span>
            </a>
            
            <p className="text-body-sm text-gray-400 font-light leading-relaxed max-w-xs">
              Luxury boutique real estate advisory based in Kothrud, Pune. Serving families, corporate firms, and NRI buyers with verified inventories.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 text-gray-400 hover:text-accent hover:border-accent/30 transition-all"
                aria-label="Instagram Profile"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 text-gray-400 hover:text-accent hover:border-accent/30 transition-all"
                aria-label="Facebook Page"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 text-gray-400 hover:text-accent hover:border-accent/30 transition-all"
                aria-label="LinkedIn Page"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href={COMPANY.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 text-gray-400 hover:text-accent hover:border-accent/30 transition-all"
                aria-label="YouTube Channel"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a
                href={COMPANY.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 text-gray-400 hover:text-accent hover:border-accent/30 transition-all"
                aria-label="Twitter Feed"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-body-sm text-gray-400 hover:text-accent transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((srv, idx) => (
                <li key={idx}>
                  <a
                    href="#consultation"
                    className="text-body-sm text-gray-400 hover:text-accent transition-colors duration-200 block py-1"
                  >
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-6">
            <h4 className="font-display text-lg font-bold text-white mb-6">Contact Us</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-body-sm text-gray-400">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <span>{COMPANY.address}</span>
              </div>
              
              <div className="flex items-center space-x-3 text-body-sm text-gray-400">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="hover:text-accent transition-colors">
                  {COMPANY.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3 text-body-sm text-gray-400">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-accent transition-colors">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Gold Divider */}
        <div className="gold-divider mb-8" />

        {/* Bottom Bar info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <div>
            © {new Date().getFullYear()} Elite Properties. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
