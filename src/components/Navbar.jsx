
'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse-gentle"></div>
          </div>
          <span className="font-bold text-lg">AI Startup Kit</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <li>
              <a href="#features" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">
                Features
              </a>
            </li>
            <li>
              <a href="#showcase" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">
                Showcase
              </a>
            </li>
            <li>
              <a href="#elements" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">
                Elements
              </a>
            </li>
            <li>
              <a href="#faq" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">
                FAQ
              </a>
            </li>
          </ul>
          <button className="bg-purple cursor-pointer hover:bg-purple-light text-white px-4 py-2 rounded-md transition-colors text-sm">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button  className="md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col py-4 px-6">
            <li className="py-2">
              <a 
                href="#features" 
                className="block cursor-pointer text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
            </li>
            <li className="py-2">
              <a 
                href="#showcase" 
                className="block  cursor-pointer text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Showcase
              </a>
            </li>
            <li className="py-2">
              <a 
                href="#elements" 
                className="block cursor-pointer text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Elements
              </a>
            </li>
            <li className="py-2">
              <a 
                href="#faq" 
                className="block cursor-pointer text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
            </li>
            <li className="pt-4">
              <button className=" cursor-pointer w-full cursor-pointer bg-purple hover:bg-purple-light cursor-pointer text-white px-4 py-2 rounded-md transition-colors text-sm">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
