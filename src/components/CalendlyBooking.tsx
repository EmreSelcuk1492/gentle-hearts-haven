import React from 'react';
import { InlineWidget } from 'react-calendly';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from 'lucide-react';
import { getCalendlyUrl } from '@/lib/calendly';
import AnimatedBackground from '@/components/ui/animated-background';

interface CalendlyBookingProps {
  calendlyUrl?: string;
  title?: string;
  description?: string;
  className?: string;
  height?: number;
}

const CalendlyBooking: React.FC<CalendlyBookingProps> = ({
  calendlyUrl,
  title = "Schedule a Session",
  description = "Book your personalized healing session with Aslı",
  className = "",
  height = 600
}) => {
  const url = calendlyUrl || getCalendlyUrl();
  return (
    <Card className={`bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-7xl mx-auto ${className}`}>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] w-full">
          {/* Left Panel - Title and Description */}
          <div className="relative flex flex-col justify-center p-8 lg:p-12 bg-[#f9f9f0] min-w-0 overflow-hidden rounded-l-lg">
            {/* Animated Background */}
            <AnimatedBackground 
              orbCount={8}
              colors={[
                '#C5E1A5', // healing-green
                '#FFCC80', // healing-orange
                '#D1C4E9', // healing-violet
                '#FFF59D', // healing-yellow
                '#B3E5FC'  // healing-blue
              ]}
            />
            
            {/* Content */}
            <div className="relative z-10 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-healing-violet/20 to-healing-green/20 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-healing-violet" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-2">
                Start your Journey
              </h1>
              <CardTitle className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-healing-violet to-healing-green bg-clip-text text-transparent mb-4">
                Free Discovery Call
              </CardTitle>
              <CardDescription className="flex items-center justify-center lg:justify-start gap-2 text-lg text-foreground/70 mb-6">
                <Clock className="h-5 w-5 text-healing-green flex-shrink-0" />
                {description}
              </CardDescription>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-healing-green"></div>
                  <span>Personalized healing sessions</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-healing-violet"></div>
                  <span>Flexible scheduling options</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-healing-green"></div>
                  <span>Safe and confidential environment</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm text-foreground/60 italic">
                  Your journey to healing starts with this simple step
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel - Calendar Widget */}
          <div className="p-4 lg:p-6 min-w-0">
            <div className="rounded-lg overflow-hidden border border-healing-violet/20 bg-gradient-to-br from-white to-healing-violet/5 h-full w-full">
              <InlineWidget
                url={url}
                styles={{
                  height: height,
                  width: '100%',
                  minWidth: '400px'
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '#8B5CF6', // healing-violet
                  textColor: '#374151'
                }}
                prefill={{
                  email: '',
                  firstName: '',
                  lastName: '',
                  name: ''
                }}
                utm={{
                  utmCampaign: 'website',
                  utmSource: 'gentle-hearts-haven',
                  utmMedium: 'inline-widget'
                }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendlyBooking; 