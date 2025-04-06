
import { Check, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
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

  useEffect(() => {
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
  }, [onComplete]);

  const handleReset = () => {
    if (onReset) onReset();
  };

  return (
    <div className={cn(
      "flex flex-col items-center justify-center transition-all duration-500",
      className
    )}>
      <div className="relative flex items-center justify-center">
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
        "mt-4 text-center transition-all duration-300",
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
