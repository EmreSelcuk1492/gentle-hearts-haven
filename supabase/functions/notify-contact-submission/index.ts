
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Contact submission interface
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  country_code: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submission: ContactSubmission = await req.json();
    
    // Format phone with country code
    const formattedPhone = `${submission.country_code} ${submission.phone}`;
    
    // Create readable timestamp
    const timestamp = new Date().toLocaleString();

    // Send notification email to the client
    const emailResponse = await resend.emails.send({
      from: "Contact Form Notification <onboarding@resend.dev>",
      to: ["ThreeClairs@outlook.com"],
      subject: `New Contact Form Submission from ${submission.name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p>You received a new contact form submission on your website at ${timestamp}.</p>
        
        <h2>Contact Details:</h2>
        <ul>
          <li><strong>Name:</strong> ${submission.name}</li>
          <li><strong>Email:</strong> ${submission.email}</li>
          <li><strong>Phone:</strong> ${formattedPhone}</li>
        </ul>
        
        <h2>Message:</h2>
        <p>${submission.message}</p>
        
        <hr>
        <p>You can respond directly to this person by replying to their email: ${submission.email}</p>
      `,
    });

    console.log("Notification email sent:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending notification email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
