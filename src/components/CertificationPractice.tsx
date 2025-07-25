import React from 'react';
import { Brain, Heart, Activity, Users2, Shield, Flower2, Sparkles, LifeBuoy, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CertificationPractice = () => {
  return (
    <section id="certification-practice" className="py-20 healing-gradient">
      <div className="container mx-auto px-6 md:px-12">
        {/* Split view layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Icon components */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2 border border-healing-blue/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-healing-blue to-healing-blue/70 flex items-center justify-center mb-6 shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-healing-blue">Mental Health</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Depression, Anxiety, OCD & ADHD
                </p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2 border border-healing-orange/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-healing-orange to-healing-orange/70 flex items-center justify-center mb-6 shadow-lg">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-healing-orange">Burnout & Stress</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Burnout, Stress, Fatigue & Dizziness
                </p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2 border border-healing-green/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-healing-green to-healing-green/70 flex items-center justify-center mb-6 shadow-lg">
                  <Users2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-healing-green">Life Challenges</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Relationship and Financial Struggles
                </p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2 border border-healing-violet/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-healing-violet to-healing-violet/70 flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-healing-violet">Cancer Support</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Cancer support & recovery
                </p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2 border border-healing-red/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-healing-red to-healing-red/70 flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-healing-red">Physical Health</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Heart Disease, Diabetes & Dementia
                </p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2 border border-healing-pink/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-healing-pink to-healing-pink/70 flex items-center justify-center mb-6 shadow-lg">
                  <Flower2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-healing-pink">Women's Health</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Menopause, perimenopause
                </p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2 border border-healing-indigo/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-healing-indigo to-healing-indigo/70 flex items-center justify-center mb-6 shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-healing-indigo">Spiritual Support</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  End-of-Life Transition Support
                </p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2 border border-healing-teal/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-healing-teal to-healing-teal/70 flex items-center justify-center mb-6 shadow-lg">
                  <LifeBuoy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-healing-teal">Family Care</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Including family and loved ones
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Title, text content and button */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <div className="space-y-6">
              <div className="mb-8">
                <span className="text-foreground/80 font-medium mb-2 block">My Certification & Practice</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Energy Medicine Specialist</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
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
              <p className="text-lg text-foreground/80 leading-relaxed">
                Since my certification, I've supported clients through a wide spectrum of physical,
                emotional, energetic, and life challenges. Each healing journey is unique. I offer a compassionate, 
                personalized approach—drawing on energetic alignment, intuitive insight, and deep listening—to help 
                individuals reconnect with their vitality and move toward holistic wellness across all five dimensions of being.
              </p>
              
              <div className="pt-4">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-gradient-to-r from-healing-violet to-healing-blue hover:from-healing-violet/90 hover:to-healing-blue/90 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = '/certification'}
                >
                  Learn More About My Certification
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPractice; 