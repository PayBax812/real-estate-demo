"use client";

import { Check, ShieldCheck, Heart, UserCheck, Zap } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { motion } from "framer-motion";

export default function AboutSection() {
  const values = [
    {
      icon: <ShieldCheck className="text-accent" size={20} />,
      title: "RERA Compliance",
      desc: "We prioritize security. Every project we recommend is legally verified and RERA registered."
    },
    {
      icon: <UserCheck className="text-accent" size={20} />,
      title: "Client-Centricity",
      desc: "No hard selling. We understand your requirements first and show properties tailored to your needs."
    },
    {
      icon: <Heart className="text-accent" size={20} />,
      title: "Absolute Transparency",
      desc: "Complete openness on pricing, builder track records, hidden charges, and future connectivity updates."
    },
    {
      icon: <Zap className="text-accent" size={20} />,
      title: "End-to-End Service",
      desc: "From virtual property tours to paperwork verification and legal registration assistance, we are with you."
    }
  ];

  return (
    <section id="about" className="section-padding bg-primary border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient spot */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Story Copy Block (Left Side) */}
          <div className="lg:col-span-7">
            <span className="text-body-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3 block">
              Our Legacy
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Elite Properties Real Estate Consultant
            </h2>
            
            <p className="text-body-md text-gray-300 font-light leading-relaxed mb-6">
              Established in Kothrud, Pune, <strong className="text-accent font-semibold">Elite Properties</strong> has grown into the city's most trusted real estate consultancy. For over 15 years, we have served NRI investors, corporate clients, and Pune families in finding premium real estate opportunities.
            </p>

            <p className="text-body-md text-gray-400 font-light leading-relaxed mb-10">
              Unlike transactional agencies, we work as investment advisors. We filter out sub-par projects to recommend only sound properties with strong appreciation potential, high rental yields, and verified credentials.
            </p>

            {/* Mission / Vision split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl glass-card border border-white/5">
                <h3 className="font-display text-lg font-bold text-accent mb-3">Our Mission</h3>
                <p className="text-body-sm text-gray-400 font-light leading-relaxed">
                  To secure wealth and lifestyles for families by matching them with legally verified, high-quality residential and commercial properties in Pune.
                </p>
              </div>
              <div className="p-6 rounded-2xl glass-card border border-white/5">
                <h3 className="font-display text-lg font-bold text-accent mb-3">Our Vision</h3>
                <p className="text-body-sm text-gray-400 font-light leading-relaxed">
                  To be Pune's leading boutique property advisory, respected for uncompromising ethical standards, legal verification, and investor-first counsel.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <h3 className="font-display text-xl font-bold text-white mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="flex space-x-3">
                  <div className="flex-shrink-0 mt-1">{val.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold text-body-sm">{val.title}</h4>
                    <p className="text-xs text-gray-400 font-light mt-1 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Team Graphic/Stats Box (Right Side) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-surface/30">
              {/* Overlay graphic background or premium team placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-surface to-primary relative overflow-hidden flex flex-col justify-end p-8">
                {/* Decorative golden accent vector lines */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
                
                {/* Visual Image representing property architecture */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop&q=80"
                  alt="Premium Architecture"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                  loading="lazy"
                />

                <div className="relative z-20">
                  <div className="glass px-6 py-4 rounded-2xl border border-white/10 mb-6">
                    <span className="text-[10px] tracking-widest text-accent uppercase font-bold block mb-1">
                      Award-Winning Consulting
                    </span>
                    <h4 className="font-display text-xl font-bold text-white">
                      Pune's Top Boutique Real Estate Advisor
                    </h4>
                  </div>

                  {/* Bullet Achievements */}
                  <div className="space-y-4">
                    {[
                      "15+ Years market experience",
                      "Certified RERA advisors",
                      "Dedicated NRI services desk",
                      "Zero brokerage on new projects"
                    ].map((ach, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="p-1 rounded-full bg-accent/20 text-accent">
                          <Check size={12} />
                        </div>
                        <span className="text-body-sm text-gray-300 font-medium">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Shadow decoration behind card */}
            <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl z-0 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
