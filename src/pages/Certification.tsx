import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, BookOpen, Users, Star, ExternalLink, CheckCircle, Globe, Heart, Brain, Zap, Sparkles, Building2, GraduationCap, Shield } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

const Certification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-green/10 to-healing-blue/10">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 healing-gradient">
          <div className="container mx-auto px-6 md:px-12">
            <Button 
              variant="ghost" 
              className="mb-8 text-healing-violet hover:text-healing-violet/80"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-primary font-medium mb-4 block text-lg">My Certification</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Energy Medicine Specialist
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Certified by the <strong>World Institute For Incurable Diseases™</strong> in the transformative <strong>Be Well Science™</strong> method, pioneered by Master Del Pe
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-healing-violet hover:bg-healing-violet/90 text-white px-8 py-3 text-lg"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Book Your Session
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-healing-violet text-healing-violet hover:bg-healing-violet/10 px-8 py-3 text-lg"
                  onClick={() => window.open("https://www.bihcglobal.com/", "_blank", "noopener,noreferrer")}
                >
                  Explore Programs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Master Del Pe Profile */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <div className="relative inline-block">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm mx-auto">
                  <img 
                    src="/lovable-uploads/Picture1.png" 
                    alt="Master Del Pe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Social Media Circle Banners */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-healing-blue rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("https://www.masterdelpe.com/", "_blank", "noopener,noreferrer")}>
                  <Globe className="h-6 w-6 text-white" />
                </div>
                
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-healing-violet rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("https://www.bihcglobal.com/", "_blank", "noopener,noreferrer")}>
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-healing-yellow rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("https://www.mdpvillage.com/", "_blank", "noopener,noreferrer")}>
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-healing-orange rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("https://www.wiidglobal.com/", "_blank", "noopener,noreferrer")}>
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl font-bold mb-4 mt-8">Master Del Pe</h2>
              <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
                A globally respected spiritual teacher, energy healer, and life mentor known for blending Eastern wisdom with Western science
              </p>
            </div>
          </div>
        </section>

        {/* Master Del Pe Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12">

            {/* Global Impact Summary */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Users className="h-12 w-12 text-healing-green mb-3" />
                  <span className="text-2xl font-bold">400,000+</span>
                  <span className="text-foreground/70">students worldwide</span>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="h-12 w-12 text-healing-blue mb-3" />
                  <span className="text-2xl font-bold">100+</span>
                  <span className="text-foreground/70">countries</span>
                </div>
                <div className="flex flex-col items-center">
                  <Star className="h-12 w-12 text-healing-violet mb-3" />
                  <span className="text-2xl font-bold">Decades</span>
                  <span className="text-foreground/70">of healing expertise</span>
                </div>
              </div>
            </div>

            {/* Institutions & Resources */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Building2 className="mr-3 h-7 w-7 text-healing-violet" />
                  Institutions Founded
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold flex items-center mb-2">
                      <Shield className="mr-2 h-5 w-5 text-healing-green" />
                      World Institute for Incurable Diseases™ (WIID)
                    </h4>
                    <p className="text-sm text-foreground/80">Focused on healing chronic and complex conditions through energy-based modalities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold flex items-center mb-2">
                      <Brain className="mr-2 h-5 w-5 text-healing-blue" />
                      BElife Institute for Higher Consciousness™ (BIHC)
                    </h4>
                    <p className="text-sm text-foreground/80">A global school offering 200+ programs in spiritual development and energy healing</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-healing-blue hover:text-healing-blue/80"
                      onClick={() => window.open("https://www.bihcglobal.com/", "_blank", "noopener,noreferrer")}
                    >
                      Visit BIHC Global <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-semibold flex items-center mb-2">
                      <Users className="mr-2 h-5 w-5 text-healing-violet" />
                      Wisdom Institute for Leadership and Global Advancement™ (WILGA)
                    </h4>
                    <p className="text-sm text-foreground/80">Dedicated to conscious leadership and organizational transformation</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Sparkles className="mr-3 h-7 w-7 text-healing-violet" />
                    MDP Village Retreat Resort
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Master Del Pe created the MDP Village Retreat Resort in the Philippines—a sanctuary for healing, longevity, and spiritual training.
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-healing-blue hover:text-healing-blue/80"
                    onClick={() => window.open("https://www.mdpvillage.com/", "_blank", "noopener,noreferrer")}
                  >
                    Explore MDP Village <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Connect with Master Del Pe</h4>
                  <div className="space-y-2">
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-healing-blue hover:text-healing-blue/80 block"
                      onClick={() => window.open("https://www.masterdelpe.com/", "_blank", "noopener,noreferrer")}
                    >
                      Official Website <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-healing-blue hover:text-healing-blue/80 block"
                      onClick={() => window.open("https://www.masterdelpe.com/about", "_blank", "noopener,noreferrer")}
                    >
                      About Master <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEwell Science Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-gradient-to-r from-healing-violet/10 to-healing-blue/10 p-8 rounded-2xl border border-healing-violet/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">What Is BEwell Science™?</h2>
                <p className="text-lg text-foreground/80">
                  Master Del Pe's signature healing system, designed to restore balance across five key dimensions of human health
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-healing-green/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Heart className="h-6 w-6 text-healing-green" />
                  </div>
                  <span className="font-semibold">Physical</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-healing-blue/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-healing-blue" />
                  </div>
                  <span className="font-semibold">Vital/Energetic</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-healing-violet/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Heart className="h-6 w-6 text-healing-violet" />
                  </div>
                  <span className="font-semibold">Emotional</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-healing-green/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Brain className="h-6 w-6 text-healing-green" />
                  </div>
                  <span className="font-semibold">Mental</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-healing-blue/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sparkles className="h-6 w-6 text-healing-blue" />
                  </div>
                  <span className="font-semibold">Spiritual</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-foreground/80 mb-4">
                  This integrative method combines advanced energy medicine, breathwork, biomechanics, and meditation to reverse degenerative patterns, 
                  release blockages, and elevate consciousness. It is especially effective for individuals facing chronic illness, emotional trauma, 
                  burnout, and spiritual disconnection.
                </p>
                <Button 
                  variant="outline" 
                  className="border-healing-violet text-healing-violet hover:bg-healing-violet/10"
                  onClick={() => window.open("https://www.bihcglobal.com/", "_blank", "noopener,noreferrer")}
                >
                  Explore BEwell Science™ Programs <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

export default Certification; 