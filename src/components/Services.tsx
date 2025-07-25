import React, { useState } from 'react';
import { Sparkles, Zap, Heart, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  details: string[];
  icon: React.ElementType;
  gradientFrom: string;
  gradientTo: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard = ({ 
  title, 
  description, 
  details,
  icon: Icon, 
  gradientFrom,
  gradientTo,
  isExpanded,
  onToggle
}: ServiceCardProps) => {
  return (
    <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 overflow-hidden">
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradientFrom}/0 ${gradientTo}/0 group-hover:${gradientFrom}/5 group-hover:${gradientTo}/5 transition-all duration-300`}></div>
      
      {/* Header */}
      <div className="relative p-8">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradientFrom}/20 ${gradientTo}/20 mb-6`}>
          <Icon className={`h-8 w-8 text-gray-700`} />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Toggle button */}
        <button
          onClick={onToggle}
          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200`}
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          {isExpanded ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4" />
          )}
        </button>
      </div>
      
      {/* Expandable details */}
      <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-8 pb-8">
          <div className="border-t border-gray-200/50 pt-6">
            <ul className="space-y-4">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} mt-2 mr-4 flex-shrink-0`}></div>
                  <span className="text-gray-600 leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Subtle border glow */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${gradientFrom}/0 ${gradientTo}/0 group-hover:${gradientFrom}/10 group-hover:${gradientTo}/10 transition-all duration-300 -z-10`}></div>
    </div>
  );
};

const Services = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const handleToggle = (title: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const serviceItems = [
    {
      title: "Be In Shape Rescue Session",
      description: "A focused online session designed to rescue your posture, breath, and both biomechanical and energetic flow.",
      details: [
        "Gently supports you through moments of physical fatigue, mental fog, and emotional heaviness",
        "Anchored in Be Well Science protocols—non-invasive, science-informed methods for safe restoration",
        "Encourages deep reconnection with your body's natural rhythm, vitality, and internal clarity",
        "All you need: a chair, a quiet space, and a willingness to reset, breathe, and feel grounded",
        "Ideal between routines, or anytime you need to realign body and mind for renewed focus and ease"
      ],
      icon: Zap,
      gradientFrom: "from-healing-green",
      gradientTo: "to-healing-blue"
    },
    {
      title: "Mini Reset — 5 Sessions",
      description: "Focused support for a single, acute challenge. Ideal for situations like post-surgery healing, temporary anxiety or OCD flare-ups, or minor musculoskeletal strain.",
      details: [
        "Combines breathwork, energy balancing, and daily micro-practices",
        "Helps establish clarity, rhythm, and short-term relief",
        "Non-invasive and science-informed care that respects body and mind"
      ],
      icon: RefreshCw,
      gradientFrom: "from-healing-violet",
      gradientTo: "to-healing-orange"
    },
    {
      title: "Deep Dive — 10 Sessions",
      description: "Designed for deeper, more layered issues or anticipated transitions. Best for relationship dynamics, long-term emotional patterns, chronic physical tension, or life-altering events.",
      details: [
        "Includes expanded guidance, integration strategies, and customized healing sequences",
        "Rooted in Be Well Science protocols and supported by energetic insights",
        "Offers time and space to truly shift, stabilize, and harmonize"
      ],
      icon: Heart,
      gradientFrom: "from-healing-orange",
      gradientTo: "to-healing-green"
    },
    {
      title: "HEAL Plan – Custom Made Plan",
      description: "For those facing profound challenges—incurable diseases, major surgeries, psychosomatic disorders, catastrophes, addiction, and deep life transitions—this plan provides an integrative path toward restoration, resilience, and rebalance.",
      details: [
        "Collaborative Expertise: Hand-selected team matched to your unique condition",
        "Energetic Precision: Life cycle mapping to align timing, choices, and healing strategies",
        "Multidimensional Insight: Addressing biological and psychosomatic layers of suffering",
        "Crisis Support: Designed for urgent, heavy, or seemingly irreversible moments",
        "Gentle Yet Potent Methods: Non-invasive, body-respecting techniques with energetic mastery",
        "Personalized Protocols: Integrative pathways informed by science, intuition, and lived wisdom"
      ],
      icon: Sparkles,
      gradientFrom: "from-healing-blue",
      gradientTo: "to-healing-violet"
    },
  ];
  
  return (
    <section id="services" className="relative py-12 overflow-hidden">
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
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-healing-blue/20 to-healing-orange/20 rounded-full mb-6">
            <span className="text-gray-800 font-medium text-sm">My Offerings</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Beyond Conventional
            <br />
            <span className="text-4xl md:text-5xl">Approaches</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            When conventional methods haven't provided relief, explore healing techniques that address the energy behind your challenges.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {serviceItems.map((service) => (
            <ServiceCard 
              key={service.title}
              title={service.title} 
              description={service.description}
              details={service.details}
              icon={service.icon}
              gradientFrom={service.gradientFrom}
              gradientTo={service.gradientTo}
              isExpanded={expandedCards[service.title] || false}
              onToggle={() => handleToggle(service.title)}
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

export default Services;
