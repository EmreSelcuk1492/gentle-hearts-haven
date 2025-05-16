import { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import { supabase } from '@/integrations/supabase/client';

interface PostHogHookResult {
  isLoaded: boolean;
  error: Error | null;
}

export function usePostHog(): PostHogHookResult {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initializePostHog = async () => {
      try {
        // Get the PostHog API key from our edge function
        const { data, error: keyError } = await supabase.functions.invoke('get-posthog-key');
        
        if (keyError || !data?.apiKey) {
          throw new Error(keyError?.message || 'Failed to retrieve PostHog API key');
        }

        // Initialize PostHog with the API key
        posthog.init(data.apiKey, {
          api_host: 'https://app.posthog.com',
          capture_pageview: true,
          persistence: 'localStorage',
          loaded: (posthog) => {
            // Enable session recording
            posthog.startSessionRecording();
          },
          // Session recording configuration
          session_recording: {
            maskAllInputs: true, // Mask all input fields for privacy
            maskTextSelector: '[data-ph-mask]', // Custom selector for masking text
          },
          // Autocapture configuration
          autocapture: {
            url_allowlist: ['localhost', 'gentle-hearts-haven'], // Only capture on these domains
          },
          // Advanced configuration
          advanced_disable_decide: false, // Enable feature flags
          bootstrap: {
            distinctID: undefined, // Will be set automatically
            isIdentifiedID: false,
            featureFlags: {},
          },
          // Debug mode in development
          debug: process.env.NODE_ENV === 'development',
        });

        console.log('PostHog initialized successfully');
        setIsLoaded(true);
      } catch (initError) {
        console.error('Failed to initialize PostHog:', initError);
        setError(initError instanceof Error ? initError : new Error(String(initError)));
      }
    };

    initializePostHog();

    // Cleanup function
    return () => {
      if (isLoaded) {
        console.log('Cleaning up PostHog resources');
        posthog.stopSessionRecording();
      }
    };
  }, []);

  return { isLoaded, error };
}
