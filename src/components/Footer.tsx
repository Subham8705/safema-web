
import React from 'react';
import { Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Safema</h3>
            <p className="text-gray-300 mb-4">
              A real-time women's safety app and smart wearable device that offers protection through live tracking, 
              emergency alerts, and a secure network.
            </p>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-pink-400" />
              <a href="mailto:contact@safema.com" className="text-gray-300 hover:text-pink-400">
                contact@safema.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-pink-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('problem')} className="text-gray-300 hover:text-pink-400">
                  The Problem
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solution')} className="text-gray-300 hover:text-pink-400">
                  Our Solution
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-pink-400">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('impact')} className="text-gray-300 hover:text-pink-400">
                  Impact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-pink-400">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-pink-400">Contact Emails</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-pink-400">
                <a href="mailto:nainathippani@gmail.com">nainathippani@gmail.com</a>
              </li>
              <li className="text-gray-300 hover:text-pink-400">
                <a href="mailto:neesonu98215@gmail.com">neesonu98215@gmail.com</a>
              </li>
              <li className="text-gray-300 hover:text-pink-400">
                <a href="mailto:subhamkumarshee@gmail.com">subhamkumarshee@gmail.com</a>
              </li>
              <li className="text-gray-300 hover:text-pink-400">
                {/* <a href="mailto:support@safema.com">support@safema.com</a> */}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Safema. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-pink-400 text-sm">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-pink-400 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
