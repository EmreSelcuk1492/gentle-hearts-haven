
import React from 'react';
import { Award, Users, Star } from 'lucide-react';

const FloatingWord = ({ word, color, delay = 0 }: { word: string; color: string; delay?: number }) => {
  return (
    <span 
      className="relative inline-block font-semibold mx-1"
      style={{ 
        color, 
        animation: `float-${Math.floor(Math.random() * 5) + 1} ${30 + Math.random() * 15}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        textShadow: `0 2px 4px ${color}40`
      }}
    >
      {word}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 healing-gradient">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium mb-2 block">My Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Asli Selcuk</h2>
            <p className="text-lg text-foreground/80 mb-6">
              I am an observer of life, of humans, of relationships, of families, of patterns, and challenges. 
              With backgrounds as a CPA and MSc in Finance, I've supported multinational corporations before 
              discovering my passion for energy healing through my own personal health journey.
            </p>
            
            <p className="text-lg text-foreground/80 mb-6">
              After struggling with hormonal challenges, disturbed sleep, and emotional obstacles that wouldn't 
              resolve through conventional means, I discovered the Be Well Science® Energy Medicine Modality. 
              The transformation in my own life led me to become a certified practitioner, dedicated to helping 
              others find similar breakthroughs.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-healing-orange" />
                <span>Certified Be Well Science® Energy Medicine Practitioner</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-healing-blue" />
                <span>Backed by the World Institute For Incurable Diseases team</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-healing-yellow" />
                <span>Experience with heart health, ADD, OCD, PTSD, and more</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-healing-violet/30 shadow-xl">
              <img 
                src="/lovable-uploads/cc0bcde2-c47e-4c59-b9bd-871977f5ec20.png" 
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
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto relative">
            We are energetic beings that have a physical form. What we do, what we think, and who we engage with 
            day in and day out determines our future. I believe that healing involves addressing all aspects of your being:
            <span className="block my-6 relative min-h-[60px] px-4">
              <FloatingWord word="Physical" color="#C5E1A5" delay={0} />
              <FloatingWord word="Energetic" color="#FFCC80" delay={1} />
              <FloatingWord word="Emotional" color="#D1C4E9" delay={0.5} />
              <FloatingWord word="Mental" color="#B3E5FC" delay={1.5} />
              <FloatingWord word="Spiritual" color="#FFF59D" delay={2} />
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-green/30 flex items-center justify-center mb-4">
              <div className="h-7 w-7 text-healing-green flex items-center justify-center">❤️</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Beyond <FloatingWord word="Physical" color="#C5E1A5" /></h3>
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
              Treating you as a <FloatingWord word="Physical" color="#C5E1A5" />, <FloatingWord word="Energetic" color="#FFCC80" />, <FloatingWord word="Emotional" color="#D1C4E9" />, <FloatingWord word="Mental" color="#B3E5FC" />, and <FloatingWord word="Spiritual" color="#FFF59D" /> being for complete healing.
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
