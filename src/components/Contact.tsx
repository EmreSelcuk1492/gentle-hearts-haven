
import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SuccessAnimation } from "@/components/ui/success-animation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  country_code: string;
  message: string;
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          country_code: '+1',
          message: data.message,
        } as ContactSubmission);

      if (error) throw error;

      setShowSuccess(true);
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAnimationComplete = useCallback(() => {
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
  }, [toast]);
  
  const handleReset = useCallback(() => {
    setShowSuccess(false);
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">Ready to Transform Your Life?</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Healing Journey Today</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Take the first step toward reclaiming your balance, peace, and joy. Reach out to schedule your free consultation.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden">
          {showSuccess ? (
            <div className="flex items-center justify-center min-h-[500px] relative">
              <SuccessAnimation 
                className="py-12 w-full h-full"
                onComplete={handleAnimationComplete}
                onReset={handleReset}
              />
            </div>
          ) : (
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              placeholder="Your Name" 
                              className="border-healing-green/50 focus-visible:ring-healing-green" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Your Email" 
                              className="border-healing-green/50 focus-visible:ring-healing-green" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="Your Phone" 
                              className="border-healing-green/50 focus-visible:ring-healing-green" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              placeholder="How can Asli help you? Tell us about your needs." 
                              className="min-h-[120px] border-healing-green/50 focus-visible:ring-healing-green" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-healing-green text-foreground hover:bg-healing-green/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Request Free Consultation"}
                    </Button>
                    
                    <p className="text-sm text-center text-foreground/60 mt-4">
                      Your information will be kept confidential and will never be shared with third parties.
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
