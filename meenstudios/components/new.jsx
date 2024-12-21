import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#faf9f6] overflow-hidden">
      {/* Logo */}
      <div className="absolute top-4 items-center">
        <span className="text-xl font-semibold">MeenStudios™</span>
      </div>
      
      {/* Navigation */}
      <nav className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black rounded-full px-8 py-4 flex items-center gap-8 text-white">
        <div className="flex items-center gap-2">
          <span>memberstack</span>
          <div className="w-4 h-4 bg-blue-500" />
        </div>
        <button className="hover:text-gray-300">How it works</button>
        <button className="hover:text-gray-300">Benefits</button>
        <button className="hover:text-gray-300">Services</button>
        <button className="hover:text-gray-300">Pricing</button>
        <button className="hover:text-gray-300">FAQs</button>
        <button className="hover:text-gray-300">Login</button>
        <div className="flex items-center gap-2">
          <span>nectar</span>
          <div className="w-4 h-4 bg-blue-500" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-4xl">
        {/* Dots */}
        <div className="absolute -left-8 top-0">
          <svg viewBox="0 0 100 100" className="w-16 h-16">
            <g fill="currentColor">
              {[...Array(16)].map((_, i) => (
                <circle
                  key={i}
                  cx={10 + (i % 4) * 20}
                  cy={10 + Math.floor(i / 4) * 20}
                  r="2"
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Left Circle */}
        <div className="absolute -left-24 top-1/2 -translate-y-1/2">
          <svg viewBox="0 0 100 100" className="w-48 h-48">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#ff4d4d"
              strokeWidth="2"
              className="transform rotate-45"
            />
          </svg>
        </div>

        {/* Right Circle */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2">
          <svg viewBox="0 0 100 100" className="w-48 h-48">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#4d7fff"
              strokeWidth="2"
              className="transform rotate-45"
            />
          </svg>
        </div>

        {/* Main Text */}
        <h1 className="text-7xl font-medium mb-6">
          A design agency<br />with a twist
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Design subscriptions for everyone. Pause or cancel anytime.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition-colors">
            See plans
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-sm">Available now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;