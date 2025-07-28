
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventsBanner from '@/components/EventsBanner';
import About from '@/components/About';
import CertificationPractice from '@/components/CertificationPractice';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-healing-green/10">
      <Navbar />
      <Hero />
      <EventsBanner />
      <About />
      <CertificationPractice />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
