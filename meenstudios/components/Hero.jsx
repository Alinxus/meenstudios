import React from 'react';

const HeroSection = () => {
  // Calculate number of dots based on viewport
  const DOT_SPACING = 40; // pixels between dots

  return (
    <div className="relative min-h-screen bg-[#F9F7F4] flex flex-col items-center justify-center px-4">
      {/* Full-width logo bar at top */}
      <div className="absolute top-0 left-0 right-0 items-center bg-white py-4 px-6 shadow-sm z-index-100">
        <h1 className="font-normal ">Designjoy™</h1>
      </div>

      {/* Dots pattern - evenly distributed */}
      {/* <div className="absolute inset-0 overflow-hidden top-10 pointer-events-none">
        {[...Array(Math.ceil(window.innerWidth / DOT_SPACING))].map((_, colIndex) => (
          <div 
            key={colIndex} 
            className="absolute top-10 b bottom-0"
            style={{ left: `${colIndex * DOT_SPACING}px` }}
          >
            {[...Array(Math.ceil(window.innerHeight / DOT_SPACING))].map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="absolute w-1 h-1 bg-black opacity-10 rounded-full"
                style={{ top: `${rowIndex * DOT_SPACING}px` }}
              />
            ))}
          </div>
        ))}
      </div> */}

      {/* Decorative elements */}
      <div className="absolute left-24 top-1/2 -translate-y-1/2">
        <div className="w-32 h-32 relative">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#FF4D00"
              strokeWidth="8"
              className="transform origin-center"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#FF4D00"
              strokeWidth="8"
              className="transform origin-center"
            />
          </svg>
        </div>
      </div>

      <div className="absolute right-24 top-1/2 -translate-y-1/2">
        <div className="w-32 h-32 relative">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="8"
              className="transform origin-center"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="8"
              className="transform origin-center"
            />
          </svg>
        </div>
      </div>

      {/* New decorative element - spiral shape */}
      <div className="absolute right-48 top-32">
        <svg width="60" height="60" viewBox="0 0 100 100" className="opacity-80">
          <path
            d="M50 10 
               C 70 10, 90 30, 90 50
               C 90 70, 70 90, 50 90
               C 30 90, 10 70, 10 50
               C 10 30, 30 10, 50 10"
            fill="none"
            stroke="#FFB84D"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M50 30
               C 60 30, 70 40, 70 50
               C 70 60, 60 70, 50 70
               C 40 70, 30 60, 30 50
               C 30 40, 40 30, 50 30"
            fill="none"
            stroke="#FFB84D"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto z-10 mt-16">
        <h1 className="text-[6rem] font-normal leading-tight mb-6">
          A development agency<br />with a twist
        </h1>
        <p className="text-xl mb-8">
          MVP subscriptions for everyone. Pause or cancel anytime.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <button className="bg-black text-white px-8 py-5 gap-y-5 rounded-full text-lg font-normal">
            See plans
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-sm">Available now</span>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
    
    </div>
  );
};

export default HeroSection;