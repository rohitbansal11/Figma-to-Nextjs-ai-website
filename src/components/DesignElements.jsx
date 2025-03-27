'use client';

import { useEffect, useRef } from 'react';

const DesignElements = () => {
  const elementsRef = useRef(null);
  
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

    const elements = elementsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="elements" 
      ref={elementsRef}
      className="section-padding bg-gradient-to-br from-dark-lighter to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-20 w-40 h-40 bg-purple/30 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-20 w-60 h-60 bg-purple/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block glass px-3 py-1 rounded-full mb-4 animate-on-scroll">
            <span className="text-xs md:text-sm font-medium text-purple-light">Components Library</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Discover a collection of <br /><span className="text-gradient">curated design elements</span>.
          </h2>
          <p className="text-md opacity-70 animate-on-scroll">
            Our kit includes a comprehensive collection of UI components to help you build a consistent and beautiful website.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            'Buttons', 'Cards', 'Forms', 'Navigation', 
            'Headers', 'Footers', 'Pricing Tables', 'Testimonials', 
            'Hero Sections', 'Feature Grids', 'FAQ Accordions', 'CTAs'
          ].map((element, index) => (
            <div 
              key={index} 
              className="animate-on-scroll"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="glass hover:border-purple/30 rounded-xl p-4 h-full flex items-center justify-center text-center transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                <span className="font-medium">{element}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <button className="glass cursor-pointer hover:bg-white/10 font-medium px-6 py-3 rounded-md transition-colors">
            Browse all components
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignElements;