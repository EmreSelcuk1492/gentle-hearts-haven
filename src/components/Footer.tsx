
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur-sm py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Heart className="text-healing-violet h-6 w-6" />
            <span className="font-semibold text-xl">Attain Energy Healing Services</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="text-foreground/70 text-sm">
            &copy; {new Date().getFullYear()} Attain Energy Healing Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
