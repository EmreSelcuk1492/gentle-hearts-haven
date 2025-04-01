
import React from 'react';
import { Heart, Leaf, Sun } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 healing-gradient">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Approach</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A holistic healing practice dedicated to helping professional mothers reclaim their peace, joy, and balance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-healing-green/30 flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-healing-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Compassionate Care</h3>
            <p className="text-foreground/70">
              We provide a judgment-free space where you can express your challenges and find gentle guidance toward healing.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-healing-orange/30 flex items-center justify-center mb-6">
              <Sun className="h-8 w-8 text-healing-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Holistic Methods</h3>
            <p className="text-foreground/70">
              Our techniques address the mind, body, and spirit connection, bringing balance to all aspects of your life.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-healing-blue/30 flex items-center justify-center mb-6">
              <Leaf className="h-8 w-8 text-healing-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lasting Transformation</h3>
            <p className="text-foreground/70">
              Our goal is not just temporary relief but profound healing that transforms your relationship with stress and trauma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
