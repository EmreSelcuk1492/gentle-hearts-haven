
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
      // Step 1: Insert the submission into the database
      const { data: insertedData, error } = await supabase
        .from('contact_submissions')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          country_code: '+1',
          message: data.message,
        } as ContactSubmission)
        .select();

      if (error) throw error;
      
      // Step 2: Trigger notification email
      if (insertedData && insertedData.length > 0) {
        try {
          await supabase.functions.invoke('notify-contact-submission', {
            body: insertedData[0],
          });
          console.log('Notification sent successfully');
        } catch (notifyError) {
          console.error('Failed to send notification:', notifyError);
          // We don't throw here as we still want to show success for the form submission
        }
      }

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
          <span className="text-primary font-medium mb-2 block">Let's Connect</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">It Would Be My Privilege to Serve You</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Whether you're struggling with physical ailments that won't resolve, emotional patterns that repeat, 
            or simply seeking greater balance in your life, I'm here to help you explore beyond the visible.
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
                <h3 className="text-2xl font-bold mb-6">A Personal Connection</h3>
                
                <div className="space-y-6 text-foreground/80 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-healing-green/30 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-healing-green" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p>asli@bewellscience.com</p>
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
                      <p className="font-medium">Session Times</p>
                      <p>Flexible scheduling to meet your needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-healing-violet/30 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-healing-violet" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p>Virtual & In-person options available</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-foreground/80 italic">
                    "Step by step, intention by intention we build our future, and it can either be more of 
                    the historical patterns or brand new horizons that we could not even fathom interacting with."
                  </p>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Start Your Journey</h3>
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
                              placeholder="What challenges have you been facing? How can I help you in your journey?" 
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
                      {isSubmitting ? "Sending..." : "Connect With Me"}
                    </Button>
                    
                    <p className="text-sm text-center text-foreground/60 mt-4">
                      I honor your privacy and will keep all information confidential.
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
