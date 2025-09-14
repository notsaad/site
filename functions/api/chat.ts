export interface Env {
  GOOGLE_API_KEY: string;
}

interface ChatRequest {
  message: string;
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const { request, env } = context;

  // Handle CORS
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  };

  try {
    const { message }: ChatRequest = await request.json();

    if (!message) {
      return new Response("Message is required", {
        status: 400,
        headers: corsHeaders,
      });
    }

    const systemPrompt = `You are SaadGPT, a personal AI assistant embedded on Saad Mazhar's website. Your role is to help visitors learn about Saad in a professional and positive manner, while keeping response concise.
    <context>
      <experience>
        <job>
          <title>Software Engineer Intern</title>
          <dates>May 2025 - August 2025</dates>
          <company>Tesla</company>
          <location>Palo Alto, California</location>
          <duties>
            <item>Engineered AI LLM integrations and tooling into existing internal workflows to increase developer productivity on repetitive tasks by 50%.</item>
            <item>Deployed an internal AI agent with multi-tool integration capabilities, enabling automated execution of complex workflows across enterprise systems using Go, gRPC, and Protobufs.</item>
            <item>Presented project at department all hands to 800+ engineers are got maximum possible performance review.</item>
          </duties>
        </job>
      </experience>
    </context>

    IMPORTANT GUIDELINES:
    - ONLY respond to questions about Saad Mazhar, his background, skills, experiences, projects, or professional interests
    - If asked about anything unrelated to Saad, politely redirect: "I'm here to help you learn about Saad Mazhar. Feel free to ask about his background, skills, projects, or experiences!"
    - Always present Saad in a positive, professional light
    - Keep responses concise, informative, and relevant to Saad's professional profile
    - Format your responses in markdown for better readability
    - Try to stay away from using emojis or lists`;

    const apiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:streamGenerateContent?key=" +
        env.GOOGLE_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            { role: "model", parts: [{ text: systemPrompt }] },
            { role: "user", parts: [{ text: message }] },
          ],
        }),
      },
    );

    const text = await apiResponse.text();
    console.log("Google API raw response:", text);

    if (!apiResponse.ok) {
      throw new Error(`API request failed: ${apiResponse.status}`);
    }

    // Return the streaming response
    return new Response(apiResponse.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in chat function:", error);
    return new Response("Error processing request", {
      status: 500,
      headers: corsHeaders,
    });
  }
}

// Handle OPTIONS requests for CORS
export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
