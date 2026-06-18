"use client";

import { MapPin, ArrowRight } from "lucide-react";
import { AREAS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function AreasSection() {
  const handleAreaClick = (areaName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const locationSelect = document.getElementById("contact-location") as HTMLSelectElement;
      if (locationSelect) {
        locationSelect.value = areaName;
      }
      const messageElem = document.getElementById("contact-message") as HTMLTextAreaElement;
      if (messageElem) {
        messageElem.value = `I am looking to buy or invest in property in: ${areaName}. Please contact me.`;
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section id="areas" className="section-padding bg-primary border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-body-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3 block">
            Prime Pune Neighborhoods
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Areas We Serve
          </h2>
          <p className="text-body-md text-gray-400 font-light max-w-xl mx-auto">
            Explore premium micro-markets in Pune where we offer direct-from-builder options, resale inventory, and commercial opportunities.
          </p>
        </div>

        {/* Areas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {AREAS.map((area, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onClick={() => handleAreaClick(area.name)}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-lg shadow-black/45 bg-surface/20"
            >
              {/* Image background */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={area.image}
                alt={area.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Dark to transparent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Content overlays */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                <div className="flex items-center space-x-1.5 text-accent mb-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <MapPin size={14} />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Pune City</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  {area.name}
                </h3>

                <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                  {area.properties} Premium properties available
                </p>

                {/* Explore link */}
                <span className="text-xs font-semibold text-accent flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300">
                  <span>Explore Properties</span>
                  <ArrowRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
