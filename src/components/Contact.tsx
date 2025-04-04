
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-healing-yellow font-medium mb-2 block">Ready to Transform Your Life?</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Healing Journey Today</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Take the first step toward reclaiming your balance, peace, and joy. Reach out to schedule your free consultation.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 healing-gradient rounded-l-2xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 text-foreground/80 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-healing-green/30 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-healing-green" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>contact@attainenergyhealing.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-healing-blue/30 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-healing-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-healing-orange/30 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-healing-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Hours</p>
                    <p>Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-healing-violet/30 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-healing-violet" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p>Virtual & In-person sessions available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="border-healing-green/50 focus-visible:ring-healing-green" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="border-healing-green/50 focus-visible:ring-healing-green" />
                </div>
                <div>
                  <Input type="tel" placeholder="Your Phone (optional)" className="border-healing-green/50 focus-visible:ring-healing-green" />
                </div>
                <div>
                  <Textarea 
                    placeholder="How can Asli help you? Tell us about your needs." 
                    className="min-h-[120px] border-healing-green/50 focus-visible:ring-healing-green" 
                  />
                </div>
                <Button type="submit" className="w-full bg-healing-green text-foreground hover:bg-healing-green/90">
                  Request Free Consultation
                </Button>
                <p className="text-sm text-center text-foreground/60 mt-4">
                  Your information will be kept confidential and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
