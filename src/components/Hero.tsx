
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
  }>>([]);
  
  useEffect(() => {
    const createOrbs = () => {
      if (!orbsContainer.current) return;
      
      // Clear any existing orbs
      orbsContainer.current.innerHTML = '';
      orbsArray.current = [];
      
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
      
      // Create multiple orbs with different sizes and colors
      for (let i = 0; i < 8; i++) {
        const orb = document.createElement('div');
        
        // Random size between 4rem and 10rem
        const sizeInRem = 4 + Math.random() * 6;
        const size = sizeInRem * 16; // Convert rem to px
        
        // Random position within container
        const x = Math.random() * (containerWidth - size);
        const y = Math.random() * (containerHeight - size);
        
        // Random speed between -0.3 and 0.3
        const speedX = (Math.random() - 0.5) * 0.6;
        const speedY = (Math.random() - 0.5) * 0.6;
        
        // Random color from our palette
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random opacity between 0.4 and 0.7
        const opacity = 0.4 + Math.random() * 0.3;
        
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
          opacity: opacity.toString(),
          zIndex: '1'
        });
        
        orbsContainer.current.appendChild(orb);
        
        // Store the orb data for animation
        orbsArray.current.push({
          element: orb,
          x,
          y,
          speedX,
          speedY,
          size,
          color
        });
      }
    };
    
    createOrbs();
    
    // Animate orbs
    let animationFrameId: number;
    
    const animateOrbs = () => {
      if (!orbsContainer.current) return;
      
      const containerWidth = orbsContainer.current.offsetWidth;
      const containerHeight = orbsContainer.current.offsetHeight;
      
      orbsArray.current.forEach((orb) => {
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
      });
      
      animationFrameId = requestAnimationFrame(animateOrbs);
    };
    
    // Start animation
    animateOrbs();
    
    // Handle window resize
    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      createOrbs();
      animateOrbs();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
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
      </div>
    </section>
  );
};

export default Hero;
