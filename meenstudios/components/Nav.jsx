import React from 'react';

const StickyNav = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 py-5">
      <nav className="bg-black text-white rounded-full flex items-center overflow-hidden">
        
        
        
        {['Benefits', 'Services', 'Pricing', 'FAQs'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="px-6 py-3 hover:text-gray-300 transition-colors"
          >
            {item}
          </a>
        ))}
        
        <a href="#" className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 transition-colors">
          Login
        </a>
        
      </nav>
    </div>
  );
};

export default StickyNav;