
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Target, Star, Droplet } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ServiceCardProps { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  color: string;
  onInterestClick: () => void;
  isClicked: boolean;
}

interface WaterDropProps {
  color: string;
  position: { x: number, y: number };
  onAnimationEnd: () => void;
}

const WaterDrop = ({ color, position, onAnimationEnd }: WaterDropProps) => {
  return (
    <div 
      className="fixed pointer-events-none z-50 animate-float-1"
      style={{ 
        left: position.x,
        top: position.y,
        transition: 'all 2s ease-out',
      }}
      onAnimationEnd={onAnimationEnd}
    >
      <Droplet 
        size={32} 
        fill={color} 
        color={color} 
        className="animate-bounce opacity-70"
      />
    </div>
  );
};

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color,
  onInterestClick,
  isClicked
}: ServiceCardProps) => {
  const { toast } = useToast();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showDrop, setShowDrop] = useState(false);
  
  const handleInterestClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isClicked) return;
    
    // Log interest in this service
    console.log(`User clicked on service: ${title}`);
    
    // Set position for the water drop animation
    setPosition({ x: e.clientX - 16, y: e.clientY - 16 });
    setShowDrop(true);
    
    // Show toast notification
    toast({
      title: "Thank you for your interest!",
      description: `We've noted your interest in ${title.replace("BeWell Science®", "BeWell Science")}`,
    });
    
    onInterestClick();
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
    <>
      {showDrop && (
        <WaterDrop 
          color={color} 
          position={position} 
          onAnimationEnd={() => setShowDrop(false)} 
        />
      )}
      <Card 
        className={`border-t-4 h-full transition-all ${isClicked ? 'shadow-lg opacity-90' : 'hover:shadow-lg hover:-translate-y-1'} cursor-pointer`}
        style={{ borderTopColor: color }}
        onClick={handleInterestClick}
      >
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
    </>
  );
};

const Services = () => {
  const [clickedServices, setClickedServices] = useState<{[key: string]: boolean}>({});
  
  // Load clicked services from sessionStorage on component mount
  useEffect(() => {
    const storedClicks = sessionStorage.getItem('clickedServices');
    if (storedClicks) {
      setClickedServices(JSON.parse(storedClicks));
    }
  }, []);
  
  // Update sessionStorage when clicks change
  useEffect(() => {
    if (Object.keys(clickedServices).length > 0) {
      sessionStorage.setItem('clickedServices', JSON.stringify(clickedServices));
    }
  }, [clickedServices]);

  const handleServiceClick = (title: string) => {
    if (!clickedServices[title]) {
      setClickedServices(prev => ({ ...prev, [title]: true }));
    }
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
              onInterestClick={() => handleServiceClick(service.title)}
              isClicked={!!clickedServices[service.title]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
