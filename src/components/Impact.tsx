
import React from 'react';
import { Progress } from "@/components/ui/progress";

const impactStats = [
  {
    title: "Safety Awareness Improvement",
    percentage: 24,
    description: "Increase in women's safety awareness among users"
  },
  {
    title: "Emergency Response Efficiency",
    percentage: 26.2,
    description: "Faster emergency response times for critical situations"
  },
  {
    title: "Increased Sense of Safety",
    percentage: 28.3,
    description: "Growth in confidence and sense of security"
  },
  {
    title: "Reduction in Harassment Cases",
    percentage: 21.5,
    description: "Decrease in reported harassment incidents"
  }
];

const Impact = () => {
  return (
    <section id="impact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Impact</h2>
          <p className="text-lg text-gray-600">
            Safema empowers women by providing real-time protection through instant alerts, live tracking, and 
            community-based safety networks, ensuring swift emergency response and reducing harassment risks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {impactStats.map((stat, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">{stat.title}</h3>
                <span className="text-xl font-bold text-pink-600">{stat.percentage}%</span>
              </div>
              <Progress value={stat.percentage} className="h-3 bg-pink-100" />
              <p className="mt-2 text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-pink-50 rounded-lg border border-pink-100 shadow-md animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Summary</h3>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Safema ensures women's safety through real-time alerts, live tracking, and community-based protection, 
            enabling swift emergency response and risk reduction for women of all ages across urban and rural environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
