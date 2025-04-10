import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Brain, Leaf, Sparkles, Compass, Users } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, color }: { title: string; description: string; icon: React.ElementType; color: string }) => {
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
    <Card className="border-t-4 h-full transition-all hover:shadow-md" style={{ borderTopColor: color }}>
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
      <CardFooter>
        <Button variant="ghost" className="group p-0 h-auto font-medium" style={{ color }}>
          Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  const serviceItems = [
    {
      title: "Be Well Science® Healing",
      description: "Experience the methodical energy medicine modality that addresses root causes of physical, emotional, and mental challenges.",
      icon: Sparkles,
      color: "#C5E1A5" // healing-green
    },
    {
      title: "Mental & Emotional Balance",
      description: "Find relief from persistent anxiety, OCD, ADHD, and emotional patterns that haven't responded to conventional approaches.",
      icon: Brain,
      color: "#D1C4E9" // healing-violet
    },
    {
      title: "Physical Wellbeing Support",
      description: "Address musculoskeletal issues, heart health concerns, eye health, women's health, and post-surgery recovery support.",
      icon: Heart,
      color: "#FFCC80" // healing-orange
    },
    {
      title: "Relationship Harmony",
      description: "Discover why relationship patterns repeat and learn how to transform them through energy-based interventions.",
      icon: Users,
      color: "#B3E5FC" // healing-blue
    },
    {
      title: "Spiritual Connection",
      description: "Reconnect with your higher self, inner peace, and purpose through guided meditations and energy practices.",
      icon: Leaf,
      color: "#FFF59D" // healing-yellow
    },
    {
      title: "Personalized HealPlan",
      description: "Receive a comprehensive plan addressing all aspects of your being for meaningful, long-lasting transformation.",
      icon: Compass,
      color: "#C5E1A5" // healing-green
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <ServiceCard 
              key={service.title}
              title={service.title} 
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-healing-green text-foreground hover:bg-healing-green/90 px-8 py-6 text-lg">
            Explore My Approach
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
