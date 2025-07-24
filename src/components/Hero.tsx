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
      
      const colors = [
        '#C5E1A5', // healing-green
        '#FFCC80', // healing-orange
        '#D1C4E9', // healing-violet
        '#FFF59D', // healing-yellow
        '#B3E5FC'  // healing-blue
      ];
      
      const orb = document.createElement('div');
      
      const sizeInRem = 2 + Math.random() * 6;
      const size = sizeInRem * 16;
      
      const x = Math.random() * (containerWidth - size);
      const y = Math.random() * (containerHeight - size);
      
      const speedX = (Math.random() - 0.5) * 0.4;
      const speedY = (Math.random() - 0.5) * 0.4;
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const initialOpacity = isInitial ? (0.4 + Math.random() * 0.3) : 0;
      
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
      
      if (!isInitial) {
        setTimeout(() => {
          orb.style.opacity = (0.4 + Math.random() * 0.3).toString();
          orb.style.transform = 'scale(1)';
        }, 10);
      }
      
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
      
      orbsContainer.current.innerHTML = '';
      orbsArray.current = [];
      
      for (let i = 0; i < 6; i++) {
        createOrb(true);
      }
    };
    
    createInitialOrbs();
    
    let animationFrameId: number;
    
    const animateOrbs = () => {
      if (!orbsContainer.current) return;
      
      const containerWidth = orbsContainer.current.offsetWidth;
      const containerHeight = orbsContainer.current.offsetHeight;
      
      orbsArray.current.forEach((orb, index) => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;
        
        if (orb.x <= 0 || orb.x + orb.size >= containerWidth) {
          orb.speedX = -orb.speedX;
          orb.x = Math.max(0, Math.min(containerWidth - orb.size, orb.x));
        }
        
        if (orb.y <= 0 || orb.y + orb.size >= containerHeight) {
          orb.speedY = -orb.speedY;
          orb.y = Math.max(0, Math.min(containerHeight - orb.size, orb.y));
        }
        
        orb.speedX += (Math.random() - 0.5) * 0.02;
        orb.speedY += (Math.random() - 0.5) * 0.02;
        
        const maxSpeed = 0.8;
        orb.speedX = Math.max(-maxSpeed, Math.min(maxSpeed, orb.speedX));
        orb.speedY = Math.max(-maxSpeed, Math.min(maxSpeed, orb.speedY));
        
        orb.element.style.left = `${orb.x}px`;
        orb.element.style.top = `${orb.y}px`;
        
        if (orb.growing && orb.opacity < 0.7) {
          orb.opacity = Math.min(orb.opacity + 0.01, 0.7);
          orb.element.style.opacity = orb.opacity.toString();
        }
      });
      
      animationFrameId = requestAnimationFrame(animateOrbs);
    };
    
    animateOrbs();
    
    const addOrbInterval = setInterval(() => {
      if (orbsArray.current.length >= 12) {
        const oldOrbIndex = Math.floor(Math.random() * orbsArray.current.length);
        const oldOrb = orbsArray.current[oldOrbIndex];
        
        oldOrb.element.style.opacity = '0';
        oldOrb.element.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
          if (orbsContainer.current && oldOrb.element.parentNode === orbsContainer.current) {
            orbsContainer.current.removeChild(oldOrb.element);
          }
          orbsArray.current = orbsArray.current.filter(o => o !== oldOrb);
        }, 1500);
      }
      
      createOrb(false);
    }, 3000);
    
    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      createInitialOrbs();
      animateOrbs();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(addOrbInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[#f9f9f0]">
      <div 
        ref={orbsContainer} 
        className="absolute inset-0 pointer-events-none overflow-hidden" 
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to a Transformative <br />
            <span className="text-gradient-pastel">Healing Space</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl">
            Welcome to a transformative space where holistic healing meets energetic alignment. We
            live in an interconnected ocean of energy, constantly interacting with the world around us.
            My mission is to guide you beyond the physical and into deeper realms—addressing the
            root causes of your challenges across five key dimensions: <strong className="font-bold">physical, energetic, emotional, mental, and spiritual</strong>.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-6 max-w-2xl">
            Through personalized energy healing and integrative wellness practices, I help you release
            blockages, restore balance, and awaken your full potential. Together, we'll uncover the path
            to the vibrant, fulfilling life you truly deserve.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-6 max-w-2xl">
            Whether you're seeking clarity, healing, or spiritual growth, this journey is designed to
            empower you—mind, body, and soul.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl">
            Together, we work on attaining <strong className="font-bold">your best life, the best life you deserve</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-healing-green hover:bg-healing-green/90 text-foreground px-8 py-6 text-lg group rounded-md"
              onClick={() => scrollToSection('contact')}
            >
              Begin Your Healing Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-healing-violet text-foreground hover:bg-healing-violet/10 px-8 py-6 text-lg rounded-md"
              onClick={() => scrollToSection('my-journey')}
            >
              Read My Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
