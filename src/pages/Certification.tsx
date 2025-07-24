import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { InstitutionCard } from '@/components/InstitutionCard';
import { ArrowLeft, Award, BookOpen, Users, Star, ExternalLink, CheckCircle, Globe, Heart, Brain, Zap, Sparkles, Building2, GraduationCap, Shield, Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
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
                
                {/* Circle Halo of Links - 8 icons evenly spaced around the photo circle */}
                {/* Top (0°) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-healing-blue rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("https://www.masterdelpe.com/", "_blank", "noopener,noreferrer")}>
                  <Globe className="h-6 w-6 text-white" />
                </div>
                
                {/* Top-Right (45°) */}
                <div className="absolute top-[14%] right-[14%] transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-healing-violet rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("https://www.bihcglobal.com/", "_blank", "noopener,noreferrer")}>
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                
                {/* Right (90°) */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("#", "_blank", "noopener,noreferrer")}>
                  <Youtube className="h-5 w-5 text-white" />
                </div>
                
                {/* Bottom-Right (135°) */}
                <div className="absolute bottom-[14%] right-[14%] transform translate-x-1/2 translate-y-1/2 w-12 h-12 bg-healing-orange rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("https://www.wiidglobal.com/", "_blank", "noopener,noreferrer")}>
                  <Shield className="h-6 w-6 text-white" />
                </div>

                {/* Bottom (180°) */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-blue-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("#", "_blank", "noopener,noreferrer")}>
                  <Twitter className="h-5 w-5 text-white" />
                </div>
                
                {/* Bottom-Left (225°) */}
                <div className="absolute bottom-[14%] left-[14%] transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-healing-yellow rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("https://www.mdpvillage.com/", "_blank", "noopener,noreferrer")}>
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                
                {/* Left (270°) */}
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("#", "_blank", "noopener,noreferrer")}>
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                
                {/* Top-Left (315°) */}
                <div className="absolute top-[14%] left-[14%] transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-700 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                     onClick={() => window.open("#", "_blank", "noopener,noreferrer")}>
                  <Facebook className="h-5 w-5 text-white" />
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

            {/* Institutions Founded */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4 flex items-center justify-center">
                  <Building2 className="mr-4 h-10 w-10 text-healing-violet" />
                  Institutions Founded
                </h3>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  Master Del Pe's vision materialized through these transformative institutions, each serving humanity's highest potential
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <InstitutionCard
                  logoSrc="/lovable-uploads/d9b3f1f3-e79c-4a3d-ba0d-ad4dc05adaba.png"
                  logoAlt="WIID Logo"
                  title="World Institute for Incurable Diseases™ (WIID)"
                  description="A pioneering global institute focused on healing chronic and complex conditions through advanced energy-based modalities and holistic therapeutic approaches."
                  websiteUrl="https://www.wiidglobal.com/"
                />
                <InstitutionCard
                  logoSrc="/lovable-uploads/cce1ae9d-16e1-44d2-a4d6-4b67ce06af34.png"
                  logoAlt="BIHC Logo"
                  title="BElife Institute for Higher Consciousness™ (BIHC)"
                  description="A comprehensive global educational institution offering over 200 transformative programs in spiritual development, consciousness expansion, and energy healing mastery."
                  websiteUrl="https://www.bihcglobal.com/"
                />
                <InstitutionCard
                  logoSrc="/lovable-uploads/68f2eccb-c75b-455b-844f-3a2e78725031.png"
                  logoAlt="WILGA Logo"
                  title="Wisdom Institute for Leadership and Global Advancement™ (WILGA)"
                  description="An innovative institute dedicated to developing conscious leadership capabilities and facilitating organizational transformation for a more enlightened world."
                  websiteUrl="https://www.wilgaglobal.com/"
                />
                <InstitutionCard
                  logoSrc="/logos/mdp-village-logo.ico"
                  logoAlt="MDP Village Logo"
                  title="MDP Village Retreat Resort"
                  description="An exclusive sanctuary nestled in the Philippines, designed as a comprehensive retreat center for healing, longevity practices, and intensive spiritual training experiences."
                  websiteUrl="https://www.mdpvillage.com/"
                />
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