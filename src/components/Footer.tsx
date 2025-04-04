
import React from 'react';
import { Heart, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur-sm pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors">Energy Healing</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors">Trauma Resolution</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors">Life Balance Coaching</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors">Mindfulness Training</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-foreground/70 mb-4">Stay updated with healing tips and event announcements</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="border-healing-green/50 focus-visible:ring-healing-green" />
              <Button className="bg-healing-green text-foreground hover:bg-healing-green/90 shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Attain Energy Healing Services. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
