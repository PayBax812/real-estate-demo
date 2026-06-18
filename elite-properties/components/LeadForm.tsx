"use client";

import { useState } from "react";
import { User, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BUDGET_OPTIONS, PROPERTY_TYPES, LOCATIONS, COMPANY } from "@/lib/constants";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    type: "",
    location: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill out all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Clean form
      setFormData({
        name: "",
        phone: "",
        email: "",
        budget: "",
        type: "",
        location: ""
      });
    }, 1200);
  };

  return (
    <section id="consultation" className="section-padding bg-primary border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text/Copy Info Side */}
          <div className="lg:col-span-5">
            <span className="text-body-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3 block">
              Direct Advisory
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Get Expert Property Advice
            </h2>
            <p className="text-body-md text-gray-300 font-light leading-relaxed mb-8">
              Schedule a free 1-on-1 consultation session with our head property analyst. No pressure, no obligations. Just honest market guidance.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "100% Free portfolio review",
                "Appreciation & yield analysis data",
                "Legality checks & checklist guidelines",
                "Curated premium recommendations list"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-body-sm text-gray-300">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Privacy note */}
            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white/5 border border-white/5 max-w-sm">
              <ShieldCheck size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 leading-normal">
                <strong>Privacy Promise:</strong> Your contact details are secure. We never sell data and only call at your preferred times.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl glass border border-white/10 shadow-2xl bg-surface/30 relative">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-display text-2xl font-bold text-white mb-6">
                      Schedule Free Consultation
                    </h3>

                    {/* Inputs Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="text-xs text-gray-400 font-semibold mb-2 block">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <div className="relative">
                          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                            className="w-full bg-primary/50 text-white rounded-xl py-3 pl-12 pr-4 border border-white/10 text-body-sm focus:border-accent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-gray-400 font-semibold mb-2 block">
                          Mobile Number <span className="text-accent">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter mobile number"
                            className="w-full bg-primary/50 text-white rounded-xl py-3 pl-12 pr-4 border border-white/10 text-body-sm focus:border-accent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Input Row 2: Email */}
                    <div>
                      <label className="text-xs text-gray-400 font-semibold mb-2 block">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter email address"
                          className="w-full bg-primary/50 text-white rounded-xl py-3 pl-12 pr-4 border border-white/10 text-body-sm focus:border-accent"
                        />
                      </div>
                    </div>

                    {/* Dropdowns Row 3: Budget, Type, Location */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="text-xs text-gray-400 font-semibold mb-2 block">
                          Budget Range
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-primary/50 text-white rounded-xl py-3 px-4 border border-white/10 text-body-sm focus:border-accent appearance-none cursor-pointer"
                        >
                          <option value="">Select Budget</option>
                          {BUDGET_OPTIONS.map((opt, idx) => (
                            <option key={idx} value={opt} className="bg-primary">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-xs text-gray-400 font-semibold mb-2 block">
                          Property Type
                        </label>
                        <select
                          id="contact-type"
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          className="w-full bg-primary/50 text-white rounded-xl py-3 px-4 border border-white/10 text-body-sm focus:border-accent appearance-none cursor-pointer"
                        >
                          <option value="">Select Type</option>
                          {PROPERTY_TYPES.map((opt, idx) => (
                            <option key={idx} value={opt} className="bg-primary">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-xs text-gray-400 font-semibold mb-2 block">
                          Preferred Location
                        </label>
                        <select
                          id="contact-location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full bg-primary/50 text-white rounded-xl py-3 px-4 border border-white/10 text-body-sm focus:border-accent appearance-none cursor-pointer"
                        >
                          <option value="">Select Location</option>
                          {LOCATIONS.map((opt, idx) => (
                            <option key={idx} value={opt} className="bg-primary">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl btn-gold text-body-sm font-semibold flex items-center justify-center space-x-2 mt-4 hover:cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Booking...</span>
                      ) : (
                        <>
                          <span>Book Free Consultation</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-gray-500">
                      By clicking you agree to receive property updates on WhatsApp. You can opt-out anytime.
                    </p>
                  </form>
                ) : (
                  <div className="py-12 text-center flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                      <CheckCircle2 size={36} className="text-accent" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      Booking Confirmed!
                    </h3>
                    <p className="text-body-sm text-gray-300 max-w-sm mb-8 leading-relaxed">
                      Thank you. Our senior real estate advisor will call you within the next 2 hours to schedule your free consultation session.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-white/20 text-white text-xs hover:border-accent transition-colors"
                    >
                      Fill another request
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Simple export polyfill for AnimatePresence from framer-motion in case of missing types
const AnimatePresence = ({ children, mode }: { children: React.ReactNode, mode?: string }) => {
  return <>{children}</>;
};
