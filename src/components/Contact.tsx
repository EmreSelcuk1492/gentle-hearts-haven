
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      console.log("Newsletter signup:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success toast
      toast({
        title: "Thank you for subscribing!",
        description: "You've been added to our newsletter.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error signing up for newsletter:", error);
      toast({
        title: "Something went wrong",
        description: "Your subscription couldn't be processed. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">Stay Updated</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Subscribe to receive updates, healing tips, and special offers to support your wellness journey.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-healing-violet" />
                <span>Newsletter Signup</span>
              </CardTitle>
              <CardDescription>
                Enter your email to receive our healing tips and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex gap-2">
                            <Input 
                              type="email" 
                              placeholder="Your Email" 
                              className="border-healing-green/50 focus-visible:ring-healing-green" 
                              {...field} 
                            />
                            <Button 
                              type="submit" 
                              className="bg-[#d8ebc3] text-black hover:bg-[#c5e1a5] rounded-full px-6"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Subscribing..." : "Subscribe"}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
              
              <div className="mt-6 text-center text-sm text-foreground/70">
                <p>We respect your privacy and will never share your information.</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Original contact form is commented out
          <div className="mt-8 text-center text-foreground/70">
            <p>Need more personalized assistance?</p>
            <p>Email us at <a href="mailto:asli@bewellscience.com" className="text-healing-violet hover:underline">asli@bewellscience.com</a></p>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
