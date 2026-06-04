import { useEffect } from "react";
import Header from "@/components/Header";
import BookingModal from "@/components/BookingModal";
import Hero from "@/components/Hero";
import MantraBand from "@/components/MantraBand";
import ForYou from "@/components/ForYou";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import AboutStrip from "@/components/AboutStrip";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Track which elements we've already promoted to .visible. We re-apply the
    // class if React strips it on a re-render (e.g., a parent's useState).
    const promoted = new WeakSet<Element>();

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            promoted.add(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const mutationObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type !== "attributes" || m.attributeName !== "class") continue;
        const el = m.target as Element;
        if (promoted.has(el) && !el.classList.contains("visible")) {
          el.classList.add("visible");
        }
      }
    });

    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
      intersectionObserver.observe(el);
      mutationObserver.observe(el, { attributes: true, attributeFilter: ["class"] });
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <MantraBand />
        <ForYou />
        <Method />
        <Testimonials />
        <AboutStrip />
        <Events />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BookingModal />
    </>
  );
};

export default Index;
