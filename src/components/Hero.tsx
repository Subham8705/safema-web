
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const screenshotImages = [
  "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_527,h_1140,g_auto/v1747553246/Screenshot_2025-05-18_125709_geopdr.png",
  "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_527,h_1100,g_auto/v1747553275/Screenshot_2025-05-18_125744_osfkh8.png",
  "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_527,h_1100,g_auto/v1747553296/Screenshot_2025-05-18_125807_ii88nc.png",
  "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_528,h_1143/v1747553313/Screenshot_2025-05-18_125826_v2xfkl.png"
];

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-10 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Protecting Women with <span className="text-pink-600">Real-time Safety</span> Technology
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Safema is a revolutionary women's safety app that combines smart wearable devices 
              with community protection features for immediate assistance in emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="gradient-pink shadow-pink text-white text-lg py-6 px-8"
                onClick={scrollToContact}
              >
                Learn More
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-500 text-pink-600 hover:bg-pink-50 text-lg py-6 px-8"
                onClick={scrollToContact}
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-pink-200 blur-3xl opacity-70"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-pink-100">
                <Carousel className="w-full">
                  <CarouselContent>
                    {screenshotImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="mx-auto max-w-[300px] max-h-[4000px]">
                          <AspectRatio ratio={9/16} className="bg-pink-50 rounded-2xl overflow-hidden h-[570px] w-[280px]">
                            <img 
                              src={image} 
                              alt={`App Screenshot ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </AspectRatio>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-4">
                    <CarouselPrevious className="relative -left-0 mr-2 bg-white border-pink-200 hover:bg-pink-50 hover:text-pink-600 text-pink-500" />
                    <CarouselNext className="relative -right-0 ml-2 bg-white border-pink-200 hover:bg-pink-50 hover:text-pink-600 text-pink-500" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
