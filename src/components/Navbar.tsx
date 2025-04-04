
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`py-4 px-6 md:px-12 flex items-center justify-between fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="flex items-center gap-2">
        <Heart className="text-healing-violet h-6 w-6" />
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Attain Energy Healing Services</span>
          <span className="text-xs text-foreground/70">by Asli Selcuk</span>
        </div>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-foreground/80 hover:text-primary transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md p-6 flex flex-col gap-4">
          <a 
            href="#about" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#testimonials" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button 
            className="bg-healing-green text-foreground hover:bg-healing-green/90 w-full mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Session
          </Button>
        </div>
      )}
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
        <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
        <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Testimonials</a>
        <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
      </div>
      
      <Button className="hidden md:flex bg-healing-green text-foreground hover:bg-healing-green/90">
        Book a Session
      </Button>
    </nav>
  );
};

export default Navbar;
