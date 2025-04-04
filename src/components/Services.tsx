
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Brain, Leaf, Sparkles, Compass, Users } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, color }: { title: string; description: string; icon: React.ElementType; color: string }) => {
  return (
    <Card className="border-t-4 h-full transition-all hover:shadow-md" style={{ borderTopColor: color }}>
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center" style={{ backgroundColor: `${color}30` }}>
          <Icon className="w-6 h-6" style={{ color: color }} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70">{description}</p>
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
      title: "Energy Healing Sessions",
      description: "Address physical, emotional, and mental imbalances through tailored energy healing techniques customized for your unique needs.",
      icon: Sparkles,
      color: "#C5E1A5" // healing-green
    },
    {
      title: "Stress & Anxiety Relief",
      description: "Learn practical techniques to calm your nervous system and develop resilience to workplace and family stressors.",
      icon: Brain,
      color: "#D1C4E9" // healing-violet
    },
    {
      title: "Trauma Resolution",
      description: "Gentle approaches to process and release past traumas that may be affecting your present well-being and relationships.",
      icon: Heart,
      color: "#FFCC80" // healing-orange
    },
    {
      title: "Life Balance Coaching",
      description: "Create sustainable strategies for maintaining harmony between your career ambitions and personal wellbeing.",
      icon: Compass,
      color: "#B3E5FC" // healing-blue
    },
    {
      title: "Mindfulness Training",
      description: "Learn practical mindfulness techniques to stay centered amidst your busy professional and family life.",
      icon: Leaf,
      color: "#FFF59D" // healing-yellow
    },
    {
      title: "Workshops & Group Sessions",
      description: "Join specialized group programs designed specifically for professional mothers seeking community healing.",
      icon: Users,
      color: "#C5E1A5" // healing-green
    },
  ];
  
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">Our Offerings</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Healing Services</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Specialized techniques and programs to address the unique challenges faced by career mothers.
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
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
