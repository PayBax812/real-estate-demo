"use client";

import { ShieldCheck, TrendingUp, Compass, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="text-accent" size={36} />,
      title: "Verified Properties",
      description: "Every listing in our portfolio undergoes strict background title-checks and is 100% RERA compliant."
    },
    {
      icon: <TrendingUp className="text-accent" size={36} />,
      title: "Market Expertise",
      description: "Over 15+ years of active Pune consulting gives us the insights to secure properties before they hit the market."
    },
    {
      icon: <Compass className="text-accent" size={36} />,
      title: "Investment Guidance",
      description: "Data-backed analysis of appreciation trends, rental yields, and infrastructure updates to guide your money."
    },
    {
      icon: <Headphones className="text-accent" size={36} />,
      title: "End-to-End Support",
      description: "From property site visits and legal documentation verification, to home loans and registration, we handle all."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section id="why-choose-us" className="section-padding bg-primary border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient spot */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-body-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3 block">
            Why Partner With Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            The Elite Experience
          </h2>
          <p className="text-body-md text-gray-400 font-light max-w-xl mx-auto">
            We operate on complete transparency, providing trusted advisory services focused purely on your long-term success.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-8 rounded-3xl glass-card border border-white/5 hover:border-accent/30 card-hover flex flex-col items-start bg-surface/25 relative group overflow-hidden"
            >
              {/* Golden glow line at bottom of hover */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon Container */}
              <div className="p-4 rounded-2xl bg-white/5 mb-8 group-hover:bg-accent/10 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-body-sm text-gray-400 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
