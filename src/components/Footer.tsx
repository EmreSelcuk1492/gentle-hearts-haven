
import React from 'react';
import { Heart, Mail, Instagram, Facebook, Twitter, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CalendlyButton from './CalendlyButton';

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur-sm pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-healing-violet h-6 w-6" />
              <span className="font-semibold text-xl">Attain Energy Healing</span>
            </div>
            <p className="text-foreground/70 mb-6">
              Specialized healing services for professional career mothers dealing with stress, anxiety, and trauma.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-healing-green/20 flex items-center justify-center text-healing-green hover:bg-healing-green/30 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-healing-orange/20 flex items-center justify-center text-healing-orange hover:bg-healing-orange/30 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-healing-blue/20 flex items-center justify-center text-healing-blue hover:bg-healing-blue/30 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="mailto:contact@attainenergyhealing.com" className="w-8 h-8 rounded-full bg-healing-violet/20 flex items-center justify-center text-healing-violet hover:bg-healing-violet/30 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About Asli</a></li>
              <li><a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Get Started</h3>
            <p className="text-foreground/70 mb-4">Ready to begin your healing journey? Book a free discovery call to discuss your needs.</p>
            <CalendlyButton 
              calendlyUrl="https://calendly.com/your-username/30min"
              variant="default"
              size="sm"
              className="w-full bg-healing-violet hover:bg-healing-violet/90 text-white"
            >
              Book Discovery Call
            </CalendlyButton>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 pt-8">
          <div className="text-foreground/70 text-sm text-center">
            &copy; {new Date().getFullYear()} Attain Energy Healing Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
