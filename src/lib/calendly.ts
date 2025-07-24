// Calendly configuration utility
export const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/threeclairs/30min';

// Validate Calendly URL format
export const isValidCalendlyUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname === 'calendly.com' && urlObj.pathname.length > 1;
  } catch {
    return false;
  }
};

// Get Calendly URL with fallback
export const getCalendlyUrl = (): string => {
  if (isValidCalendlyUrl(CALENDLY_URL)) {
    return CALENDLY_URL;
  }
  
  console.warn('Invalid Calendly URL in environment variables, using fallback');
  return 'https://calendly.com/threeclairs/30min';
}; 