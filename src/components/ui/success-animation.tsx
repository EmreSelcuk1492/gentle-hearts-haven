
import { Check, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

interface SuccessAnimationProps {
  className?: string;
  onComplete?: () => void;
  onReset?: () => void;
}

export const SuccessAnimation = ({
  className,
  onComplete,
  onReset,
}: SuccessAnimationProps) => {
  const [stage, setStage] = useState<"initial" | "circle" | "check" | "complete">("initial");
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
  }>>([]);

  // Generate colorful orbs in the background
  useEffect(() => {
    if (!orbsContainer.current) return;

    // Clear any existing orbs
    orbsContainer.current.innerHTML = '';
    orbsArray.current = [];

    // Colors from your theme
    const colors = [
      '#C5E1A5', // healing-green
      '#FFCC80', // healing-orange
      '#D1C4E9', // healing-violet
      '#FFF59D', // healing-yellow
      '#B3E5FC'  // healing-blue
    ];

    // Create initial set of orbs
    const totalOrbs = 20; // Slightly reduced from 25 to accommodate larger size
    
    for (let i = 0; i < totalOrbs; i++) {
      const containerWidth = orbsContainer.current.offsetWidth;
      const containerHeight = orbsContainer.current.offsetHeight;

      // Create a new orb
      const orb = document.createElement('div');
      
      // Much larger size between 3rem and 8rem
      const sizeInRem = 3 + Math.random() * 5;
      const size = sizeInRem * 16; // Convert rem to px
      
      // Random position within container
      const x = Math.random() * (containerWidth - size);
      const y = Math.random() * (containerHeight - size);
      
      // Random speed between -0.05 and 0.05 (slower for larger orbs)
      const speedX = (Math.random() - 0.5) * 0.1;
      const speedY = (Math.random() - 0.5) * 0.1;
      
      // Random color from our palette
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Determine animation direction (left-to-right or right-to-left)
      const fromLeft = i % 2 === 0;
      const initialX = fromLeft ? -size : containerWidth;
      const targetX = x;
      
      // Create gradient for "wet paint" effect
      const gradientStyles = `
        background: radial-gradient(circle at center, ${color} 30%, transparent 80%);
        box-shadow: 0 0 20px ${color}50;
      `;
      
      // Apply styles
      Object.assign(orb.style, {
        position: 'absolute',
        width: `${sizeInRem}rem`,
        height: `${sizeInRem}rem`,
        left: `${initialX}px`, // Start off-screen
        top: `${y}px`,
        borderRadius: '50%',
        filter: 'blur(15px)',
        opacity: '0',
        zIndex: '-1',
        transition: 'opacity 1.5s ease-out, left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
      
      // Apply the gradient
      orb.style.cssText += gradientStyles;
      
      orbsContainer.current.appendChild(orb);
      
      // Staggered animation based on index
      setTimeout(() => {
        // Higher opacity between 0.4 and 0.8
        const orbOpacity = 0.4 + Math.random() * 0.4;
        orb.style.opacity = orbOpacity.toString();
        orb.style.left = `${targetX}px`;
      }, i * 120); // Slightly longer stagger for visual effect
      
      // Store the orb data for animation
      orbsArray.current.push({
        element: orb,
        x: targetX,
        y,
        speedX,
        speedY,
        size,
        color,
        opacity: 0.4 + Math.random() * 0.4,
      });
    }

    // Animate orbs
    let animationFrameId: number;
    
    const animateOrbs = () => {
      if (!orbsContainer.current) return;
      
      const containerWidth = orbsContainer.current.offsetWidth;
      const containerHeight = orbsContainer.current.offsetHeight;
      
      orbsArray.current.forEach((orb) => {
        // Only start floating animation after the initial entrance animation is complete
        setTimeout(() => {
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
          
          // Update DOM element position
          orb.element.style.left = `${orb.x}px`;
          orb.element.style.top = `${orb.y}px`;
        }, totalOrbs * 120 + 600); // Start floating animation after all orbs have appeared
      });
      
      animationFrameId = requestAnimationFrame(animateOrbs);
    };
    
    // Start animation after a delay to let the entrance animation complete
    setTimeout(() => {
      animateOrbs();
    }, totalOrbs * 120 + 600);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (orbsContainer.current) {
        orbsContainer.current.innerHTML = '';
      }
    };
  }, []);

  // Only run animation once when component mounts
  useEffect(() => {
    if (stage !== "initial") return;
    
    // Start the animation sequence
    const circleTimer = setTimeout(() => setStage("circle"), 100);
    const checkTimer = setTimeout(() => setStage("check"), 600);
    const completeTimer = setTimeout(() => {
      setStage("complete");
      if (onComplete) onComplete();
    }, 2000);

    return () => {
      clearTimeout(circleTimer);
      clearTimeout(checkTimer);
      clearTimeout(completeTimer);
    };
  }, []); // Only run on mount, not when onComplete changes

  const handleReset = () => {
    if (onReset) onReset();
  };

  return (
    <div className={cn(
      "flex flex-col items-center justify-center transition-all duration-500 relative",
      className
    )}>
      {/* Orbs container */}
      <div 
        ref={orbsContainer}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 rounded-2xl"
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-center z-10">
        <div
          className={cn(
            "absolute rounded-full bg-healing-green/20 transition-all duration-500",
            stage === "initial" ? "h-0 w-0" : "h-16 w-16"
          )}
        />
        <div
          className={cn(
            "absolute rounded-full bg-healing-green/40 transition-all duration-500",
            stage === "initial" ? "h-0 w-0" : "h-12 w-12"
          )}
        />
        <div
          className={cn(
            "flex items-center justify-center rounded-full bg-healing-green transition-all duration-500",
            stage === "initial" ? "h-0 w-0" : "h-10 w-10"
          )}
        >
          {stage !== "initial" && (
            <Check 
              className={cn(
                "text-white transition-all duration-300",
                stage === "check" || stage === "complete" ? "opacity-100 scale-100" : "opacity-0 scale-0"
              )} 
            />
          )}
        </div>
      </div>
      
      <div className={cn(
        "mt-4 text-center transition-all duration-300 z-10",
        stage === "check" || stage === "complete" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      )}>
        <h4 className="text-xl font-semibold text-healing-green">Thank you!</h4>
        <p className="text-foreground/80">We'll be in touch soon</p>
        
        {stage === "complete" && (
          <Button 
            variant="outline" 
            className="mt-6 bg-white border-healing-green text-healing-green hover:bg-healing-green/10"
            onClick={handleReset}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Send another message
          </Button>
        )}
      </div>
    </div>
  );
};
