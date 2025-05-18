
import React from 'react';

const Solution = () => {
  return (
    <section id="solution" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-10 order-2 md:order-1 mt-10 md:mt-0 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Solution: Safema</h2>
            <p className="text-lg text-gray-600 mb-6">
              Safema is a real-time women's safety app and smart wearable device system that offers immediate protection through:
            </p>
            <ul className="space-y-4">
              {[
                "Live location tracking for friends and family",
                "Emergency alert system with customizable triggers",
                "Secure network of nearby female users for community protection",
                "Integration with stylish wearable accessories for discreet protection",
                "Direct connection to law enforcement and SHE Teams"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-pink-200 blur-3xl opacity-70"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="aspect-[3/2] bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center p-8">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg max-w-md">
                    <h3 className="text-2xl font-semibold text-pink-600 mb-4">How Safema Works</h3>
                    <ol className="space-y-3 text-left">
                      <li className="flex">
                        <span className="font-bold mr-2">1.</span>
                        <span>Wear our stylish smart accessories like lockets, rings, or keychains.</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold mr-2">2.</span>
                        <span>One press shares your location with trusted contacts.</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold mr-2">3.</span>
                        <span>Two presses initiate a call to your emergency contact.</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold mr-2">4.</span>
                        <span>Three presses notify police and SHE Teams with your location.</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold mr-2">5.</span>
                        <span>Report suspicious individuals to alert nearby women in the Safema network.</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
