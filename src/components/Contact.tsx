
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const emails = [
    "nainathippani@gmail.com",
    "neesonu98215@gmail.com",
    "subhamkumarshee@gmail.com",
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Have questions about Safema? Want to collaborate or learn more? 
            Reach out to our team and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="border-pink-100 shadow-md hover:shadow-xl transition-shadow animate-fade-up">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Email Us</h3>
                <div className="space-y-2">
                  {emails.map((email, index) => (
                    <p key={index} className="text-gray-600">
                      <a href={`mailto:${email}`} className="hover:text-pink-600 hover:underline">
                        {email}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-pink-100 shadow-md hover:shadow-xl transition-shadow animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Call Us</h3>
                <p className="text-gray-600">
                  <a href="tel:+91 85198 38150" className="hover:text-pink-600 hover:underline">
                  +91 85198 38150
                  </a>
                </p>
                <p className="text-gray-600 mt-1">
                  <a href="tel:+91 733 068 1857" className="hover:text-pink-600 hover:underline">
                  +91 733 068 1857
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
