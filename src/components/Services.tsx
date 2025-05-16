import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Target, Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import confetti from 'canvas-confetti';

interface ServiceCardProps { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  color: string;
  onInterestClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  isClicked: boolean;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color,
  onInterestClick,
  isClicked 
}: ServiceCardProps) => {
  const { toast } = useToast();
  
  const handleInterestClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Log interest in this service
    console.log(`User clicked on service: ${title}`);
    
    // Show toast notification
    toast({
      title: "Thank you for your interest!",
      description: `We've noted your interest in ${title.replace("BeWell Science®", "BeWell Science")}`,
    });

    /* Confetti effect temporarily disabled
    // Only trigger confetti if we're selecting (not deselecting)
    if (!isClicked) {
      // Get the card's position
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.right) / 2 / window.innerWidth;
      const y = (rect.top + rect.bottom) / 2 / window.innerHeight;

      // Trigger confetti with the service's color
      const end = Date.now() + 300; // Reduced from 1000ms to 300ms
      const colors = [color];

      (function frame() {
        confetti({
          particleCount: 2, // Reduced from 3 to 2
          angle: 60,
          spread: 50, // Reduced from 70 to 50
          origin: { x, y },
          colors: colors,
          gravity: 1, // Increased from 0.8 to 1 for faster fall
          scalar: 1, // Reduced from 1.2 to 1
          ticks: 100 // Reduced from 200 to 100
        });
        confetti({
          particleCount: 2, // Reduced from 3 to 2
          angle: 120,
          spread: 50, // Reduced from 70 to 50
          origin: { x, y },
          colors: colors,
          gravity: 1, // Increased from 0.8 to 1 for faster fall
          scalar: 1, // Reduced from 1.2 to 1
          ticks: 100 // Reduced from 200 to 100
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }
    */
    
    onInterestClick(e);
  };

  // Add special styling for BeWell Science
  const formattedTitle = title.includes("BeWell Science") ? (
    <>
      <span className="text-black font-bold">BeWell Science®</span>
      {title.replace("BeWell Science®", "")}
    </>
  ) : (
    title
  );

  return (
    <Card 
      className={`border-t-4 h-full transition-all ${isClicked ? 'shadow-lg opacity-90 translate-y-2 bg-gradient-to-b from-white to-gray-100' : 'hover:shadow-lg hover:-translate-y-1'} cursor-pointer relative overflow-hidden`}
      style={{ 
        borderTopColor: color,
        boxShadow: isClicked ? `0 4px 12px ${color}40` : ''
      }}
      onClick={handleInterestClick}
    >
      {isClicked && (
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundColor: color }}
        />
      )}
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center" style={{ backgroundColor: `${color}30` }}>
          <Icon className="w-6 h-6" style={{ color: color }} />
        </div>
        <CardTitle className="text-xl">{formattedTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70">
          {description.includes("BeWell Science") ? (
            <>
              {description.split("BeWell Science").map((part, index) => {
                return index === 0 ? (
                  <React.Fragment key={index}>{part}</React.Fragment>
                ) : (
                  <React.Fragment key={index}>
                    <span className="text-black font-bold">BeWell Science</span>
                    {part}
                  </React.Fragment>
                );
              })}
            </>
          ) : (
            description
          )}
        </p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  // Load selected service from sessionStorage on component mount
  useEffect(() => {
    const storedService = sessionStorage.getItem('selectedService');
    if (storedService) {
      setSelectedService(storedService);
    }
  }, []);
  
  // Update sessionStorage when selection changes
  useEffect(() => {
    if (selectedService) {
      sessionStorage.setItem('selectedService', selectedService);
    } else {
      sessionStorage.removeItem('selectedService');
    }
  }, [selectedService]);

  const handleServiceClick = (title: string, e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedService(prev => prev === title ? null : title);
  };

  const serviceItems = [
    {
      title: "BeWell Science® Healing Sessions",
      description: "Root-cause energy medicine that clears physical, emotional, and mental blockages. Ideal for pain that lingers despite treatment, chronic stress, hormonal shifts, or \"mystery\" symptoms that defy conventional tests.",
      icon: Sparkles,
      color: "#C5E1A5" // healing-green
    },
    {
      title: "Focused Recovery Tracks",
      description: "Short, goal-oriented packages for a single challenge—e.g., post-surgery healing, anxiety & OCD relief, musculoskeletal issues, or relationship harmony. Combines breathwork, energy balancing, and simple daily practices.",
      icon: Target,
      color: "#D1C4E9" // healing-violet
    },
    {
      title: "Whole-Life HealPlan",
      description: "A comprehensive, team-supported roadmap that addresses body, energy, emotions, mind, and spirit. Includes customized protocols, guided meditations, and ongoing check-ins for deep, lasting transformation.",
      icon: Star,
      color: "#FFCC80" // healing-orange
    },
  ];
  
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">My Offerings</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Conventional Approaches</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            When conventional methods haven't provided relief, explore healing techniques that address the energy behind your challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <ServiceCard 
              key={service.title}
              title={service.title} 
              description={service.description}
              icon={service.icon}
              color={service.color}
              onInterestClick={(e) => handleServiceClick(service.title, e)}
              isClicked={selectedService === service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
