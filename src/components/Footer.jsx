'use client';

import { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const footerRef = useRef(null);
  
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

    const elements = footerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Templates', 'Integrations', 'Pricing', 'Updates']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Tutorials', 'Blog', 'Support Center', 'Changelog']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Contact', 'Partners']
    }
  ];

  return (
    <footer 
      ref={footerRef}
      className="bg-black pt-20 pb-10"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-bold text-lg">AI Startup Kit</span>
            </div>
            <p className="text-sm opacity-70 mb-6 max-w-xs">
              The complete solution for creating and launching your AI startup website in minutes.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm flex-grow focus:outline-none focus:border-purple"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className=" cursor-pointer bg-purple hover:bg-purple-light text-white font-medium px-4 py-2 rounded-md transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {footerLinks.map((column, index) => (
            <div 
              key={index} 
              className="animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h4 className="font-medium mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="cursor-pointer text-sm opacity-70 hover:opacity-100 transition-opacity">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70 mb-4 md:mb-0 animate-on-scroll">
            © 2023 AI Startup Kit. All rights reserved.
          </p>
          <div className="flex gap-6 animate-on-scroll">
            {['Twitter', 'LinkedIn', 'GitHub', 'YouTube', 'Discord'].map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-sm cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
