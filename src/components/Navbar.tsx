
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-pink-600">Safema</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('problem')} className="text-gray-700 hover:text-pink-600 font-medium">Problem</button>
          <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-pink-600 font-medium">Solution</button>
          <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-pink-600 font-medium">Features</button>
          <button onClick={() => scrollToSection('impact')} className="text-gray-700 hover:text-pink-600 font-medium">Impact</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-pink-600 font-medium">Contact</button>
        </div>
        
        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="gradient-pink shadow-pink text-white"
          >
            Get in Touch
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('problem')} className="text-gray-700 hover:text-pink-600 py-2">Problem</button>
            <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-pink-600 py-2">Solution</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-pink-600 py-2">Features</button>
            <button onClick={() => scrollToSection('impact')} className="text-gray-700 hover:text-pink-600 py-2">Impact</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-pink-600 py-2">Contact</button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="gradient-pink shadow-pink text-white w-full"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
