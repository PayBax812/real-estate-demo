"use client";

import { Download, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function NewLaunchProjects() {
  const handleBrochureDownload = (projectName: string) => {
    // Show download alert or modal
    alert(`Thank you for your interest. The brochure for ${projectName} is being generated and will be sent to your WhatsApp shortly.`);
    // Scroll to contact form to capture info
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const messageElem = document.getElementById("contact-message") as HTMLTextAreaElement;
      if (messageElem) {
        messageElem.value = `I would like to download the brochure and request details for: ${projectName}.`;
      }
    }
  };

  const handleVisitSchedule = (projectName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const messageElem = document.getElementById("contact-message") as HTMLTextAreaElement;
      if (messageElem) {
        messageElem.value = `I want to schedule a site visit for: ${projectName}.`;
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } }
  };

  return (
    <section id="projects" className="section-padding bg-primary border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-body-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3 block">
            Exclusive Opportunities
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            New Launch Projects
          </h2>
          <p className="text-body-md text-gray-400 font-light max-w-xl mx-auto">
            Get first-mover advantage with exclusive pre-launch pricing, luxury inventories, and high appreciation developments.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group rounded-3xl overflow-hidden glass border border-white/5 hover:border-accent/30 card-hover flex flex-col justify-between h-full bg-surface/30"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[3/2] overflow-hidden rounded-t-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Builder Overlay badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider btn-gold shadow-md">
                  Exclusive Launch
                </span>

                {/* Gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
                
                {/* Builder Logo Name */}
                <div className="absolute bottom-4 left-6 text-xs font-semibold tracking-widest text-accent uppercase bg-black/60 px-3 py-1.5 rounded-lg border border-white/5">
                  {project.builder}
                </div>
              </div>

              {/* Info Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3 flex items-center justify-between">
                    <span>{project.name}</span>
                    <ArrowUpRight className="text-gray-500 group-hover:text-accent transition-colors duration-300" size={20} />
                  </h3>
                  
                  {/* Location & Possession */}
                  <div className="flex flex-col gap-2 text-body-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <MapPin size={16} className="text-accent mr-2 flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="text-accent mr-2 flex-shrink-0" />
                      <span>Possession: {project.possession}</span>
                    </div>
                  </div>

                  {/* Config & Price */}
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl mb-8 border border-white/5">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted font-bold block mb-1">
                        Configuration
                      </span>
                      <span className="text-white text-body-sm font-semibold">{project.config}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-wider text-muted font-bold block mb-1">
                        Starting Price
                      </span>
                      <span className="text-accent text-lg font-bold">{project.startingPrice}</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleBrochureDownload(project.name)}
                    className="py-3 rounded-xl btn-gold text-body-sm flex items-center justify-center gap-2"
                  >
                    <Download size={16} />
                    <span>Brochure</span>
                  </button>
                  <button
                    onClick={() => handleVisitSchedule(project.name)}
                    className="py-3 rounded-xl border border-white/10 text-white font-medium hover:border-accent hover:text-accent transition-colors duration-300 text-body-sm"
                  >
                    <span>Schedule Visit</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
