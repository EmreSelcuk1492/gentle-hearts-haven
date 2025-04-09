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

  useEffect(() => {
    if (!orbsContainer.current) return;

    orbsContainer.current.innerHTML = '';
    orbsArray.current = [];

    const colors = [
      '#C5E1A5', // healing-green
      '#FFCC80', // healing-orange
      '#D1C4E9', // healing-violet
      '#FFF59D', // healing-yellow
      '#B3E5FC'  // healing-blue
    ];

    const totalOrbs = 24;

    for (let i = 0; i < totalOrbs; i++) {
      const containerWidth = orbsContainer.current.offsetWidth;
      const containerHeight = orbsContainer.current.offsetHeight;

      const orb = document.createElement('div');
      
      const sizeInRem = 2 + Math.random() * 5;
      const size = sizeInRem * 16;

      const gridCols = 4;
      const gridRows = 6;
      const colWidth = containerWidth / gridCols;
      const rowHeight = containerHeight / gridRows;
      
      const colIndex = i % gridCols;
      const rowIndex = Math.floor(i / gridCols) % gridRows;
      
      const baseX = colIndex * colWidth;
      const baseY = rowIndex * rowHeight;
      const x = baseX + (Math.random() * 0.7 * colWidth);
      const y = baseY + (Math.random() * 0.7 * rowHeight);
      
      const speedX = (Math.random() - 0.5) * 0.1;
      const speedY = (Math.random() - 0.5) * 0.1;
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const entrySide = i % 4;
      let initialX = x;
      let initialY = y;
      
      switch (entrySide) {
        case 0:
          initialX = -size;
          break;
        case 1:
          initialX = containerWidth;
          break;
        case 2:
          initialY = -size;
          break;
        case 3:
          initialY = containerHeight;
          break;
      }
      
      const gradientStyles = `
        background: radial-gradient(circle at center, ${color} 30%, transparent 80%);
        box-shadow: 0 0 20px ${color}50;
      `;
      
      Object.assign(orb.style, {
        position: 'absolute',
        width: `${sizeInRem}rem`,
        height: `${sizeInRem}rem`,
        left: `${initialX}px`, 
        top: `${initialY}px`,
        borderRadius: '50%',
        filter: 'blur(15px)',
        opacity: '0',
        zIndex: '-1',
        transition: 'opacity 1.5s ease-out, left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
      
      orb.style.cssText += gradientStyles;
      
      orbsContainer.current.appendChild(orb);
      
      setTimeout(() => {
        const orbOpacity = 0.4 + Math.random() * 0.4;
        orb.style.opacity = orbOpacity.toString();
        orb.style.left = `${x}px`;
        orb.style.top = `${y}px`;
      }, i * 110);
      
      orbsArray.current.push({
        element: orb,
        x,
        y,
        speedX,
        speedY,
        size,
        color,
        opacity: 0.4 + Math.random() * 0.4,
      });
    }

    let animationFrameId: number;
    
    const animateOrbs = () => {
      if (!orbsContainer.current) return;
      
      const containerWidth = orbsContainer.current.offsetWidth;
      const containerHeight = orbsContainer.current.offsetHeight;
      
      orbsArray.current.forEach((orb) => {
        setTimeout(() => {
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
          
          orb.element.style.left = `${orb.x}px`;
          orb.element.style.top = `${orb.y}px`;
        }, totalOrbs * 110 + 600);
      });
      
      animationFrameId = requestAnimationFrame(animateOrbs);
    };
    
    setTimeout(() => {
      animateOrbs();
    }, totalOrbs * 110 + 600);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (orbsContainer.current) {
        orbsContainer.current.innerHTML = '';
      }
    };
  }, []);

  useEffect(() => {
    if (stage !== "initial") return;
    
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
  }, []);

  const handleReset = () => {
    if (onReset) onReset();
  };

  return (
    <div className={cn(
      "flex flex-col items-center justify-center transition-all duration-500 relative",
      "bg-healing-green/20",
      className
    )}>
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-healing-green/40 to-transparent" />
      
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
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-healing-green/40 to-transparent" />
    </div>
  );
};
