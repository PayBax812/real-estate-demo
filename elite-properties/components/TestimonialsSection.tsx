"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const itemsPerPage = 3;
  const maxPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  const startAutoPlay = () => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isPaused, index]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  // Get active 3 cards based on current index (circular list)
  const getVisibleTestimonials = () => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      const idx = (index + i) % TESTIMONIALS.length;
      list.push(TESTIMONIALS[idx]);
    }
    return list;
  };

  return (
    <section id="testimonials" className="section-padding bg-primary border-t border-white/5 relative">
      <div className="absolute top-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-body-sm font-semibold tracking-[0.3em] text-accent uppercase mb-3 block">
              Client Stories
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-body-md text-gray-400 font-light">
              We take pride in guiding families and investors. Our 4.9★ Google Rating reflects our commitment to transparent dealing.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3">
            {/* Google Rating Badge */}
            <div className="glass px-4 py-2 rounded-2xl flex items-center space-x-2 mr-2">
              <span className="text-white font-bold text-sm">4.9</span>
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#D4AF37" className="star-filled" />
                ))}
              </div>
              <span className="text-xs text-muted">287+ reviews</span>
            </div>

            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/10 text-white hover:border-accent hover:text-accent transition-colors bg-white/5"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/10 text-white hover:border-accent hover:text-accent transition-colors bg-white/5"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {getVisibleTestimonials().map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${idx}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-8 rounded-3xl glass border border-white/5 hover:border-accent/20 flex flex-col justify-between h-full bg-surface/20 relative"
              >
                {/* Quote Icon Overlay background */}
                <MessageSquare className="absolute top-6 right-8 text-white/[0.02] pointer-events-none" size={100} />

                <div>
                  {/* Google stars row */}
                  <div className="flex text-accent mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonial.rating ? "#D4AF37" : "none"}
                        className={i < testimonial.rating ? "star-filled" : "text-white/20"}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-body-md text-gray-300 font-light italic leading-relaxed mb-8 relative z-10">
                    "{testimonial.review}"
                  </p>
                </div>

                {/* Client Profile details */}
                <div className="flex items-center space-x-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-white font-bold text-body-sm font-sans">{testimonial.name}</h4>
                    <p className="text-xs text-muted">{testimonial.designation}</p>
                  </div>
                  {/* Small Google icon indicator */}
                  <span className="ml-auto font-sans font-black text-white/20 text-xl">G</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel indicators dots */}
        <div className="flex justify-center space-x-2 mt-12">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === idx ? "w-8 bg-accent" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to testimonial page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
