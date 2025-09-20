"use client";

import { useEffect, useRef, useState } from "react";
import { HeroSection } from "../components/sections/hero-section";
import { P2PLendingSection } from "../components/sections/p2p-lending-section";
import { BullaSection } from "../components/sections/bulla-section";
import { WystSection } from "../components/sections/wyst-section";
import { Footer } from "../components/sections/footer";

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sectionNames = ["Fundora", "P2P Lending", "Bulla", "WYST", "Beta"];
  const totalSections = sectionNames.length;

  const goToSection = (sectionIndex: number) => {
    if (!containerRef.current || isTransitioning) return;

    const targetIndex = Math.max(0, Math.min(totalSections - 1, sectionIndex));
    if (targetIndex === activeSection) return;

    setIsTransitioning(true);
    setActiveSection(targetIndex);

    containerRef.current.style.transform = `translateX(-${targetIndex * 100}vw)`;

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  useEffect(() => {
    let scrollBuffer = 0;
    let scrollTimer: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isTransitioning) return;

      scrollBuffer += e.deltaY;

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        scrollBuffer = 0;
      }, 100);

      // Require more scroll to change sections (makes it less sensitive)
      if (Math.abs(scrollBuffer) > 150) {
        if (scrollBuffer > 0 && activeSection < totalSections - 1) {
          goToSection(activeSection + 1);
        } else if (scrollBuffer < 0 && activeSection > 0) {
          goToSection(activeSection - 1);
        }
        scrollBuffer = 0;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          goToSection(activeSection + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          goToSection(activeSection - 1);
          break;
        case "Home":
          e.preventDefault();
          goToSection(0);
          break;
        case "End":
          e.preventDefault();
          goToSection(totalSections - 1);
          break;
      }
    };

    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const deltaX = startX - endX;
      const deltaY = startY - endY;

      // Only respond to horizontal swipes that are more significant than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 80) {
        if (deltaX > 0) {
          goToSection(activeSection + 1);
        } else {
          goToSection(activeSection - 1);
        }
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(scrollTimer);
    };
  }, [activeSection, isTransitioning, totalSections]);

  return (
    <div className="h-screen overflow-hidden bg-black">
      {/* Container that slides horizontally */}
      <div
        ref={containerRef}
        className="flex h-full transition-transform duration-600 ease-out"
        style={{ width: `${totalSections * 100}vw` }}
      >
        <section className="w-screen h-full flex-shrink-0">
          <HeroSection />
        </section>

        <section className="w-screen h-full flex-shrink-0">
          <P2PLendingSection />
        </section>

        <section className="w-screen h-full flex-shrink-0">
          <BullaSection />
        </section>

        <section className="w-screen h-full flex-shrink-0">
          <WystSection />
        </section>

        <section className="w-screen h-full flex-shrink-0">
          <Footer />
        </section>
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-white to-blue-500 transition-all duration-600 ease-out"
          style={{
            width: `${((activeSection + 1) / totalSections) * 100}%`,
          }}
        />
      </div>

      {/* Navigation dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-4">
        {sectionNames.map((name, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            disabled={isTransitioning}
            className={`group relative w-3 h-3 transition-all duration-300 ${
              activeSection === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            } ${isTransitioning ? "pointer-events-none" : ""}`}
            aria-label={`Go to ${name}`}
          >
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/80 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {name}
            </span>
          </button>
        ))}
      </div>

      {/* Navigation arrows */}
      {activeSection > 0 && (
        <button
          onClick={() => goToSection(activeSection - 1)}
          disabled={isTransitioning}
          className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-all"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {activeSection < totalSections - 1 && (
        <button
          onClick={() => goToSection(activeSection + 1)}
          disabled={isTransitioning}
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-all"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Section indicator */}
      <div className="fixed top-6 left-6 z-50 text-white">
        <div className="bg-black/30 backdrop-blur-sm px-4 border border-white/20 py-2">
          <div className="text-lg font-semibold">
            {activeSection + 1} / {totalSections}
          </div>
          <div className="text-sm opacity-80">
            {sectionNames[activeSection]}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="fixed top-6 right-6 z-50 text-white/70 text-sm">
        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-none px-3 py-2 space-y-1">
          <p>🖱️ Scroll to navigate</p>
          <p>⬅️ ➡️ Use arrow keys</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
