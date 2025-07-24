import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
  orbCount?: number;
  colors?: string[];
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className = "",
  orbCount = 6,
  colors = [
    '#C5E1A5', // healing-green
    '#FFCC80', // healing-orange
    '#D1C4E9', // healing-violet
    '#FFF59D', // healing-yellow
    '#B3E5FC'  // healing-blue
  ]
}) => {
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
      
      for (let i = 0; i < orbCount; i++) {
        createOrb(true);
      }
    };
    
    createInitialOrbs();
    
    let animationFrameId: number;
    
    const animateOrbs = () => {
      orbsArray.current.forEach(orb => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;
        
        if (!orbsContainer.current) return;
        
        const containerWidth = orbsContainer.current.offsetWidth;
        const containerHeight = orbsContainer.current.offsetHeight;
        
        if (orb.x <= 0 || orb.x >= containerWidth - orb.size) {
          orb.speedX = -orb.speedX;
        }
        
        if (orb.y <= 0 || orb.y >= containerHeight - orb.size) {
          orb.speedY = -orb.speedY;
        }
        
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
      if (orbsArray.current.length >= orbCount + 6) {
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
  }, [orbCount, colors]);

  return (
    <div 
      ref={orbsContainer} 
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground; 