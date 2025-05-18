
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const problemStats = [
  { 
    stat: '90%', 
    text: 'of women in urban areas feel unsafe in public spaces'
  },
  { 
    stat: '70%', 
    text: 'of harassment incidents go unreported due to fear or lack of evidence'
  },
  { 
    stat: '5-15 min', 
    text: 'average emergency response time, often too slow in critical situations'
  }
];

const Problem = () => {
  return (
    <section id="problem" className="py-16 md:py-24 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">The Problem We're Solving</h2>
          <p className="text-lg text-gray-600">
            Women's safety remains a pressing concern, with many cases of harassment and assault going unreported due to fear, 
            lack of evidence, or delayed emergency response. In critical situations, immediate action can make a significant difference, 
            yet existing safety measures often fall short.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemStats.map((item, index) => (
            <Card key={index} className="border-pink-100 shadow-md hover:shadow-xl transition-shadow animate-fade-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-pink-600 mb-2">{item.stat}</p>
                <p className="text-gray-700">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md border border-pink-100 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Women Face Multiple Safety Challenges:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Rape and sexual assault",
              "Catcalling and verbal harassment",
              "Chain snatching and theft",
              "Stalking and unwanted following",
              "Trafficking risks",
              "Public transportation safety concerns",
              "Workplace harassment",
              "Digital harassment and cyberbullying"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Problem;
