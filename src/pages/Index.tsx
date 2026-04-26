import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MantraBand from "@/components/MantraBand";
import ForYou from "@/components/ForYou";
import Method from "@/components/Method";
import Testimonial from "@/components/Testimonials";
import AboutStrip from "@/components/AboutStrip";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <MantraBand />
        <ForYou />
        <Method />
        <Testimonial />
        <AboutStrip />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
