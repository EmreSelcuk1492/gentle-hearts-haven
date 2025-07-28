import React from 'react';
import { Brain, Heart, Activity, Users2, Shield, Flower2, Sparkles, LifeBuoy, ExternalLink, ArrowRight } from 'lucide-react';

const CertificationPractice = () => {
  const specialties = [
    { icon: Brain, label: "Mental Health", color: "text-purple-600" },
    { icon: Activity, label: "Burnout & Stress", color: "text-orange-600" },
    { icon: Users2, label: "Life Challenges", color: "text-blue-600" },
    { icon: Shield, label: "Cancer Support", color: "text-green-600" },
    { icon: Heart, label: "Physical Health", color: "text-red-500" },
    { icon: Flower2, label: "Women's Health", color: "text-pink-500" },
    { icon: Sparkles, label: "Spiritual Support", color: "text-indigo-500" },
    { icon: LifeBuoy, label: "Family Care", color: "text-teal-500" }
  ];

  return (
    <section id="certification-practice" className="relative py-12 overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 healing-gradient"></div>
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(197, 225, 165, 0.3) 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      <div className="relative container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left side - Content (takes 3 columns) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Header section */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-healing-green/20 to-healing-violet/20 rounded-full">
                <span className="text-gray-800 font-medium text-sm">My Certification & Practice</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Energy Medicine
                <br />
                <span className="text-4xl md:text-5xl bg-gradient-to-r from-healing-violet to-healing-green bg-clip-text text-transparent">Specialist</span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                I am a certified Energy Medicine Specialist with the{' '}
                <button 
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-red-500 text-white rounded-lg font-bold text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("https://www.wiidglobal.com/", "_blank", "noopener,noreferrer")}
                >
                  World Institute For Incurable Diseases™
                  <ExternalLink className="h-3 w-3" />
                </button>
                , an organization that applies the transformative{' '}
                <span className="font-semibold" style={{color: '#8E4EC6'}}>BeWell Science™</span> method.
              </p>
              
              <p>
                This groundbreaking system was founded by{' '}
                <strong className="text-gray-900">Master Del Pe</strong>, a globally
                respected thought leader whose work spans decades and continents, revolutionizing
                integrative healing and spiritual science.
              </p>
              
              <p>
                Each healing journey is unique. I offer a compassionate, personalized approach—drawing 
                on energetic alignment, intuitive insight, and deep listening—to help individuals 
                reconnect with their vitality and achieve holistic wellness across all dimensions of being.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button 
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-healing-green via-healing-violet to-healing-orange text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-healing-green/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                onClick={() => window.location.href = '/origins'}
              >
                Learn More About Our Origins
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          {/* Right side - Specialties grid (takes 2 columns) */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-healing-violet/30 to-healing-blue/30 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-healing-green/20 to-healing-orange/20 rounded-3xl transform -rotate-2"></div>
              
              {/* Specialties grid */}
              <div className="relative grid grid-cols-2 gap-6 p-8">
                {specialties.map((specialty, index) => {
                  const Icon = specialty.icon;
                  return (
                    <div 
                      key={index}
                      className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-white/50"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-healing-green/0 via-healing-violet/0 to-healing-orange/0 group-hover:from-healing-green/10 group-hover:via-healing-violet/10 group-hover:to-healing-orange/10 transition-all duration-500"></div>
                      
                      <div className="relative flex flex-col items-center text-center space-y-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-white group-hover:to-gray-50 transition-all duration-300`}>
                          <Icon className={`h-8 w-8 ${specialty.color} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                          {specialty.label}
                        </p>
                      </div>
                      
                      {/* Subtle border glow */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-healing-green/0 via-healing-violet/0 to-healing-orange/0 group-hover:from-healing-green/20 group-hover:via-healing-violet/20 group-hover:to-healing-orange/20 transition-all duration-500 -z-10"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-healing-green via-healing-violet to-healing-orange rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPractice;