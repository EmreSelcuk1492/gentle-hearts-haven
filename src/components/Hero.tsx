
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[#f9f9f0]">
      {/* Floating Background Elements with Enhanced Random Animations */}
      <div className="floating-shape w-80 h-80 bg-healing-green/60 rounded-full -top-24 -left-24 animate-float-1"></div>
      <div className="floating-shape w-72 h-72 bg-healing-orange/60 rounded-full top-10 -right-20 animate-float-2"></div>
      <div className="floating-shape w-64 h-64 bg-healing-blue/60 rounded-full bottom-20 left-1/3 animate-float-3"></div>
      <div className="floating-shape w-96 h-96 bg-healing-violet/60 rounded-full -bottom-32 right-1/4 animate-float-4"></div>
      <div className="floating-shape w-80 h-80 bg-healing-yellow/60 rounded-full bottom-0 -left-20 animate-float-5"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <span className="text-primary font-medium mb-3 block">Attain Energy Healing Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Embark on Your Journey to <br />
            <span className="text-gradient-pastel">Holistic Well-being</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl">
            Experience personalized energy healing and life coaching tailored to rejuvenate your mind, body, and spirit. 
            Specialized services for professional career mothers dealing with stress, anxiety, and trauma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-healing-green hover:bg-healing-green/90 text-foreground px-8 py-6 text-lg group rounded-md">
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-healing-violet text-foreground hover:bg-healing-violet/10 px-8 py-6 text-lg rounded-md">
              Learn About Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
