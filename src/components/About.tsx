
import React from 'react';
import { Award, Users, Star } from 'lucide-react';
import { Avatar } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20 healing-gradient">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium mb-2 block">About the Practitioner</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Asli Selcuk</h2>
            <p className="text-lg text-foreground/80 mb-6">
              A licensed energy medicine practitioner with over 15 years of experience in holistic healing, 
              dedicated to guiding individuals toward balance and self-empowerment through compassionate 
              and personalized care.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-healing-orange" />
                <span>Certified by International Association of Energy Healers</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-healing-blue" />
                <span>Trained under renowned experts in the field</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-healing-yellow" />
                <span>Specialized in trauma healing for professional mothers</span>
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
          <span className="text-primary font-medium mb-2 block">Our Approach</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Our healing practice is built on fundamental principles that ensure every client 
            receives the highest quality care and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-green/30 flex items-center justify-center mb-4">
              <div className="h-7 w-7 text-healing-green flex items-center justify-center">❤️</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
            <p className="text-foreground/70">
              Judgment-free space where you can express your challenges and find gentle guidance.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-orange/30 flex items-center justify-center mb-4">
              <div className="h-7 w-7 text-healing-orange flex items-center justify-center">🌿</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Holistic Methods</h3>
            <p className="text-foreground/70">
              Techniques addressing the mind, body, and spirit connection for complete balance.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-blue/30 flex items-center justify-center mb-4">
              <div className="h-7 w-7 text-healing-blue flex items-center justify-center">✨</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lasting Results</h3>
            <p className="text-foreground/70">
              Not just temporary relief but profound healing that transforms your relationship with stress.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-violet/30 flex items-center justify-center mb-4">
              <div className="h-7 w-7 text-healing-violet flex items-center justify-center">🌱</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
            <p className="text-foreground/70">
              Empower yourself with tools and techniques for continued wellness beyond sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
