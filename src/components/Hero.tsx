
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Floating Background Elements */}
      <div className="floating-shape w-64 h-64 bg-healing-green rounded-full -top-20 -left-20 animate-spin-slow"></div>
      <div className="floating-shape w-48 h-48 bg-healing-orange rounded-full top-40 right-20 animate-pulse-slow"></div>
      <div className="floating-shape w-32 h-32 bg-healing-blue rounded-full bottom-20 left-1/4 animate-float"></div>
      <div className="floating-shape w-40 h-40 bg-healing-violet rounded-full bottom-10 right-10 animate-pulse-slow"></div>
      <div className="floating-shape w-24 h-24 bg-healing-yellow rounded-full top-1/3 left-10 animate-spin-slow"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Find Your <span className="text-gradient">Inner Peace</span> Amidst Life's Demands
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            Specialized healing services for professional career mothers dealing with stress, anxiety, and trauma. Embrace a balanced life with gentle, effective healing techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-healing-green text-foreground hover:bg-healing-green/90 px-8 py-6 text-lg">
              Begin Your Healing Journey
            </Button>
            <Button variant="outline" className="border-healing-violet text-foreground hover:bg-healing-violet/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
