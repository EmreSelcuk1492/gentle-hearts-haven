
import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <Heart className="text-healing-violet h-6 w-6" />
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Attain Energy Healing Services</span>
          <span className="text-xs text-foreground/70">by Asli Selcuk</span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
        <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
        <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Testimonials</a>
        <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
      </div>
      
      <Button className="bg-healing-green text-foreground hover:bg-healing-green/90">
        Book a Session
      </Button>
    </nav>
  );
};

export default Navbar;
