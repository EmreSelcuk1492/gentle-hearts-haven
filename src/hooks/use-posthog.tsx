
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
          // Enable session recording
          session_recording: {
            enabled: true,
            recordCrossOriginIframes: false,
          },
          capture_pageview: true,
          // You can add more configuration options here
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
      // PostHog doesn't have a specific shutdown method, but we can release resources
      if (isLoaded) {
        console.log('Cleaning up PostHog resources');
        // Any cleanup code if needed
      }
    };
  }, []);

  return { isLoaded, error };
}
