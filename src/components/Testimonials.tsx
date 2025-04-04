
import React from 'react';
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  bgColor: string;
  stars?: number;
}

const TestimonialCard = ({ quote, name, role, bgColor, stars = 5 }: TestimonialProps) => {
  return (
    <div className={`${bgColor} p-8 rounded-2xl shadow-md`}>
      <div className="flex mb-4">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current text-healing-yellow" />
        ))}
      </div>
      <p className="italic text-foreground/80 mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-foreground/70">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 healing-gradient">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">Client Experiences</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Healing Stories</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Hear from other professional mothers who have transformed their relationship with stress and trauma through Asli's healing practice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="After just a few sessions with Asli, I finally felt like I could breathe again. The tools I've learned have been invaluable for managing my executive role while being present for my children."
            name="Sarah J."
            role="Marketing Director & Mother of Two"
            bgColor="bg-white/80"
          />
          
          <TestimonialCard 
            quote="The past trauma work we did together has completely transformed how I show up in both my career and my family life. Asli's guidance helped me overcome triggers that used to impact my workplace performance."
            name="Michelle T."
            role="Legal Counsel & Mother of Three"
            bgColor="bg-white/80"
          />
          
          <TestimonialCard 
            quote="I was skeptical at first, but Asli's energy healing sessions have given me a sense of peace I hadn't experienced in years. I'm more productive at work and more patient with my kids."
            name="Lisa R."
            role="Financial Analyst & Single Mom"
            bgColor="bg-white/80"
          />
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" className="border-healing-violet text-foreground hover:bg-healing-violet/10 px-8 py-6 text-lg">
            Read More Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
