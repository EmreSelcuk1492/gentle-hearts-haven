import React, { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';
import { format } from 'date-fns';

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
  const orbsContainer = useRef<HTMLDivElement>(null);
  const orbsArray = useRef<Array<{
    element: HTMLDivElement;
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    size: number;
    color: string;
    opacity: number;
    growing: boolean;
  }>>([]);
  
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

  useEffect(() => {
    const createOrb = (isInitial = false) => {
      if (!orbsContainer.current) return;
      
      const containerWidth = orbsContainer.current.offsetWidth;
      const containerHeight = orbsContainer.current.offsetHeight;
      
      const colors = [
        '#C5E1A5', // healing-green
        '#FFCC80', // healing-orange
        '#D1C4E9', // healing-violet
        '#FFF59D', // healing-yellow
        '#B3E5FC'  // healing-blue
      ];
      
      const orb = document.createElement('div');
      
      const sizeInRem = 2 + Math.random() * 6;
      const size = sizeInRem * 16;
      
      const x = Math.random() * (containerWidth - size);
      const y = Math.random() * (containerHeight - size);
      
      const speedX = (Math.random() - 0.5) * 0.4;
      const speedY = (Math.random() - 0.5) * 0.4;
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const initialOpacity = isInitial ? (0.4 + Math.random() * 0.3) : 0;
      
      Object.assign(orb.style, {
        position: 'absolute',
        width: `${sizeInRem}rem`,
        height: `${sizeInRem}rem`,
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: color,
        borderRadius: '50%',
        filter: 'blur(10px)',
        opacity: initialOpacity.toString(),
        zIndex: '1',
        transform: 'scale(0.8)',
        transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'
      });
      
      orbsContainer.current.appendChild(orb);
      
      if (!isInitial) {
        setTimeout(() => {
          orb.style.opacity = (0.4 + Math.random() * 0.3).toString();
          orb.style.transform = 'scale(1)';
        }, 10);
      }
      
      orbsArray.current.push({
        element: orb,
        x,
        y,
        speedX,
        speedY,
        size,
        color,
        opacity: initialOpacity,
        growing: !isInitial
      });
    };
    
    const createInitialOrbs = () => {
      if (!orbsContainer.current) return;
      
      orbsContainer.current.innerHTML = '';
      orbsArray.current = [];
      
      for (let i = 0; i < 6; i++) {
        createOrb(true);
      }
    };
    
    createInitialOrbs();
    
    let animationFrameId: number;
    
    const animateOrbs = () => {
      if (!orbsContainer.current) return;
      
      const containerWidth = orbsContainer.current.offsetWidth;
      const containerHeight = orbsContainer.current.offsetHeight;
      
      orbsArray.current.forEach((orb, index) => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;
        
        if (orb.x <= 0 || orb.x + orb.size >= containerWidth) {
          orb.speedX = -orb.speedX;
          orb.x = Math.max(0, Math.min(containerWidth - orb.size, orb.x));
        }
        
        if (orb.y <= 0 || orb.y + orb.size >= containerHeight) {
          orb.speedY = -orb.speedY;
          orb.y = Math.max(0, Math.min(containerHeight - orb.size, orb.y));
        }
        
        orb.speedX += (Math.random() - 0.5) * 0.02;
        orb.speedY += (Math.random() - 0.5) * 0.02;
        
        const maxSpeed = 0.8;
        orb.speedX = Math.max(-maxSpeed, Math.min(maxSpeed, orb.speedX));
        orb.speedY = Math.max(-maxSpeed, Math.min(maxSpeed, orb.speedY));
        
        orb.element.style.left = `${orb.x}px`;
        orb.element.style.top = `${orb.y}px`;
        
        if (orb.growing && orb.opacity < 0.7) {
          orb.opacity = Math.min(orb.opacity + 0.01, 0.7);
          orb.element.style.opacity = orb.opacity.toString();
        }
      });
      
      animationFrameId = requestAnimationFrame(animateOrbs);
    };
    
    animateOrbs();
    
    const addOrbInterval = setInterval(() => {
      if (orbsArray.current.length >= 12) {
        const oldOrbIndex = Math.floor(Math.random() * orbsArray.current.length);
        const oldOrb = orbsArray.current[oldOrbIndex];
        
        oldOrb.element.style.opacity = '0';
        oldOrb.element.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
          if (orbsContainer.current && oldOrb.element.parentNode === orbsContainer.current) {
            orbsContainer.current.removeChild(oldOrb.element);
          }
          orbsArray.current = orbsArray.current.filter(o => o !== oldOrb);
        }, 1500);
      }
      
      createOrb(false);
    }, 3000);
    
    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      createInitialOrbs();
      animateOrbs();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(addOrbInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f9f9f0] flex flex-col">
        <div 
          ref={orbsContainer} 
          className="absolute inset-0 pointer-events-none overflow-hidden" 
          aria-hidden="true"
        />
        <Navbar />
        <div className="container mx-auto px-6 md:px-12 py-24 flex-grow relative z-10">
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
      <div className="min-h-screen bg-[#f9f9f0] flex flex-col">
        <div 
          ref={orbsContainer} 
          className="absolute inset-0 pointer-events-none overflow-hidden" 
          aria-hidden="true"
        />
        <Navbar />
        <div className="container mx-auto px-6 md:px-12 py-24 flex-grow relative z-10">
          <div className="text-center">
            <p className="text-destructive">Error loading events. Please try again later.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f0] relative flex flex-col">
      <div className="flex-grow relative">
        <div 
          ref={orbsContainer} 
          className="absolute inset-0 pointer-events-none overflow-hidden" 
          aria-hidden="true"
        />
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
      </div>

      <Footer />
    </div>
  );
};

export default Events;