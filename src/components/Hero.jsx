'use client';

import { useEffect, useRef } from 'react';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const heroRef = useRef(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <ThreeScene />
      
      <div className="container mx-auto px-6 py-20 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block glass px-3 py-1 rounded-full mb-6 animate-on-scroll">
            <span className="text-xs md:text-sm font-medium text-purple-light">Your complete AI startup solution</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-on-scroll">
            Free AI Startup <br />Website Kit
          </h1>
          
          <p className="text-md md:text-lg opacity-70 mb-8 max-w-2xl mx-auto animate-on-scroll">
            A collection of beautiful web components, templates and designs, crafted for your next AI startup. Build, launch, and scale your web presence in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-on-scroll">
            <button className=" cursor-pointer bg-purple hover:bg-purple-light text-white font-medium px-6 py-3 rounded-md transition-colors">
              Get Started
            </button>
            <button className=" cursor-pointer glass hover:bg-white/10 font-medium px-6 py-3 rounded-md transition-colors">
              See Examples
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 animate-on-scroll">
            {['Lightning Fast', 'Responsive Design', 'Complete Ecosystem', 'Detailed Documentation', 'Weekly Updates'].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-purple"></div>
                <span className="text-xs md:text-sm opacity-70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#showcase" 
          className="animate-bounce bg-white/5 hover:bg-white/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
