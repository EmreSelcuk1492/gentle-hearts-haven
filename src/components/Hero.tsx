
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Globe, Instagram } from 'lucide-react';

const Hero = () => {
  const orbsContainer = useRef<HTMLDivElement>(null);
  const orbsArray = useRef<Array<{
    element: HTMLDivElement;
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    size: number;
    color: string;
    opacity: number;
    growing: boolean;
  }>>([]);
  
  useEffect(() => {
    const createOrb = (isInitial = false) => {
      if (!orbsContainer.current) return;
      
      const containerWidth = orbsContainer.current.offsetWidth;
      const containerHeight = orbsContainer.current.offsetHeight;
      
      // Colors from your theme
      const colors = [
        '#C5E1A5', // healing-green
        '#FFCC80', // healing-orange
        '#D1C4E9', // healing-violet
        '#FFF59D', // healing-yellow
        '#B3E5FC'  // healing-blue
      ];
      
      // Create a new orb
      const orb = document.createElement('div');
      
      // Random size between 2rem and 8rem
      const sizeInRem = 2 + Math.random() * 6;
      const size = sizeInRem * 16; // Convert rem to px
      
      // Random position within container
      const x = Math.random() * (containerWidth - size);
      const y = Math.random() * (containerHeight - size);
      
      // Random speed between -0.2 and 0.2
      const speedX = (Math.random() - 0.5) * 0.4;
      const speedY = (Math.random() - 0.5) * 0.4;
      
      // Random color from our palette
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Initial opacity
      const initialOpacity = isInitial ? (0.4 + Math.random() * 0.3) : 0;
      
      // Apply styles
      Object.assign(orb.style, {
        position: 'absolute',
        width: `${sizeInRem}rem`,
        height: `${sizeInRem}rem`,
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: color,
        borderRadius: '50%',
        filter: 'blur(10px)',
        opacity: initialOpacity.toString(),
        zIndex: '1',
        transform: 'scale(0.8)',
        transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'
      });
      
      orbsContainer.current.appendChild(orb);
      
      // Start with a ripple effect if not initial
      if (!isInitial) {
        setTimeout(() => {
          orb.style.opacity = (0.4 + Math.random() * 0.3).toString();
          orb.style.transform = 'scale(1)';
        }, 10);
      }
      
      // Store the orb data for animation
      orbsArray.current.push({
        element: orb,
        x,
        y,
        speedX,
        speedY,
        size,
        color,
        opacity: initialOpacity,
        growing: !isInitial
      });
    };
    
    const createInitialOrbs = () => {
      if (!orbsContainer.current) return;
      
      // Clear any existing orbs
      orbsContainer.current.innerHTML = '';
      orbsArray.current = [];
      
      // Create initial set of orbs
      for (let i = 0; i < 6; i++) {
        createOrb(true);
      }
    };
    
    createInitialOrbs();
    
    // Animate orbs
    let animationFrameId: number;
    
    const animateOrbs = () => {
      if (!orbsContainer.current) return;
      
      const containerWidth = orbsContainer.current.offsetWidth;
      const containerHeight = orbsContainer.current.offsetHeight;
      
      orbsArray.current.forEach((orb, index) => {
        // Update position
        orb.x += orb.speedX;
        orb.y += orb.speedY;
        
        // Bounce off edges
        if (orb.x <= 0 || orb.x + orb.size >= containerWidth) {
          orb.speedX = -orb.speedX;
          orb.x = Math.max(0, Math.min(containerWidth - orb.size, orb.x));
        }
        
        if (orb.y <= 0 || orb.y + orb.size >= containerHeight) {
          orb.speedY = -orb.speedY;
          orb.y = Math.max(0, Math.min(containerHeight - orb.size, orb.y));
        }
        
        // Add slight randomness to speed
        orb.speedX += (Math.random() - 0.5) * 0.02;
        orb.speedY += (Math.random() - 0.5) * 0.02;
        
        // Limit max speed
        const maxSpeed = 0.8;
        orb.speedX = Math.max(-maxSpeed, Math.min(maxSpeed, orb.speedX));
        orb.speedY = Math.max(-maxSpeed, Math.min(maxSpeed, orb.speedY));
        
        // Update DOM element position
        orb.element.style.left = `${orb.x}px`;
        orb.element.style.top = `${orb.y}px`;
        
        // If orb is growing (new), update its opacity and size
        if (orb.growing && orb.opacity < 0.7) {
          orb.opacity = Math.min(orb.opacity + 0.01, 0.7);
          orb.element.style.opacity = orb.opacity.toString();
        }
      });
      
      animationFrameId = requestAnimationFrame(animateOrbs);
    };
    
    // Start animation
    animateOrbs();
    
    // Add new orbs periodically
    const addOrbInterval = setInterval(() => {
      // Remove an old orb if we have too many
      if (orbsArray.current.length >= 12) {
        const oldOrbIndex = Math.floor(Math.random() * orbsArray.current.length);
        const oldOrb = orbsArray.current[oldOrbIndex];
        
        // Fade out the orb
        oldOrb.element.style.opacity = '0';
        oldOrb.element.style.transform = 'scale(0.5)';
        
        // Remove from DOM and array after transition
        setTimeout(() => {
          if (orbsContainer.current && oldOrb.element.parentNode === orbsContainer.current) {
            orbsContainer.current.removeChild(oldOrb.element);
          }
          orbsArray.current = orbsArray.current.filter(o => o !== oldOrb);
        }, 1500);
      }
      
      // Create a new orb with ripple effect
      createOrb(false);
    }, 3000); // Add a new orb every 3 seconds
    
    // Handle window resize
    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      createInitialOrbs();
      animateOrbs();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(addOrbInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[#f9f9f0]">
      {/* Dynamic Animated Orbs Container */}
      <div 
        ref={orbsContainer} 
        className="absolute inset-0 pointer-events-none overflow-hidden" 
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
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

          {/* New: Credentials Section inspired by the image */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md">
            <div className="mb-6">
              <h2 className="text-3xl font-medium text-gray-700">Asli Selcuk</h2>
              <div className="flex items-center mt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-300 to-green-500 flex items-center justify-center text-white mr-3">
                  <span className="text-xs font-bold">WIID</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">energy medicine specialist</p>
                  <p className="text-sm text-red-500">certified with WORLD INSTITUTE FOR INCURABLE DISEASES</p>
                  <p className="text-xs text-gray-500">Where Wisdom and Miracles Prolong Life</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">+1(425)241-2947</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-gray-500" />
                <a href="https://attainenergyhealing.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">
                  attainenergyhealing.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-gray-500" />
                <a href="https://instagram.com/attainyourbestlife" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">
                  @attainyourbestlife
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
