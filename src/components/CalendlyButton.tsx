import React from 'react';
import { PopupWidget } from 'react-calendly';
import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';
import { getCalendlyUrl } from '@/lib/calendly';
import posthog from 'posthog-js';

interface CalendlyButtonProps {
  calendlyUrl?: string;
  children?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  text?: string;
  color?: string;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({
  calendlyUrl,
  children = "Book a Session",
  variant = "default",
  size = "default",
  className = "",
  text = "Schedule a Session",
  color = "#8B5CF6" // healing-violet
}) => {
  const url = calendlyUrl || getCalendlyUrl();
  
  const handleCalendlyClick = () => {
    posthog.capture('calendly_popup_opened', {
      page: window.location.pathname,
      button_text: children,
      calendly_url: url,
      variant: variant,
      size: size
    });
  };
  return (
    <div>
      <PopupWidget
        url={url}
        rootElement={document.getElementById("root")!}
        text={text}
        textColor="#ffffff"
        color={color}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: color,
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
          utmMedium: 'popup-widget'
        }}
      />
      <Button
        variant={variant}
        size={size}
        className={`${className}`}
        onClick={handleCalendlyClick}
      >
        <Calendar className="h-4 w-4 mr-2" />
        {children}
      </Button>
    </div>
  );
};

export default CalendlyButton; 