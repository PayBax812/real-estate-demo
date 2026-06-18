"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, CheckCircle } from "lucide-react";
import { TOTAL_FRAMES } from "@/lib/constants";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFrame, setActiveFrame] = useState(1);
  const currentFrameRef = useRef(1);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    // Load first frame immediately for instant visual feedback
    const firstImg = new Image();
    firstImg.src = `/frames/00001.png`;
    firstImg.onload = () => {
      loadedCount++;
      loadedImages[0] = firstImg;
    };

    // Load the rest of the frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(5, "0");
      img.src = `/frames/${paddedIndex}.png`;
      
      img.onload = () => {
        loadedCount++;
        loadedImages[i - 1] = img;
        const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
        setLoadingProgress(progress);

        if (loadedCount >= TOTAL_FRAMES) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        loadedCount++; // increment anyway to not block
      };
    }
  }, []);

  // Handle canvas rendering and scroll logic
  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderFrame = (frameIndex: number) => {
      const imgIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex - 1));
      const img = images[imgIndex];
      if (!img || !img.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Cover scaling (object-fit: cover equivalent)
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Set canvas dimensions to match viewport size
    let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;

    const resizeCanvas = () => {
      const isMobile = window.innerWidth < 768;
      const widthChanged = window.innerWidth !== lastWidth;
      const heightChangedSignificantly = Math.abs(window.innerHeight - lastHeight) > 100;

      // On mobile, avoid resizing when address bar hides/shows to prevent lag
      if (!isMobile || widthChanged || heightChangedSignificantly || !canvas.width) {
        // Cap DPR to 2 for better mobile performance
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        
        lastWidth = window.innerWidth;
        lastHeight = window.innerHeight;

        // Initial render on resize
        renderFrame(currentFrameRef.current);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Set initial size

    // Scroll listener
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }

          const rect = containerRef.current.getBoundingClientRect();
          const totalHeight = rect.height - window.innerHeight;
          const scrolled = -rect.top;
          
          if (totalHeight > 0) {
            const scrollPercent = Math.max(0, Math.min(1, scrolled / totalHeight));
            const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.ceil(scrollPercent * TOTAL_FRAMES)));
            
            if (currentFrameRef.current !== frameIndex) {
              currentFrameRef.current = frameIndex;
              setActiveFrame(frameIndex);
              renderFrame(frameIndex);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial draw
    handleScroll();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoaded, images]);

  // Calculate opacity/transform for text layers based on active frame (out of 144)
  const getLayerOpacity = (start: number, end: number) => {
    if (activeFrame < start) return 0;
    if (activeFrame > end) return 0;
    
    // Fade in over 10 frames, fade out over 10 frames
    const fadeInProgress = Math.min(1, (activeFrame - start) / 10);
    const fadeOutProgress = Math.min(1, (end - activeFrame) / 10);
    return Math.min(fadeInProgress, fadeOutProgress);
  };

  const getLayerTransform = (start: number, end: number) => {
    if (activeFrame < start || activeFrame > end) return "translateY(20px)";
    const progress = getLayerOpacity(start, end);
    const yVal = 20 - progress * 20;
    return `translateY(${yVal}px)`;
  };

  const handleExploreClick = () => {
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConsultClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" ref={containerRef} className="relative w-full bg-primary h-[350vh]">
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col justify-center items-center">
          <div className="text-center max-w-sm px-6">
            <h1 className="font-display text-3xl font-bold tracking-wide text-white mb-6">
              <span className="text-gold-gradient">Elite</span> Properties
            </h1>
            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4 relative">
              <div 
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-body-sm text-muted uppercase tracking-widest font-semibold">
              Loading Luxury Experiences {loadingProgress}%
            </p>
          </div>
        </div>
      )}

      {/* Pinned Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden z-10">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

        {/* Global Dark Gradient Overlay to guarantee text readability */}
        <div className="absolute inset-0 bg-hero-overlay" />

        {/* Text Layer 1: Frame 1 to 45 */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 transition-all duration-300 pointer-events-none"
          style={{
            opacity: getLayerOpacity(1, 45),
            transform: getLayerTransform(1, 45),
            pointerEvents: activeFrame >= 1 && activeFrame <= 45 ? "auto" : "none",
          }}
        >
          <div className="max-w-4xl">
            <span className="text-body-sm font-semibold tracking-[0.3em] text-accent uppercase mb-4 block">
              ESTATE CONSULTANCY • PUNE
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Find Your Dream Property In Pune
            </h1>
            <p className="text-body-md sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Helping Families, Investors and NRI Buyers Discover Premium Real Estate Opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                onClick={handleExploreClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-gold shadow-lg shadow-accent/20 cursor-pointer"
              >
                Explore Properties
              </button>
              <button 
                onClick={handleConsultClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Text Layer 2: Frame 50 to 95 */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 transition-all duration-300 pointer-events-none"
          style={{
            opacity: getLayerOpacity(50, 95),
            transform: getLayerTransform(50, 95),
            pointerEvents: activeFrame >= 50 && activeFrame <= 95 ? "auto" : "none",
          }}
        >
          <div className="max-w-4xl">
            <span className="text-body-sm font-semibold tracking-[0.3em] text-accent uppercase mb-4 block">
              TRUSTED & EXPERIENCED
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Curated Luxury, Redefined Living
            </h2>
            <p className="text-body-md sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              From premium villas in Kothrud to high-end commercial spaces in Hinjewadi, we advise on the best developments in town.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-6">
              {[
                "100% Verified properties",
                "Legal & RERA compliance",
                "NRI special desk",
                "Hassle-free registration"
              ].map((item, idx) => (
                <div key={idx} className="glass rounded-xl p-3 flex flex-col items-center justify-center text-center">
                  <CheckCircle className="text-accent mb-2" size={20} />
                  <span className="text-xs font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Layer 3: Frame 100 to 144 */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 transition-all duration-300 pointer-events-none"
          style={{
            opacity: getLayerOpacity(100, 144),
            transform: getLayerTransform(100, 144),
            pointerEvents: activeFrame >= 100 && activeFrame <= 144 ? "auto" : "none",
          }}
        >
          <div className="max-w-3xl">
            <span className="text-body-sm font-semibold tracking-[0.3em] text-accent uppercase mb-4 block">
              YOUR PREMIER PARTNER
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Discover Your Next Address?
            </h2>
            <p className="text-body-md sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Start your journey with Pune's top-rated consultancy today. Get a tailored portfolio built for your needs.
            </p>
            <button 
              onClick={handleConsultClick}
              className="px-10 py-4 rounded-full btn-gold text-lg shadow-xl shadow-accent/20 cursor-pointer"
            >
              Get Free Portfolio Advice
            </button>
          </div>
        </div>

        {/* Animated Scroll Indicator at bottom */}
        {activeFrame < 130 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none animate-bounce-slow">
            <span className="text-[10px] tracking-[0.3em] text-accent uppercase font-bold mb-2">
              Scroll to Explore
            </span>
            <ArrowDown className="text-white" size={20} />
          </div>
        )}
      </div>
    </div>
  );
}
