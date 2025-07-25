
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  
  useEffect(() => {
    // Check if we're on the home page
    setIsHomePage(window.location.pathname === '/');
    
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
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset to account for navbar height
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <nav className={`py-4 px-6 md:px-12 flex items-center justify-between w-full top-0 z-50 transition-all duration-300 ${
      (isScrolled || !isHomePage) ? 'fixed bg-white/90 backdrop-blur-md shadow-sm' : 'relative bg-transparent'
    }`}>
      <div 
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        onClick={() => window.location.href = '/'}
      >
        <img 
          src="/lovable-uploads/43ef3823-8e8b-4c03-980a-3943dd150fd2.png" 
          alt="Attain Energy Healing logo" 
          className="h-10 w-auto rounded-md" 
        />
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Attain Energy Healing</span>
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
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a 
            href="#philosophy" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={(e) => handleNavClick(e, 'philosophy')}
          >
            Philosophy
          </a>
          <a 
            href="#certification-practice" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={(e) => handleNavClick(e, 'certification-practice')}
          >
            Practice
          </a>
          <a 
            href="#certification-practice" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={(e) => handleNavClick(e, 'certification-practice')}
          >
            Certifications
          </a>
          <a 
            href="#services" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={(e) => handleNavClick(e, 'services')}
          >
            Services
          </a>
          <a 
            href="#testimonials" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={(e) => handleNavClick(e, 'testimonials')}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Discover
          </a>
        </div>
      )}
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a 
          href="#about" 
          className="text-foreground/80 hover:text-primary transition-colors"
          onClick={(e) => handleNavClick(e, 'about')}
        >
          About
        </a>
        <a 
          href="#philosophy" 
          className="text-foreground/80 hover:text-primary transition-colors"
          onClick={(e) => handleNavClick(e, 'philosophy')}
        >
          Philosophy
        </a>
        <a 
          href="#certification-practice" 
          className="text-foreground/80 hover:text-primary transition-colors"
          onClick={(e) => handleNavClick(e, 'certification-practice')}
        >
          Practice
        </a>
        <a 
          href="#certification-practice" 
          className="text-foreground/80 hover:text-primary transition-colors"
          onClick={(e) => handleNavClick(e, 'certification-practice')}
        >
          Certifications
        </a>
        <a 
          href="#services" 
          className="text-foreground/80 hover:text-primary transition-colors"
          onClick={(e) => handleNavClick(e, 'services')}
        >
          Services
        </a>
        <a 
          href="#testimonials" 
          className="text-foreground/80 hover:text-primary transition-colors"
          onClick={(e) => handleNavClick(e, 'testimonials')}
        >
          Testimonials
        </a>
        <a 
          href="#contact" 
          className="text-foreground/80 hover:text-primary transition-colors"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Discover
        </a>
      </div>
      
    </nav>
  );
};

export default Navbar;
