
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 healing-gradient rounded-l-2xl flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Begin Your Healing Journey Today</h2>
              <p className="text-foreground/80 mb-6">
                Take the first step toward reclaiming your balance and peace. Schedule a consultation or reach out with any questions.
              </p>
              <div className="space-y-4 text-foreground/80">
                <p>Email: contact@attainenergyhealing.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Hours: Mon-Fri, 9am-5pm</p>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="border-healing-green/50 focus-visible:ring-healing-green" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="border-healing-green/50 focus-visible:ring-healing-green" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[120px] border-healing-green/50 focus-visible:ring-healing-green" />
                </div>
                <Button type="submit" className="w-full bg-healing-green text-foreground hover:bg-healing-green/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
