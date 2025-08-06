import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { InstitutionCard } from '@/components/InstitutionCard';
import { ArrowLeft, Award, BookOpen, Users, Star, ExternalLink, CheckCircle, Globe, Heart, Brain, Zap, Sparkles, Building2, GraduationCap, Shield, Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";
import posthog from 'posthog-js';

const Origins = () => {
  useEffect(() => {
    // Track page view
    posthog.capture('$pageview', {
      page: 'origins',
      page_title: 'My Origins | Asli Selcuk',
      path: '/origins',
      user_journey_stage: 'learning_about_origins'
    });
  }, []);

  const handleMasterDelPeClick = (linkType: string) => {
    posthog.capture('master_del_pe_link_clicked', {
      page: 'origins',
      link_type: linkType,
      destination: linkType === 'website' ? 'masterdelpe.com' : 'instagram'
    });
  };

  const handleInstitutionClick = (institutionName: string, websiteUrl: string) => {
    posthog.capture('institution_link_clicked', {
      page: 'origins',
      institution_name: institutionName,
      website_url: websiteUrl
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-green/10 to-healing-blue/10">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-12 overflow-hidden">
          {/* Background with gradient and subtle pattern */}
          <div className="absolute inset-0 healing-gradient"></div>
          <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, rgba(197, 225, 165, 0.3) 1px, transparent 0)`,
                 backgroundSize: '40px 40px'
               }}>
          </div>
          
          <div className="relative container mx-auto px-4 md:px-6 max-w-7xl">
            <Button 
              variant="ghost" 
              className="mb-8 text-gray-700 hover:text-gray-900 hover:bg-white/20 backdrop-blur-sm rounded-xl"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-healing-green/20 to-healing-violet/20 rounded-full mb-6">
                <span className="text-gray-800 font-medium text-sm">Our Origins</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Energy Medicine
                <br />
                <span className="text-4xl md:text-6xl bg-gradient-to-r from-healing-violet to-healing-green bg-clip-text text-transparent">Specialist</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                Certified by the <strong className="text-gray-900">World Institute For Incurable Diseases™</strong> in the transformative <strong style={{color: '#8E4EC6'}}>BeWell Science™</strong> method, pioneered by Master Del Pe
              </p>
              
            </div>
            
            {/* Bottom decorative element */}
            <div className="mt-16 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-healing-green via-healing-violet to-healing-orange rounded-full opacity-60"></div>
            </div>
          </div>
        </section>

        {/* Master Del Pe Profile */}
        <section className="relative py-12 overflow-hidden">
          {/* Background with different pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-healing-violet/10 via-healing-blue/10 to-healing-green/10"></div>
          <div className="absolute inset-0 opacity-15" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, rgba(179, 229, 252, 0.4) 1px, transparent 0)`,
                 backgroundSize: '50px 50px'
               }}>
          </div>
          
          <div className="relative container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Photo and Description */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-8">
                  <div 
                    className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm mx-auto lg:mx-0 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open("https://www.masterdelpe.com/", "_blank", "noopener,noreferrer")}
                  >
                    <img 
                      src="/lovable-uploads/Picture1.png" 
                      alt="Master Del Pe" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                </div>
                
                {/* Social Links */}
                 <div className="flex justify-center lg:justify-start gap-4 mb-6">
                   <div className="w-12 h-12 bg-healing-blue rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                        onClick={() => {
                          handleMasterDelPeClick('website');
                          window.open("https://www.masterdelpe.com/", "_blank", "noopener,noreferrer");
                        }}>
                     <Globe className="h-6 w-6 text-white" />
                   </div>
                   <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                        onClick={() => {
                          handleMasterDelPeClick('instagram');
                          window.open("https://www.instagram.com/masterdelpe_official/", "_blank", "noopener,noreferrer");
                        }}>
                     <Instagram className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Master Del Pe</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  A globally respected spiritual teacher, energy healer, and life mentor known for blending Eastern wisdom with Western science
                </p>
              </div>

              {/* Global Impact Summary */}
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50 overflow-hidden group hover:shadow-healing-violet/20 transition-all duration-500">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-healing-green/0 via-healing-violet/0 to-healing-orange/0 group-hover:from-healing-green/5 group-hover:via-healing-violet/5 group-hover:to-healing-orange/5 transition-all duration-500"></div>
                
                <div className="relative text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-healing-violet/20 to-healing-blue/20 rounded-full mb-4">
                    <span className="text-gray-800 font-medium text-sm">Global Impact</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Transforming Lives</h3>
                  <p className="text-gray-600">Across the world</p>
                </div>
                
                <div className="relative grid grid-cols-1 gap-8 text-center">
                  <div className="group/stat flex flex-col items-center p-4 rounded-2xl hover:bg-gradient-to-br hover:from-healing-green/10 hover:to-healing-green/5 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-healing-green/20 to-healing-green/10 mb-3 group-hover/stat:scale-110 transition-transform duration-300">
                      <Users className="h-12 w-12 text-gray-700" />
                    </div>
                    <span className="text-3xl font-bold text-gray-900">400,000+</span>
                    <span className="text-gray-600 text-lg">students worldwide</span>
                  </div>
                  <div className="group/stat flex flex-col items-center p-4 rounded-2xl hover:bg-gradient-to-br hover:from-healing-blue/10 hover:to-healing-blue/5 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-healing-blue/20 to-healing-blue/10 mb-3 group-hover/stat:scale-110 transition-transform duration-300">
                      <Globe className="h-12 w-12 text-gray-700" />
                    </div>
                    <span className="text-3xl font-bold text-gray-900">100+</span>
                    <span className="text-gray-600 text-lg">countries</span>
                  </div>
                  <div className="group/stat flex flex-col items-center p-4 rounded-2xl hover:bg-gradient-to-br hover:from-healing-violet/10 hover:to-healing-violet/5 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-healing-violet/20 to-healing-violet/10 mb-3 group-hover/stat:scale-110 transition-transform duration-300">
                      <Star className="h-12 w-12 text-gray-700" />
                    </div>
                    <span className="text-3xl font-bold text-gray-900">Decades</span>
                    <span className="text-gray-600 text-lg">of healing expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutions Founded */}
        <section className="relative py-12 overflow-hidden">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-healing-orange/10 via-healing-violet/10 to-healing-blue/10"></div>
          <div className="absolute inset-0 opacity-15" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 204, 128, 0.4) 1px, transparent 0)`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
          
          <div className="relative container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-healing-orange/20 to-healing-violet/20 rounded-full mb-6">
                  <span className="text-gray-800 font-medium text-sm">Institutions Founded</span>
                </div>
                
                <h3 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Transformative
                  <br />
                  <span className="text-4xl md:text-5xl">Institutions</span>
                </h3>
                
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Master Del Pe's vision materialized through these transformative institutions, each serving humanity's highest potential
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
            
            {/* Bottom decorative element */}
            <div className="mt-16 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-healing-green via-healing-violet to-healing-orange rounded-full opacity-60"></div>
            </div>
          </div>
        </section>

        {/* BeWell Science™ Overview */}
        <section className="relative py-12 overflow-hidden">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-healing-yellow/10 via-healing-green/10 to-healing-violet/10"></div>
          <div className="absolute inset-0 opacity-15" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 245, 157, 0.4) 1px, transparent 0)`,
                 backgroundSize: '45px 45px'
               }}>
          </div>
          
          <div className="relative container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="relative bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50 overflow-hidden group hover:shadow-healing-violet/20 transition-all duration-500">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-healing-green/0 via-healing-violet/0 to-healing-orange/0 group-hover:from-healing-green/5 group-hover:via-healing-violet/5 group-hover:to-healing-orange/5 transition-all duration-500"></div>
              
              <div className="relative text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-healing-yellow/20 to-healing-green/20 rounded-full mb-6">
                  <span className="text-gray-800 font-medium text-sm">The Method</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  What Is BeWell
                  <br />
                  <span className="text-4xl md:text-5xl" style={{color: '#8E4EC6'}}>Science™?</span>
                </h2>
                
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Master Del Pe's signature healing system, designed to restore balance across five key dimensions of human health
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
                <div className="group/dimension text-center p-4 rounded-2xl hover:bg-gradient-to-br hover:from-healing-green/10 hover:to-healing-green/5 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-healing-green/20 to-healing-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/dimension:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-gray-700" />
                  </div>
                  <span className="font-semibold text-gray-900">Physical</span>
                </div>
                <div className="group/dimension text-center p-4 rounded-2xl hover:bg-gradient-to-br hover:from-healing-blue/10 hover:to-healing-blue/5 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-healing-blue/20 to-healing-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/dimension:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-gray-700" />
                  </div>
                  <span className="font-semibold text-gray-900">Vital/Energetic</span>
                </div>
                <div className="group/dimension text-center p-4 rounded-2xl hover:bg-gradient-to-br hover:from-healing-violet/10 hover:to-healing-violet/5 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-healing-violet/20 to-healing-violet/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/dimension:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-gray-700" />
                  </div>
                  <span className="font-semibold text-gray-900">Emotional</span>
                </div>
                <div className="group/dimension text-center p-4 rounded-2xl hover:bg-gradient-to-br hover:from-healing-orange/10 hover:to-healing-orange/5 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-healing-orange/20 to-healing-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/dimension:scale-110 transition-transform duration-300">
                    <Brain className="h-8 w-8 text-gray-700" />
                  </div>
                  <span className="font-semibold text-gray-900">Mental</span>
                </div>
                <div className="group/dimension text-center p-4 rounded-2xl hover:bg-gradient-to-br hover:from-healing-yellow/10 hover:to-healing-yellow/5 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-healing-yellow/20 to-healing-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/dimension:scale-110 transition-transform duration-300">
                    <Sparkles className="h-8 w-8 text-gray-700" />
                  </div>
                  <span className="font-semibold text-gray-900">Spiritual</span>
                </div>
              </div>

              <div className="relative text-center">
                <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-4xl mx-auto">
                  This integrative method combines advanced energy medicine, breathwork, biomechanics, and meditation to reverse degenerative patterns, 
                  release blockages, and elevate consciousness. It is especially effective for individuals facing chronic illness, emotional trauma, 
                  burnout, and spiritual disconnection.
                </p>
                
                <button 
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-healing-violet via-healing-blue to-healing-green text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-healing-violet/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  onClick={() => window.open("https://www.bihcglobal.com/", "_blank", "noopener,noreferrer")}
                >
                  Explore BeWell Science™ Programs
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
            
            {/* Bottom decorative element */}
            <div className="mt-16 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-healing-green via-healing-violet to-healing-orange rounded-full opacity-60"></div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

export default Origins; 