
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

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
        <div className="max-w-3xl">
          <span className="text-primary font-medium mb-3 block">Energy Medicine Practitioner</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover the Balance <br />
            <span className="text-gradient-pastel">Beyond What We See</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl">
            We are all in an ocean of energy, constantly interacting with each other and the world. 
            I help you explore beyond the physically observable to address the root causes of your 
            challenges - physical, energetic, emotional, mental, and spiritual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-healing-green hover:bg-healing-green/90 text-foreground px-8 py-6 text-lg group rounded-md">
              Begin Your Healing Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-healing-violet text-foreground hover:bg-healing-violet/10 px-8 py-6 text-lg rounded-md">
              Read My Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
