
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Floating Background Elements with Random Animations */}
      <div className="floating-shape w-64 h-64 bg-healing-green rounded-full -top-20 -left-20 animate-float-1"></div>
      <div className="floating-shape w-48 h-48 bg-healing-orange rounded-full top-40 right-20 animate-float-2"></div>
      <div className="floating-shape w-32 h-32 bg-healing-blue rounded-full bottom-20 left-1/4 animate-float-3"></div>
      <div className="floating-shape w-40 h-40 bg-healing-violet rounded-full bottom-10 right-10 animate-float-4"></div>
      <div className="floating-shape w-24 h-24 bg-healing-yellow rounded-full top-1/3 left-10 animate-float-5"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <span className="text-primary font-medium mb-2 block">Attain Energy Healing Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Embark on Your Journey to <span className="text-gradient">Holistic Well-being</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            Experience personalized energy healing and life coaching tailored to rejuvenate your mind, body, and spirit. 
            Specialized services for professional career mothers dealing with stress, anxiety, and trauma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-healing-green text-foreground hover:bg-healing-green/90 px-8 py-6 text-lg group">
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-healing-violet text-foreground hover:bg-healing-violet/10 px-8 py-6 text-lg">
              Learn About Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
