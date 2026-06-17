"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function useCountUp(target: number, duration: number = 2000, trigger: boolean = false, decimals: number = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = target;
    const totalMiliseconds = duration;
    const incrementTime = 30; // 33 fps
    const totalSteps = totalMiliseconds / incrementTime;
    const stepIncrement = (end - start) / totalSteps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextCount = start + stepIncrement * currentStep;

      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number(nextCount.toFixed(decimals)));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration, trigger, decimals]);

  return count;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative bg-primary py-20 border-y border-white/5 overflow-hidden"
    >
      {/* Decorative gradient light in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, idx) => {
            const currentCount = useCountUp(stat.value, 2000, isInView, stat.decimals || 0);
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center p-6 rounded-2xl glass-card border border-white/5 hover:border-accent/20 transition-all duration-500"
              >
                <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                  <span className="text-accent">{stat.prefix}</span>
                  <span className="text-white">
                    {stat.decimals ? currentCount.toFixed(stat.decimals) : currentCount}
                  </span>
                  <span className="text-accent">{stat.suffix}</span>
                </span>
                <span className="text-xs sm:text-sm tracking-widest text-muted uppercase font-semibold">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
