
import React from 'react';
import { Button } from "@/components/ui/button";

const ServiceCard = ({ title, description, color }: { title: string; description: string; color: string }) => {
  return (
    <div className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border-t-4 border-${color} h-full`}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      <Button variant="ghost" className={`text-${color} hover:bg-${color}/10 px-0`}>
        Learn more →
      </Button>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Healing Services</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Specialized techniques to address the unique challenges faced by career mothers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Stress & Anxiety Relief" 
            description="Techniques to calm your nervous system and develop resilience to workplace and family stressors."
            color="healing-green"
          />
          
          <ServiceCard 
            title="Trauma Resolution" 
            description="Gentle approaches to process and release past traumas that may be affecting your present well-being."
            color="healing-violet"
          />
          
          <ServiceCard 
            title="Energy Healing" 
            description="Restore balance to your energy system, clearing blockages and enhancing your natural vitality."
            color="healing-blue"
          />
          
          <ServiceCard 
            title="Mindfulness Training" 
            description="Learn practical mindfulness techniques to stay centered amidst your busy professional and family life."
            color="healing-yellow"
          />
          
          <ServiceCard 
            title="Life Balance Coaching" 
            description="Create sustainable strategies for maintaining harmony between your career ambitions and personal wellbeing."
            color="healing-orange"
          />
          
          <ServiceCard 
            title="Intuitive Guidance" 
            description="Connect with your inner wisdom to make aligned decisions in both your personal and professional life."
            color="healing-green"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
