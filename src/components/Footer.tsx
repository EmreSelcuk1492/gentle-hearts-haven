
import React from 'react';
import { Heart, Mail, Instagram, Facebook, Twitter, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CalendlyButton from './CalendlyButton';

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur-sm pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/43ef3823-8e8b-4c03-980a-3943dd150fd2.png" 
                alt="Attain Energy Healing logo" 
                className="h-8 w-auto rounded-md" 
              />
              <span className="font-semibold text-xl">Attain Energy Healing</span>
            </div>
            <p className="text-foreground/70 mb-6">
              Transformative energy healing and holistic wellness services. Discover balance and healing across physical, energetic, emotional, mental, and spiritual dimensions.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/attainyourbestlife/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-healing-orange/20 flex items-center justify-center text-healing-orange hover:bg-healing-orange/30 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="mailto:threeclairs@outlook.com" className="w-8 h-8 rounded-full bg-healing-violet/20 flex items-center justify-center text-healing-violet hover:bg-healing-violet/30 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <a href="/events" className="text-foreground/80 hover:text-primary transition-colors">Events</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
              <a href="#philosophy" className="text-foreground/80 hover:text-primary transition-colors">Philosophy</a>
              <a href="#certification-practice" className="text-foreground/80 hover:text-primary transition-colors">Certifications</a>
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
              <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Testimonials</a>
              <a href="/origins" className="text-foreground/80 hover:text-primary transition-colors">Origins</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Discover</a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-foreground/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-foreground/70 text-sm text-center sm:text-left mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} Attain Energy Healing Services. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span className="text-foreground/60 text-xs">Certified by</span>
              <img src="/lovable-uploads/737d3562-5e6c-4668-bdb7-fc6b822ef598.png" alt="WIID" className="h-6 w-auto" />
              <span className="text-foreground/80 text-xs font-medium">WIID™</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
