import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { form_type, data } = await req.json();

    if (!form_type || !data) {
      return new Response(
        JSON.stringify({ error: "form_type and data are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!["candidate", "client", "contact", "feedback"].includes(form_type)) {
      return new Response(
        JSON.stringify({ error: "Invalid form_type" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase
      .from("form_submissions")
      .insert({ form_type, data });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Forward to webhook (feedback uses dedicated URL)
    const webhookUrl =
      form_type === "feedback"
        ? Deno.env.get("FEEDBACK_WEBHOOK_URL")
        : Deno.env.get("N8N_WEBHOOK_URL");
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ form_type, data, submitted_at: new Date().toISOString() }),
        });
        console.log("Webhook response status:", webhookResponse.status);
        await webhookResponse.text();
      } catch (webhookError) {
        console.error("Webhook error:", webhookError);
        // Don't fail the request if webhook fails
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
