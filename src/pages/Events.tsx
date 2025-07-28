import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import AnimatedBackground from '@/components/ui/animated-background';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  image_url?: string;
  created_at: string;
}

const Events = () => {
  const { data: events = [], isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('events')
        .select('*')
        .order('date', { ascending: true });
      
      if (error) throw error;
      return (data || []) as Event[];
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-healing-green/10">
        <Navbar />
        <div className="container mx-auto px-6 md:px-12 py-24">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading events...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-healing-green/10">
        <Navbar />
        <div className="container mx-auto px-6 md:px-12 py-24">
          <div className="text-center">
            <p className="text-destructive">Error loading events. Please try again later.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-violet to-healing-orange relative">
      <AnimatedBackground className="opacity-30" orbCount={8} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Upcoming <span className="bg-gradient-to-r from-healing-violet to-healing-green bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join us for transformative experiences in energy healing and wellness
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          {events.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No upcoming events at this time.</p>
              <p className="text-muted-foreground mt-2">Check back soon for new workshops and sessions!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  {event.image_url && (
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={event.image_url} 
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        {format(new Date(event.date), 'PPP')}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    {event.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;