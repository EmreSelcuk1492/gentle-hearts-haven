
import React from 'react';
import { Award, Users, Star, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 healing-gradient">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div id="my-journey">
            <span className="text-primary font-medium mb-2 block">My Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Asli Selcuk</h2>
            <p className="text-lg text-foreground/80 mb-6">
              I am a lifelong student of life—deeply attuned to the subtle rhythms of nature, the
              intricacies of human connection, and the invisible threads that shape our bodies, minds,
              and relationships. My personal journey has led me through many meaningful roles:
              daughter, sister, wife, mother, student, and corporate leader. Each has given me insight into
              the delicate balance between purpose, responsibility, and personal well-being.
            </p>
            
            <p className="text-lg text-foreground/80 mb-6">
              It was through my own quest for inner harmony and healing that I discovered <strong className="font-bold">Energy
              Medicine</strong>—a powerful modality that goes far beyond treating surface-level symptoms. It
              revealed a dynamic, interconnected approach to wellness, where the physical, emotional,
              mental, and spiritual dimensions are all honored and addressed.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 mr-3 flex justify-center">
                  <img src="/lovable-uploads/737d3562-5e6c-4668-bdb7-fc6b822ef598.png" alt="WIID logo" className="h-8 w-auto ml-1" />
                </div>
                <span>Certified by </span>
                <Button 
                  variant="link" 
                  className="px-1 h-auto flex items-center gap-1" 
                  onClick={() => window.open("https://www.wiidglobal.com/", "_blank", "noopener,noreferrer")}
                >
                  <span className="text-[#65bd1e] font-bold">World Institute For</span> <span className="text-[#ea384c] font-bold">Incurable Diseases</span><sup>™</sup>
                  <ExternalLink className="h-3 w-3" />
                </Button>
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
