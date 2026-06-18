"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-primary border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-body-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3 block">
            Direct Line
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-body-md text-gray-400 font-light max-w-xl mx-auto">
            Have questions about a property or need investment advice? Speak directly with our Kothrud office support team.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Contact Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Address */}
            <div className="p-6 rounded-2xl glass-card border border-white/5 bg-surface/20 flex space-x-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent h-fit">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Our Office</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{COMPANY.address}</p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="p-6 rounded-2xl glass-card border border-white/5 bg-surface/20 flex space-x-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent h-fit">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Phone & Email</h4>
                <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="text-xs text-gray-400 hover:text-accent block mb-1">
                  {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="text-xs text-gray-400 hover:text-accent block">
                  {COMPANY.email}
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-2xl glass-card border border-white/5 bg-surface/20 flex space-x-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent h-fit">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Business Hours</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{COMPANY.hours}</p>
              </div>
            </div>

            {/* Direct WhatsApp Quick Connect */}
            <a
              href={getWhatsAppUrl(COMPANY.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 flex items-center justify-between group transition-colors duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-green-500/20 text-green-400">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Direct WhatsApp</h4>
                  <p className="text-[10px] text-green-400 font-semibold tracking-wider uppercase">Connect in 10s</p>
                </div>
              </div>
              <ArrowRight className="text-gray-500 group-hover:text-green-400 transition-colors transform group-hover:translate-x-1 duration-300" size={18} />
            </a>

          </div>

          {/* Column 2: Contact Form (4 cols) */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl glass border border-white/10 bg-surface/30 h-full flex flex-col justify-between">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-6">Send Message</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full bg-primary/50 text-white rounded-xl py-3 px-4 border border-white/10 text-body-sm focus:border-accent"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your Email"
                          className="w-full bg-primary/50 text-white rounded-xl py-3 px-4 border border-white/10 text-body-sm focus:border-accent"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Your Phone Number"
                          className="w-full bg-primary/50 text-white rounded-xl py-3 px-4 border border-white/10 text-body-sm focus:border-accent"
                        />
                      </div>
                      <div>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="How can we help you?"
                          className="w-full bg-primary/50 text-white rounded-xl py-3 px-4 border border-white/10 text-body-sm focus:border-accent resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl btn-gold text-body-sm font-semibold flex items-center justify-center space-x-2 mt-6 disabled:opacity-50 hover:cursor-pointer"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && <ArrowRight size={16} />}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <Clock size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Message Sent</h3>
                  <p className="text-xs text-gray-300 max-w-xs mb-6 leading-relaxed">
                    Thank you. We have received your query and will reply via email or phone within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 rounded-full border border-white/20 text-white text-xs hover:border-accent transition-colors"
                  >
                    Send another query
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* Column 3: Maps Embed (4 cols) */}
          <div className="lg:col-span-4 min-h-[300px] lg:min-h-full">
            <div className="rounded-3xl overflow-hidden border border-white/10 h-full relative shadow-lg bg-surface/20">
              <iframe
                title="Elite Properties Pune Office Map"
                src={COMPANY.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px", height: "100%" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-75 grayscale invert hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-700"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
