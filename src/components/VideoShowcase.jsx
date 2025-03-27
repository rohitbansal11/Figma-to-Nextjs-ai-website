'use client';

import { useEffect, useRef } from 'react';

const VideoShowcase = () => {
  const showcaseRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = showcaseRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="showcase" 
      ref={showcaseRef}
      className="section-padding bg-gradient-to-b from-background to-black/80"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto glass p-2 rounded-2xl animate-on-scroll">
          <div className="cursor-pointer relative aspect-video rounded-xl overflow-hidden bg-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className=" cursor-pointer w-16 h-16 md:w-20 md:h-20 bg-purple/80 hover:bg-purple rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-1"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-lg md:text-xl font-bold">AI SEO</h3>
              <p className="text-sm opacity-70">Watch how our AI tool optimizes your website content.</p>
            </div>
            
            <img 
              src="/vedioImages.jpg" 
              alt="AI SEO Demo" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
