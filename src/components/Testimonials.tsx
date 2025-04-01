
import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  bgColor: string;
}

const TestimonialCard = ({ quote, name, role, bgColor }: TestimonialProps) => {
  return (
    <div className={`${bgColor} p-8 rounded-2xl shadow-md`}>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Healing Stories</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Hear from other professional mothers who have transformed their relationship with stress and trauma.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="After just a few sessions, I finally felt like I could breathe again. The tools I've learned have been invaluable for managing my executive role while being present for my children."
            name="Sarah J."
            role="Marketing Director & Mother of Two"
            bgColor="bg-white/80"
          />
          
          <TestimonialCard 
            quote="The past trauma work we did together has completely transformed how I show up in both my career and my family life. I'm no longer triggered by workplace stress in the same way."
            name="Michelle T."
            role="Legal Counsel & Mother of Three"
            bgColor="bg-white/80"
          />
          
          <TestimonialCard 
            quote="I was skeptical at first, but the energy healing sessions have given me a sense of peace I hadn't experienced in years. I'm more productive at work and more patient with my kids."
            name="Lisa R."
            role="Financial Analyst & Single Mom"
            bgColor="bg-white/80"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
