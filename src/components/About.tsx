
import React from 'react';
import { Award, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 healing-gradient">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div id="my-journey">
            <span className="text-primary font-medium mb-2 block">My Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Asli Selcuk</h2>
            <p className="text-lg text-foreground/80 mb-6">
              I am an observer of life, of humans, of relationships, of families, of patterns, and challenges. 
              With backgrounds as a CPA and MSc in Finance, I've supported multinational corporations before 
              discovering my passion for energy healing through my own personal health journey.
            </p>
            
            <p className="text-lg text-foreground/80 mb-6">
              After struggling with hormonal challenges, disturbed sleep, and emotional obstacles that wouldn't 
              resolve through conventional means, I discovered the <span className="text-black font-bold">BeWell Science®</span> Energy Medicine Modality. 
              The transformation in my own life led me to become a certified practitioner, dedicated to helping 
              others find similar breakthroughs.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 mr-3 flex justify-center">
                  <img src="/lovable-uploads/737d3562-5e6c-4668-bdb7-fc6b822ef598.png" alt="WIID logo" className="h-8 w-auto ml-1" />
                </div>
                <span>Certified by <a href="https://www.wiidglobal.com/" target="_blank" rel="noopener noreferrer" className="hover:underline"><span className="text-[#65bd1e] font-bold">World Institute For</span> <span className="text-[#ea384c] font-bold">Incurable Diseases</span><sup>™</sup></a></span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-healing-violet/30 shadow-xl">
              <img 
                src="/lovable-uploads/f5460b47-f1b5-4610-8874-4832187d1093.png" 
                alt="Asli Selcuk - Energy Healer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Core Values Section */}
      <div className="container mx-auto px-6 md:px-12 mt-20">
        <div className="text-center mb-12">
          <span className="text-primary font-medium mb-2 block">My Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding Energy</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We are energetic beings that have a physical form. What we do, what we think, and who we engage with 
            day in and day out determines our future. I believe that healing involves addressing all aspects of your being.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-green/30 flex items-center justify-center mb-4">
              <div className="h-7 w-7 text-healing-green flex items-center justify-center">❤️</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Beyond Physical</h3>
            <p className="text-foreground/70">
              Addressing what lies beyond our five senses to reach the root causes of persistent challenges.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-orange/30 flex items-center justify-center mb-4">
              <div className="h-7 w-7 text-healing-orange flex items-center justify-center">🌿</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Whole Being Approach</h3>
            <p className="text-foreground/70">
              Treating you as a complete being for whole-person healing and transformation.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-blue/30 flex items-center justify-center mb-4">
              <div className="h-7 w-7 text-healing-blue flex items-center justify-center">✨</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Gentle Transformation</h3>
            <p className="text-foreground/70">
              Providing methodical, tested protocols while connecting you to inner peace and your higher self.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-violet/30 flex items-center justify-center mb-4">
              <div className="h-7 w-7 text-healing-violet flex items-center justify-center">🌱</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-foreground/70">
              For complex cases, I work with the Institute's specialized team to deliver optimal results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
