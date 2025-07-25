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
              <div className="bg-gray-50 p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center border border-gray-100 w-24 h-24 justify-center">
                <Brain className="h-5 w-5 text-healing-blue mb-1" />
                <p className="text-xs font-medium text-healing-blue">Mental Health</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center border border-gray-100 w-24 h-24 justify-center">
                <Activity className="h-5 w-5 text-healing-orange mb-1" />
                <p className="text-xs font-medium text-healing-orange">Burnout & Stress</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center border border-gray-100 w-24 h-24 justify-center">
                <Users2 className="h-5 w-5 text-healing-green mb-1" />
                <p className="text-xs font-medium text-healing-green">Life Challenges</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center border border-gray-100 w-24 h-24 justify-center">
                <Shield className="h-5 w-5 text-healing-violet mb-1" />
                <p className="text-xs font-medium text-healing-violet">Cancer Support</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center border border-gray-100 w-24 h-24 justify-center">
                <Heart className="h-5 w-5 text-healing-red mb-1" />
                <p className="text-xs font-medium text-healing-red">Physical Health</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center border border-gray-100 w-24 h-24 justify-center">
                <Flower2 className="h-5 w-5 text-healing-pink mb-1" />
                <p className="text-xs font-medium text-healing-pink">Women's Health</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center border border-gray-100 w-24 h-24 justify-center">
                <Sparkles className="h-5 w-5 text-healing-indigo mb-1" />
                <p className="text-xs font-medium text-healing-indigo">Spiritual Support</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center border border-gray-100 w-24 h-24 justify-center">
                <LifeBuoy className="h-5 w-5 text-healing-teal mb-1" />
                <p className="text-xs font-medium text-healing-teal">Family Care</p>
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