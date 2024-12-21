import React from 'react';

const FeaturesSection = () => {
    const DOT_SPACING = 40; // pixels between dots
  return (
    <div className="min-h-screen bg-[#F9F7F4] flex flex-col items-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden  pointer-events-none">
        {[...Array(Math.ceil(window.innerWidth / DOT_SPACING))].map((_, colIndex) => (
          <div 
            key={colIndex} 
            className="absolute top-0 b bottom-0"
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
      </div>


      {/* Header with decorative elements */}
      <div className="relative max-w-5xl mx-auto text-center mb-20">
        {/* Left decorative leaf */}
        <div className="absolute -left-20 top-0">
          <svg width="120" height="120" viewBox="0 0 120 120" className="fill-current">
            <path
              d="M60 20 Q80 20 90 40 T80 80 Q60 100 40 80 T30 40 Q40 20 60 20"
              fill="#4ADE80"
            />
            <path
              d="M65 40 L85 50 L85 70 L65 60"
              fill="#FF4D4D"
              strokeWidth="2"
              stroke="#FF4D4D"
            />
          </svg>
        </div>
        
        {/* Right decorative element */}
        <div className="absolute -right-20 top-0">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <path
              d="M30 30 L90 90 M40 30 L90 80 M50 30 L90 70"
              stroke="black"
              strokeWidth="2"
            />
            <circle cx="60" cy="60" r="40" fill="#FF69B4" opacity="0.6" />
            <circle cx="70" cy="50" r="4" fill="#FFD700" />
            <circle cx="80" cy="60" r="4" fill="#FFD700" />
          </svg>
        </div>

        <h2 className="text-6xl font-normal mb-8">
          We didn't reinvent the<br />wheel. Just design.
        </h2>
        <p className="text-xl text-gray-600 mb-2">
          Design as you know it is out the door.
        </p>
        <p className="text-xl text-gray-600">
          Design as you want it just arrived.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {/* Subscribe Feature */}
        <div className="text-center">
          <div className="mb-6 mx-auto w-32 h-32 relative">
            <div className="absolute inset-0 bg-[#4ADE80] rounded-full">
              <svg viewBox="0 0 40 40" className="w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <path
                  d="M8 20 A12 12 0 1 0 32 20 A12 12 0 1 0 8 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 20 L24 20 M20 16 L20 24"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl mb-4">
            Subscribe to a plan &<br />
            request as many designs<br />
            as you'd like.
          </h3>
        </div>

        {/* Receive Feature */}
        <div className="text-center">
          <div className="mb-6 mx-auto w-32 h-32 relative">
            <div className="absolute inset-0 bg-pink-400 rounded-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-8 bg-yellow-300 rounded" />
                <div className="w-8 h-1 bg-white mt-2 mx-auto" />
              </div>
            </div>
          </div>
          <h3 className="text-xl mb-4">
            Receive your design<br />
            within two business days<br />
            on average.
          </h3>
        </div>

        {/* Revise Feature */}
        <div className="text-center">
          <div className="mb-6 mx-auto w-32 h-32 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 border-4 border-white rounded-full" />
                <div className="w-8 h-8 bg-pink-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
          <h3 className="text-xl mb-4">
            We'll revise the designs<br />
            until you're 100% satisfied.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;