
import React from 'react';
import { Award, Users, Star, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MyPhilosophy from './MyPhilosophy';

const About = () => {
  return (
    <>
      <section id="about" className="relative py-24 overflow-hidden">
        {/* Enhanced background with healing gradient */}
        <div className="absolute inset-0 healing-gradient"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `radial-gradient(circle at 4px 4px, rgba(34, 197, 94, 0.3) 1px, transparent 0)`,
               backgroundSize: '80px 80px',
               animation: 'drift 25s ease-in-out infinite'
             }}>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-br from-healing-blue/15 to-healing-violet/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-br from-healing-orange/15 to-healing-green/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div id="my-journey" className="relative order-2 md:order-1">
              {/* Floating accent orb - hidden on mobile */}
              <div className="hidden md:block absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-healing-violet/20 to-healing-green/20 rounded-full blur-lg"></div>
              
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-healing-green/20 to-healing-blue/20 rounded-full mb-4 md:mb-6 backdrop-blur-sm border border-white/30">
                <span className="text-gray-800 font-semibold text-xs sm:text-sm">My Journey</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                Meet
                <br />
                <span className="bg-gradient-to-r from-healing-violet to-healing-green bg-clip-text text-transparent">Asli Selcuk</span>
              </h2>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed group hover:text-gray-800 transition-colors duration-300">
                  I am a lifelong student of life—deeply attuned to the subtle rhythms of nature, the
                  intricacies of human connection, and the invisible threads that shape our bodies, minds,
                  and relationships. My personal journey has led me through many meaningful roles:
                  daughter, sister, wife, mother, student, and corporate leader. Each has given me insight into
                  the delicate balance between purpose, responsibility, and personal well-being.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed group hover:text-gray-800 transition-colors duration-300">
                  It was through my own quest for inner harmony and healing that I discovered <strong className="font-bold bg-gradient-to-r from-healing-violet to-healing-green bg-clip-text text-transparent">Energy
                  Medicine</strong>—a powerful modality that goes far beyond treating surface-level symptoms. It
                  revealed a dynamic, interconnected approach to wellness, where the physical, emotional,
                  mental, and spiritual dimensions are all honored and addressed.
                </p>
              </div>
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Floating bubbles background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-2 left-4 w-4 sm:w-6 h-4 sm:h-6 bg-healing-green/20 rounded-full blur-sm animate-pulse"></div>
                  <div className="absolute top-8 right-6 w-3 sm:w-4 h-3 sm:h-4 bg-healing-blue/25 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-4 left-8 w-4 sm:w-5 h-4 sm:h-5 bg-healing-violet/20 rounded-full blur-sm animate-pulse" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-6 right-4 w-2 sm:w-3 h-2 sm:h-3 bg-healing-orange/30 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-12 left-12 w-2 h-2 bg-healing-yellow/25 rounded-full blur-sm animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <div className="absolute bottom-12 right-12 w-3 sm:w-4 h-3 sm:h-4 bg-healing-green/15 rounded-full blur-sm animate-pulse" style={{animationDelay: '2.5s'}}></div>
                </div>
                
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center flex-1">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 mr-3 sm:mr-5 flex items-center justify-center bg-white rounded-lg shadow-sm flex-shrink-0">
                      <img src="/lovable-uploads/737d3562-5e6c-4668-bdb7-fc6b822ef598.png" alt="WIID logo" className="h-6 sm:h-8 w-auto" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1">Professional Certification</p>
                      <h4 className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg leading-tight">
                        World Institute For Incurable Diseases™
                      </h4>
                    </div>
                  </div>
                  <button
                    onClick={() => window.open("https://www.wiidglobal.com/", "_blank", "noopener,noreferrer")}
                    className="flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <span className="text-xs sm:text-sm">View Credentials</span>
                    <ExternalLink className="h-3 sm:h-4 w-3 sm:w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative group">
                {/* Enhanced floating orbs around image - smaller on mobile */}
                <div className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-healing-violet/30 to-healing-orange/30 rounded-full blur-xl group-hover:scale-125 transition-all duration-700"></div>
                <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-gradient-to-br from-healing-green/30 to-healing-blue/30 rounded-full blur-xl group-hover:scale-125 transition-all duration-700" style={{animationDelay: '1s'}}></div>
                
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-healing-violet/10 to-healing-green/10 group-hover:from-healing-violet/20 group-hover:to-healing-green/20 transition-all duration-500"></div>
                  <img 
                    src="/lovable-uploads/f5460b47-f1b5-4610-8874-4832187d1093.png" 
                    alt="Asli Selcuk - Energy Healer" 
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
                
                {/* Subtle rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-healing-violet/20 via-transparent to-healing-green/20 animate-spin" style={{animationDuration: '20s'}}></div>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes drift {
            0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
            25% { transform: translateX(10px) translateY(-15px) rotate(1deg); }
            50% { transform: translateX(-5px) translateY(-10px) rotate(-1deg); }
            75% { transform: translateX(-10px) translateY(5px) rotate(0.5deg); }
          }
        `}</style>
      </section>
      
      <MyPhilosophy />
    </>
  );
};

export default About;
