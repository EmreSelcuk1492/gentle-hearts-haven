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
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Interactive Cards and Main Button */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-healing-blue/20 hover:border-healing-blue/40">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-healing-blue/30 to-healing-blue/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-7 w-7 text-healing-blue group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-healing-blue transition-colors">Mental Health</h3>
                <p className="text-foreground/70 text-sm">
                  Depression, Anxiety, OCD & ADHD
                </p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-healing-orange/20 hover:border-healing-orange/40">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-healing-orange/30 to-healing-orange/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="h-7 w-7 text-healing-orange group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-healing-orange transition-colors">Burnout & Stress</h3>
                <p className="text-foreground/70 text-sm">
                  Burnout, Stress, Fatigue & Dizziness
                </p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-healing-green/20 hover:border-healing-green/40">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-healing-green/30 to-healing-green/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users2 className="h-7 w-7 text-healing-green group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-healing-green transition-colors">Life Challenges</h3>
                <p className="text-foreground/70 text-sm">
                  Relationship and Financial Struggles
                </p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-healing-violet/20 hover:border-healing-violet/40">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-healing-violet/30 to-healing-violet/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-healing-violet group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-healing-violet transition-colors">Cancer Support</h3>
                <p className="text-foreground/70 text-sm">
                  Cancer support & recovery
                </p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-healing-red/20 hover:border-healing-red/40">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-healing-red/30 to-healing-red/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-7 w-7 text-healing-red group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-healing-red transition-colors">Physical Health</h3>
                <p className="text-foreground/70 text-sm">
                  Heart Disease, Diabetes & Dementia
                </p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-healing-pink/20 hover:border-healing-pink/40">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-healing-pink/30 to-healing-pink/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Flower2 className="h-7 w-7 text-healing-pink group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-healing-pink transition-colors">Women's Health</h3>
                <p className="text-foreground/70 text-sm">
                  Menopause, perimenopause
                </p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-healing-indigo/20 hover:border-healing-indigo/40">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-healing-indigo/30 to-healing-indigo/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-7 w-7 text-healing-indigo group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-healing-indigo transition-colors">Spiritual Support</h3>
                <p className="text-foreground/70 text-sm">
                  End-of-Life Transition Support
                </p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-healing-teal/20 hover:border-healing-teal/40">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-healing-teal/30 to-healing-teal/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <LifeBuoy className="h-7 w-7 text-healing-teal group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-healing-teal transition-colors">Family Care</h3>
                <p className="text-foreground/70 text-sm">
                  Including family and loved ones
                </p>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="default" 
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-healing-violet to-healing-violet/80 hover:from-healing-violet/90 hover:to-healing-violet text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-healing-violet/25 transition-all duration-500 hover:scale-105"
                onClick={() => window.location.href = '/certification'}
              >
                <span className="relative z-10 flex items-center">
                  Learn More About My Certification
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                I am a certified Energy Medicine Specialist with the{' '}
                <Button 
                  variant="link" 
                  className="px-1 h-auto flex items-center gap-1 inline text-xl hover:scale-105 transition-transform" 
                  onClick={() => window.open("https://www.wiidglobal.com/", "_blank", "noopener,noreferrer")}
                >
                  <span className="text-[#65bd1e] font-bold">World Institute For</span> <span className="text-[#ea384c] font-bold">Incurable Diseases</span><sup>™</sup>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
                , an organization that applies the transformative{' '}
                <span className="font-semibold bg-gradient-to-r from-healing-violet to-healing-blue bg-clip-text text-transparent">Be Well Science<sup>™</sup></span> method.
              </p>
              
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                This groundbreaking system was founded and developed by{' '}
                <strong className="text-healing-violet">Master Del Pe</strong>, a globally
                respected thought leader in integrative healing and spiritual science, whose work has
                spanned decades and continents.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Since my certification, I've supported clients through a wide spectrum of physical,
                emotional, energetic, and life challenges. Each healing journey is unique. I offer a compassionate, 
                personalized approach—drawing on energetic alignment, intuitive insight, and deep listening—to help 
                individuals reconnect with their vitality and move toward holistic wellness across all five dimensions of being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPractice;