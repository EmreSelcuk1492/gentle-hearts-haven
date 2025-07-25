import React from 'react';
import { Brain, Heart, Activity, Users2, Shield, Flower2, Sparkles, LifeBuoy, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CertificationPractice = () => {
  return (
    <section id="certification-practice" className="py-20 healing-gradient">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-foreground/80 font-medium mb-2 block">My Certification & Practice</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Energy Medicine Specialist</h2>
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto mb-8">
            I am a certified Energy Medicine Specialist with the{' '}
            <Button 
              variant="link" 
              className="px-1 h-auto flex items-center gap-1 inline text-xl" 
              onClick={() => window.open("https://www.wiidglobal.com/", "_blank", "noopener,noreferrer")}
            >
              <span className="text-[#65bd1e] font-bold">World Institute For</span> <span className="text-[#ea384c] font-bold">Incurable Diseases</span><sup>™</sup>
            </Button>
            , an organization that applies the transformative{' '}
            <span className="font-semibold">Be Well Science<sup>™</sup></span> method. This
            groundbreaking system was founded and developed by{' '}
            <strong>Master Del Pe</strong>, a globally
            respected thought leader in integrative healing and spiritual science, whose work has
            spanned decades and continents.
          </p>
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto mb-8">
            Since my certification, I've supported clients through a wide spectrum of physical,
            emotional, energetic, and life challenges. Each healing journey is unique. I offer a compassionate, 
            personalized approach—drawing on energetic alignment, intuitive insight, and deep listening—to help 
            individuals reconnect with their vitality and move toward holistic wellness across all five dimensions of being.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="default" 
              size="lg"
              className="bg-healing-violet hover:bg-healing-violet/90 text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = '/certification'}
            >
              Learn More About My Certification
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-blue/30 flex items-center justify-center mb-4">
              <Brain className="h-7 w-7 text-healing-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Mental Health</h3>
            <p className="text-foreground/70 text-sm">
              Depression, Anxiety, OCD & ADHD
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-orange/30 flex items-center justify-center mb-4">
              <Activity className="h-7 w-7 text-healing-orange" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Burnout & Stress</h3>
            <p className="text-foreground/70 text-sm">
              Burnout, Stress, Fatigue & Dizziness
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-green/30 flex items-center justify-center mb-4">
              <Users2 className="h-7 w-7 text-healing-green" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Life Challenges</h3>
            <p className="text-foreground/70 text-sm">
              Relationship and Financial Struggles
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-violet/30 flex items-center justify-center mb-4">
              <Shield className="h-7 w-7 text-healing-violet" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cancer Support</h3>
            <p className="text-foreground/70 text-sm">
              Cancer support & recovery
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-red/30 flex items-center justify-center mb-4">
              <Heart className="h-7 w-7 text-healing-red" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Physical Health</h3>
            <p className="text-foreground/70 text-sm">
              Heart Disease, Diabetes & Dementia
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-pink/30 flex items-center justify-center mb-4">
              <Flower2 className="h-7 w-7 text-healing-pink" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Women's Health</h3>
            <p className="text-foreground/70 text-sm">
              Menopause, perimenopause
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-indigo/30 flex items-center justify-center mb-4">
              <Sparkles className="h-7 w-7 text-healing-indigo" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Spiritual Support</h3>
            <p className="text-foreground/70 text-sm">
              End-of-Life Transition Support
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-healing-teal/30 flex items-center justify-center mb-4">
              <LifeBuoy className="h-7 w-7 text-healing-teal" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Family Care</h3>
            <p className="text-foreground/70 text-sm">
              Including family and loved ones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPractice; 