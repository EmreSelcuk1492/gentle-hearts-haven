import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  description: string;
  bgColor: string;
  stars?: number;
}

const TestimonialCard = ({ quote, description, bgColor, stars = 5 }: TestimonialProps) => {
  return (
    <div className={`${bgColor} p-8 rounded-2xl shadow-md`}>
      <div className="flex mb-4">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current text-healing-yellow" />
        ))}
      </div>
      <p className="italic text-foreground/80 mb-6">"{quote}"</p>
      <div>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 healing-gradient">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-foreground/80 font-medium mb-2 block">Client Experiences</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Healing Stories</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Hear from other professional mothers who have transformed their relationship with stress and trauma through Asli's healing practice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Aslı designed a recovery plan that sped up my post-surgery healing and kept my spirits high. Her follow-ups and genuine care made all the difference—I felt fully supported every step of the way."
            description="Chief Financial Officer"
            bgColor="bg-white/80"
          />
          
          <TestimonialCard 
            quote="I approached energy work as a skeptic, but after two sessions I felt lighter, motivated, and able to quiet the negative self-talk. Balancing science with Aslı's guidance helped me reclaim confidence and purpose."
            description="IT Professional & Small-Business Owner"
            bgColor="bg-white/80"
          />
          
          <TestimonialCard 
            quote="Focusing on breathwork and simple daily practices broke the loop I'd been stuck in. My self-awareness is higher, and I'm eager to keep learning these techniques thanks to Aslı's clear, encouraging coaching."
            description="Parent"
            bgColor="bg-white/80"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
