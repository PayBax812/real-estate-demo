"use client";

import { useState } from "react";
import { MapPin, Maximize2, Bed, ArrowRight } from "lucide-react";
import { PROPERTIES, Property } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertiesSection() {
  const [activeTab, setActiveTab] = useState<"All" | "Residential" | "Commercial" | "Buy" | "Rent">("All");

  const filterTabs = [
    { label: "All Properties", value: "All" },
    { label: "Residential", value: "Residential" },
    { label: "Commercial", value: "Commercial" },
    { label: "For Sale", value: "Buy" },
    { label: "For Rent", value: "Rent" }
  ] as const;

  const filteredProperties = PROPERTIES.filter((property) => {
    if (activeTab === "All") return true;
    if (activeTab === "Residential" || activeTab === "Commercial") {
      return property.type === activeTab;
    }
    return property.mode === activeTab;
  });

  const handleInquiry = (propertyName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // Pre-fill message box if textarea is present
      const messageElem = document.getElementById("contact-message") as HTMLTextAreaElement;
      if (messageElem) {
        messageElem.value = `Hi, I am interested in ${propertyName}. Please provide more information.`;
      }
    }
  };

  return (
    <section id="properties" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative gradient spot */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-body-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3 block">
            Featured Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Handpicked Properties in Pune
          </h2>
          <p className="text-body-md text-gray-400 font-light max-w-xl mx-auto">
            Discover our exclusive list of premium residential and commercial spaces situated in Pune's finest neighborhoods.
          </p>
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2.5 rounded-full text-body-sm font-medium transition-all duration-300 border ${
                activeTab === tab.value
                  ? "btn-gold border-transparent shadow-lg shadow-accent/15"
                  : "border-white/10 text-gray-400 hover:text-white hover:border-white/30 bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={property.id}
                className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-accent/30 card-hover flex flex-col h-full bg-surface/30"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[3/2] overflow-hidden rounded-t-3xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Badge */}
                  {property.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider btn-gold shadow-md">
                      {property.badge}
                    </span>
                  )}
                  {/* Property Mode Tag */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-black/70 border border-white/10 text-white shadow-md">
                    For {property.mode === "Buy" ? "Sale" : "Rent"}
                  </span>
                  
                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
                  
                  {/* Price */}
                  <div className="absolute bottom-4 right-6 font-display text-2xl font-bold text-accent">
                    {property.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-accent uppercase block mb-1">
                      {property.type}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {property.name}
                    </h3>
                    
                    {/* Location */}
                    <div className="flex items-center text-body-sm text-gray-400 mb-6">
                      <MapPin size={16} className="text-accent mr-1.5 flex-shrink-0" />
                      <span>{property.location}</span>
                    </div>
                  </div>

                  <div>
                    {/* Specs Divider Line */}
                    <div className="w-full h-[1px] bg-white/5 mb-5" />

                    {/* Features details row */}
                    <div className="flex items-center justify-between text-body-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <Maximize2 size={16} className="text-accent/70" />
                        <span>{property.area}</span>
                      </div>
                      
                      {property.bedrooms > 0 && (
                        <div className="flex items-center space-x-2">
                          <Bed size={16} className="text-accent/70" />
                          <span>{property.bedrooms} BHK</span>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleInquiry(property.name)}
                      className="w-full py-3 rounded-xl border border-accent/30 text-accent font-semibold text-body-sm flex items-center justify-center space-x-2 hover:bg-accent hover:text-primary transition-all duration-300 group-hover:border-accent"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
