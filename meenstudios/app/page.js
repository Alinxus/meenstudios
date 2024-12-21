'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroSection from "../components/Hero";
import ScrollSection from "../components/ScrollSection";
import StickyNav from "@/components/Nav";
import FeaturesSection from "@/components/Features";
import DesignJoyHero from "@/components/Testimonials";
import Next from "@/components/Next";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportDimensions, setViewportDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    // Handle scroll
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Handle resize
    const handleResize = () => {
      setViewportDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial setup
    handleResize();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate dot grid
  const DOT_SPACING = 40;
  const columns = Math.ceil(viewportDimensions.width / DOT_SPACING);
  const rows = Math.ceil((viewportDimensions.height * 3) / DOT_SPACING); // Multiply by 3 to cover scroll area

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background color */}
      <div className="fixed inset-0 bg-[#F9F7F4] -z-20" />

      {/* Dots pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${-scrollPosition * 0.5}px)` }}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={`col-${colIndex}`}
              className="absolute top-0 bottom-0"
              style={{ left: `${colIndex * DOT_SPACING}px` }}
            >
              {Array.from({ length: rows }).map((_, rowIndex) => (
                <div
                  key={`dot-${colIndex}-${rowIndex}`}
                  className="absolute w-4 h-4 bg-black rounded-full opacity-40"
                  style={{ top: `${rowIndex * DOT_SPACING}px` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="relative z-0">
        <HeroSection />
        <FeaturesSection />
        <DesignJoyHero />
        <Next />
      </main>

      {/* Sticky Navigation */}
      <StickyNav />
    </div>
  );
}