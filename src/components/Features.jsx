'use client';

import { useEffect, useRef } from 'react';



const FeatureCard = ({ title, description, icon, className = '' }) => (
  <div className={`glass rounded-2xl p-6 flex flex-col cursor-pointer h-full ${className}`}>
    <div className="bg-purple/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm opacity-70 flex-grow">{description}</p>
  </div>
);

const Features = () => {
  const featuresRef = useRef(null);
  
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

    const elements = featuresRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      title: 'AI Content Generation',
      description: 'Generate high-quality content for your website with our advanced AI models.',
      icon: (
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
          className="text-purple"
        >
          <path d="M12 2v8"></path>
          <path d="m4.93 10.93 1.41 1.41"></path>
          <path d="M2 18h2"></path>
          <path d="M20 18h2"></path>
          <path d="m19.07 10.93-1.41 1.41"></path>
          <path d="M22 22H2"></path>
          <path d="m16 6-4 4-4-4"></path>
          <path d="M16 18a4 4 0 0 0-8 0"></path>
        </svg>
      )
    },
    {
      title: 'SEO Optimization',
      description: 'Automatically optimize your content for search engines to drive more traffic.',
      icon: (
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
          className="text-purple"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      )
    },
    {
      title: 'Responsive Templates',
      description: 'Our templates are designed to look perfect on any device, from mobile to desktop.',
      icon: (
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
          className="text-purple"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <path d="M3 9h18"></path>
          <path d="M9 21V9"></path>
        </svg>
      )
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track your website performance with our comprehensive analytics dashboard.',
      icon: (
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
          className="text-purple"
        >
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      )
    },
    {
      title: 'Customer Support',
      description: 'Get help when you need it with our 24/7 customer support team.',
      icon: (
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
          className="text-purple"
        >
          <path d="M18 16.8a2.5 2.5 0 0 1 1 2 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 1-2"></path>
          <path d="M10 16.8a2.5 2.5 0 0 1 1 2 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 1-2"></path>
          <path d="M2 12h20"></path>
          <path d="M18 12a6 6 0 0 0-12 0"></path>
        </svg>
      )
    },
    {
      title: 'Regular Updates',
      description: 'We constantly improve our kit with regular updates and new features.',
      icon: (
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
          className="text-purple"
        >
          <path d="M12 2v4"></path>
          <path d="M12 18v4"></path>
          <path d="M4.93 4.93l2.83 2.83"></path>
          <path d="M16.24 16.24l2.83 2.83"></path>
          <path d="M2 12h4"></path>
          <path d="M18 12h4"></path>
          <path d="M4.93 19.07l2.83-2.83"></path>
          <path d="M16.24 7.76l2.83-2.83"></path>
        </svg>
      )
    }
  ];
  
  return (
    <section 
      id="features" 
      ref={featuresRef}
      className="section-padding"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block glass px-3 py-1 rounded-full mb-4 animate-on-scroll">
            <span className="text-xs md:text-sm font-medium text-purple-light">All you need</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Comprehensive tools to build your <span className="text-gradient">AI startup</span>
          </h2>
          <p className="text-md opacity-70 animate-on-scroll">
            From ideation to launch, our kit provides everything you need to create a professional AI startup website.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;