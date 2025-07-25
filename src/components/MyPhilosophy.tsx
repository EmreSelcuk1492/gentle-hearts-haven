import React from 'react';
import { Home, Microscope, Heart, Globe, Sparkles } from 'lucide-react';

interface PhilosophyCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  gradientFrom: string;
  gradientTo: string;
}

const PhilosophyCard = ({ 
  title, 
  description, 
  icon: Icon, 
  gradientFrom,
  gradientTo
}: PhilosophyCardProps) => {
  return (
    <div className="group relative bg-white/85 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60 overflow-hidden">
      {/* Enhanced glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientFrom}/0 ${gradientTo}/0 group-hover:${gradientFrom}/10 group-hover:${gradientTo}/10 transition-all duration-500`}></div>
      
      {/* Floating orb effect */}
      <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br ${gradientFrom}/20 ${gradientTo}/20 blur-xl group-hover:scale-150 transition-all duration-700`}></div>
      
      <div className="relative p-7 flex flex-col h-full">
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradientFrom}/25 ${gradientTo}/25 mb-5 w-fit group-hover:scale-105 transition-all duration-300`}>
          <Icon className="h-7 w-7 text-gray-800" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Animated bottom accent */}
        <div className={`mt-5 h-1 w-0 group-hover:w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full transition-all duration-700 ease-out`}></div>
      </div>
      
      {/* Enhanced border glow */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${gradientFrom}/0 ${gradientTo}/0 group-hover:${gradientFrom}/15 group-hover:${gradientTo}/15 transition-all duration-500 -z-10`}></div>
    </div>
  );
};

const MyPhilosophy = () => {
  const philosophyItems = [
    {
      title: "Your Wellness Journey, Right from Home",
      description: "Step into a space designed for your calm and clarity. Through online Zoom sessions, I guide you in breathing, meditation, and biomechanical exercises—all you need is a chair, a cozy spot, and an hour just for yourself. Your wellbeing begins right where you are.",
      icon: Home,
      gradientFrom: "from-healing-green",
      gradientTo: "to-healing-blue"
    },
    {
      title: "Rooted in Science, Designed for You",
      description: "While I don't provide medical diagnoses or prescriptions, I value and integrate trusted scientific knowledge into every healing journey. Our practice complements conventional medicine, drawing inspiration from it to shape personalized, evidence-informed approaches to wellbeing. Every session is designed with care, clarity, and respect for your health's complexity.",
      icon: Microscope,
      gradientFrom: "from-healing-violet",
      gradientTo: "to-healing-orange"
    },
    {
      title: "Guided by Be Well Science, Respectful of Your Body",
      description: "I do not diagnose or prescribe, and I never touch or invade the body. Every session is rooted in Be Well Science protocols—an approach that integrates biomechanical precision with evidence-informed healing. My work complements conventional medicine, drawing from its insights to create non-invasive practices tailored to your wellbeing. Through breathwork, movement, and mindfulness, I help you reconnect with your body, gently and respectfully, all from the comfort of your home.",
      icon: Heart,
      gradientFrom: "from-healing-orange",
      gradientTo: "to-healing-green"
    },
    {
      title: "Healing Every Aspect of Your Life—Together",
      description: "For complex cases, I work alongside a global team of renowned Energy Medicine Specialists—including the Chief Healing Scientist, Master Del Pe—under the guidance of a comprehensive HEAL Plan: Healing Every Aspect of Your Life. This structured approach respects both your physical and energetic realities, offering a truly integrative path to wellness that complements conventional medicine and empowers you from the inside out.",
      icon: Globe,
      gradientFrom: "from-healing-blue",
      gradientTo: "to-healing-violet"
    }
  ];

  return (
    <section id="philosophy" className="relative py-20 overflow-hidden">
      {/* Enhanced background with healing gradient */}
      <div className="absolute inset-0 healing-gradient"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-15" 
           style={{
             backgroundImage: `radial-gradient(circle at 3px 3px, rgba(139, 92, 246, 0.4) 1px, transparent 0)`,
             backgroundSize: '60px 60px',
             animation: 'float 20s ease-in-out infinite'
           }}>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-healing-green/20 to-healing-blue/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-healing-violet/20 to-healing-orange/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Enhanced header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-healing-violet/25 to-healing-green/25 rounded-full mb-8 backdrop-blur-sm border border-white/30">
            <span className="text-gray-800 font-semibold">My Philosophy</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            How I Approach
            <br />
            <span className="text-4xl md:text-5xl bg-gradient-to-r from-healing-violet to-healing-green bg-clip-text text-transparent">Healing</span>
          </h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {philosophyItems.map((item, index) => (
            <PhilosophyCard 
              key={index}
              title={item.title} 
              description={item.description}
              icon={item.icon}
              gradientFrom={item.gradientFrom}
              gradientTo={item.gradientTo}
            />
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-healing-green via-healing-violet to-healing-orange rounded-full opacity-70"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
    </section>
  );
};

export default MyPhilosophy;