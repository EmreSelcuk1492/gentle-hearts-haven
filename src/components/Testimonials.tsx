import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface TestimonialProps {
  name: string;
  title: string;
  summary: string;
  fullTestimonial: string;
  gradientFrom: string;
  gradientTo: string;
  isExpanded: boolean;
  onToggle: () => void;
  stars?: number;
}

const TestimonialCard = ({ 
  name, 
  title, 
  summary, 
  fullTestimonial, 
  gradientFrom, 
  gradientTo, 
  isExpanded, 
  onToggle, 
  stars = 5 
}: TestimonialProps) => {
  return (
    <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 overflow-hidden">
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradientFrom}/0 ${gradientTo}/0 group-hover:${gradientFrom}/5 group-hover:${gradientTo}/5 transition-all duration-300`}></div>
      
      {/* Header */}
      <div className="relative p-8">
        <div className="flex mb-4">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-healing-yellow" />
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </h3>
        
        <p className="text-sm text-gray-600 font-medium mb-4">
          {title}
        </p>
        
        <p className="text-gray-600 leading-relaxed mb-6 italic">
          "{summary}"
        </p>
        
        {/* Toggle button */}
        <button
          onClick={onToggle}
          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200`}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
          {isExpanded ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4" />
          )}
        </button>
      </div>
      
      {/* Expandable full testimonial */}
      <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-8 pb-8">
          <div className="border-t border-gray-200/50 pt-6">
            <p className="text-gray-600 leading-relaxed italic whitespace-pre-line">
              "{fullTestimonial}"
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle border glow */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${gradientFrom}/0 ${gradientTo}/0 group-hover:${gradientFrom}/10 group-hover:${gradientTo}/10 transition-all duration-300 -z-10`}></div>
    </div>
  );
};

const Testimonials = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const handleToggle = (name: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const testimonialItems = [
    {
      name: "Fortune 500 Executive",
      title: "MO",
      summary: "Aslı crafted a personalized healing program that addressed both my physical recovery and emotional needs during foot surgery. Her expertise and dedication made a significant difference in my healing journey.",
      fullTestimonial: `I am incredibly grateful to Aslı for her invaluable support during my foot surgery recovery. From the very beginning, Aslı demonstrated a remarkable ability to listen attentively to my concerns and truly understand my needs. She crafted a personalized healing program that not only addressed my physical recovery but also provided me with the emotional encouragement I needed throughout the process. Her expertise, responsiveness, and dedication were exceptional, making a significant difference in my healing journey.

Even after our program concluded, Aslı continued to follow up and offer her thoughtful guidance, showcasing her genuine commitment to her clients' well-being. Her professionalism, empathy, and tireless efforts helped me navigate what could have been a challenging time with confidence and ease. I highly recommend Aslı to anyone seeking a compassionate and skilled healer who goes above and beyond to support their recovery.`,
      gradientFrom: "from-healing-green",
      gradientTo: "to-healing-blue"
    },
    {
      name: "Real Estate Professional",
      title: "AD",
      summary: "After an incredible energy healing session with Asli, I felt lighter, more centered, and deeply uplifted. She has such a calming and intuitive presence that made it easy to fully open up to the experience.",
      fullTestimonial: `I had an incredible energy healing session with Asli yesterday, and I'm still feeling the positive effects. She has such a calming and intuitive presence—it felt easy to relax and fully open up to the experience. By the end of our session, I felt lighter, more centered, and deeply uplifted. There was a genuine sense of inner connection that I haven't felt in a while. Asli has a beautiful gift, and I'm so grateful to have found her. Highly recommend to anyone seeking energetic clarity and emotional renewal.`,
      gradientFrom: "from-healing-violet",
      gradientTo: "to-healing-orange"
    },
    {
      name: "Retired Corporate Professional and Mother",
      title: "ET",
      summary: "Despite initial doubts about energy healing, working with Asli helped me break out of a personal loop. Learning to focus and breathe properly showed me how effective these practices were for my personal growth.",
      fullTestimonial: `Before starting the sessions with Asli, I had doubts about energy healing, but a part of me was telling me to believe. I felt I was in a loop with myself and couldn't break it, so I decided to start working with Asli.

During these sessions, as I learned to focus, breathe properly, and applied these practices myself, I witnessed how effective they were. This made me want to learn these techniques even further.

In this process, Asli provided very useful guidance by openly sharing the principles of this organization and what I needed to do for this path.

This experience shows the importance of being open-minded and having the opportunity to try, even if there are initial doubts about topics like energy healing. The presence of a supportive guide in your personal journey is also invaluable. The increase in my self-awareness and the desire to learn these techniques are very positive developments for my personal growth.`,
      gradientFrom: "from-healing-orange",
      gradientTo: "to-healing-green"
    },
    {
      name: "Small Business Owner",
      title: "AK",
      summary: "As an engineer grounded in science, I was skeptical about energy healing. But after losing my job, my mom, and facing life's challenges, Asli's guidance helped me rediscover my worth and transform my outlook on life.",
      fullTestimonial: `As an engineer, I've always been grounded in positive science—believing in the logical, measurable, and tangible. But life has a way of humbling us, revealing that healing isn't always a straight path and that some journeys need a touch of the spiritual. For me, that journey began after a series of heartbreaking challenges.

COVID turned life upside down; I lost my job at a downtown Seattle start-up, a role I truly loved and poured my soul into. Soon after, I faced the unbearable loss of my mom, navigated the emotional and physical upheaval of menopause, and watched our firstborn leave for college—a moment that, while filled with pride, left me grappling with a profound sense of emptiness. Amidst it all, the job search was relentless, and self-doubt began whispering cruel thoughts: Am I even worthy of a job anymore?

Life felt unbearably heavy, and I found myself in a dark place I couldn't climb out of. That's when Asli introduced me to energy healing, and extended her hand to guide me through this difficult chapter.

At first, I was skeptical—how could something so intangible help someone like me, rooted firmly in the tangible? But after just two sessions, I began to notice a profound shift. It wasn't just about feeling better physically; it was as though my spirit was awakening from a long, heavy slumber. Each session felt like a miracle, a gentle nudge to stand taller, take action, and rediscover the light within me.

Through their guidance, I learned that the little voice in our heads—the one constantly whispering negativity—could be silenced. I could choose to replace that voice with kindness, strength, and self-belief. Slowly but surely, I became the architect of my own healing, reconnecting with my passion, energy, and sense of worth.

Today, I'm in a completely different place, both mentally and physically. Energy healing has shown me that sometimes the answers we seek go beyond logic, and embracing a balance of science and spirituality can unlock incredible transformations. It's a journey I'll forever be grateful for.`,
      gradientFrom: "from-healing-blue",
      gradientTo: "to-healing-violet"
    }
  ];

  return (
    <section id="testimonials" className="relative py-12 overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 healing-gradient"></div>
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(179, 229, 252, 0.3) 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      <div className="relative container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-healing-green/20 to-healing-violet/20 rounded-full mb-6">
            <span className="text-gray-800 font-medium text-sm">Client Experiences</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Healing
            <br />
            <span className="text-4xl md:text-5xl">Stories</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Real transformations from clients who have experienced the power of energy healing and holistic wellness practices.
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonialItems.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.name}
              name={testimonial.name}
              title={testimonial.title}
              summary={testimonial.summary}
              fullTestimonial={testimonial.fullTestimonial}
              gradientFrom={testimonial.gradientFrom}
              gradientTo={testimonial.gradientTo}
              isExpanded={expandedCards[testimonial.name] || false}
              onToggle={() => handleToggle(testimonial.name)}
            />
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-healing-green via-healing-violet to-healing-orange rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
