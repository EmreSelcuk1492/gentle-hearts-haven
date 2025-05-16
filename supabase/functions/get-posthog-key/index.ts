
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.6';
import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';

// Define CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Return the PostHog API key (this is safe as it's a publishable key)
    const posthogApiKey = Deno.env.get('POSTHOG_API_KEY');
    
    if (!posthogApiKey) {
      console.error('PostHog API key not found in environment variables');
      return new Response(
        JSON.stringify({ error: 'PostHog API key not configured' }),
        { 
          status: 500, 
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        apiKey: posthogApiKey,
      }),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error('Error retrieving PostHog API key:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
});
