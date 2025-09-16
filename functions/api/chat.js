export async function onRequestPost(context) {
  const { request, env } = context;

  // Handle CORS
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  };

  try {
    const { message } = await request.json();

    if (!message) {
      return new Response("Message is required", {
        status: 400,
        headers: corsHeaders,
      });
      }

    // TODO: fill the rest of this out
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
      <education>
        Honors Bachelors of Computer Science at the University of Ottawa, with a Minor in Philosophy. Graduting April 2026. Previously on the honour roll and dean's list. Saad has a 3.5 GPA
      </education>
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
          system_instruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [
            { role: "user", parts: [{ text: message }] },
          ],
        }),
      },
    );

    if (!apiResponse.ok) {
      throw new Error(`API request failed: ${apiResponse.status}`);
    }

    const upstreamBody = apiResponse.body;

    if (!upstreamBody) {
      throw new Error("No response body received from Gemini");
    }

    const stream = new ReadableStream({
      start(controller) {
        const reader = upstreamBody.getReader();
        const decoder = new TextDecoder();
        const encoder = new TextEncoder();
        let buffer = "";

        const emitFromPayload = (payload) => {
          const parts = payload?.candidates?.[0]?.content?.parts ?? [];
          for (const part of parts) {
            if (typeof part.text === "string" && part.text.length > 0) {
              controller.enqueue(encoder.encode(part.text));
            }
          }
        };

        const processBuffer = () => {
          let current = buffer;

          while (true) {
            const firstBrace = current.indexOf("{");
            if (firstBrace === -1) {
              buffer = current;
              return;
            }

            if (firstBrace > 0) {
              current = current.slice(firstBrace);
            }

            let depth = 0;
            let inString = false;
            let isEscaped = false;
            let endIndex = -1;

            for (let i = 0; i < current.length; i++) {
              const char = current[i];

              if (inString) {
                if (isEscaped) {
                  isEscaped = false;
                  continue;
                }

                if (char === "\\") {
                  isEscaped = true;
                } else if (char === "\"") {
                  inString = false;
                }
                continue;
              }

              if (char === "\"") {
                inString = true;
                continue;
              }

              if (char === "{") {
                depth += 1;
                continue;
              }

              if (char === "}") {
                depth -= 1;
                if (depth === 0) {
                  endIndex = i;
                  break;
                }
              }
            }

            if (endIndex === -1) {
              buffer = current;
              return;
            }

            const jsonChunk = current.slice(0, endIndex + 1);
            current = current.slice(endIndex + 1).replace(/^[\s,\]]*/, "");

            try {
              emitFromPayload(JSON.parse(jsonChunk));
            } catch (parseError) {
              console.error("Failed to parse stream chunk", parseError);
            }
          }
        };

        const pump = () =>
          reader
            .read()
            .then(({ value, done }) => {
              if (done) {
                buffer += decoder.decode();
                processBuffer();
                controller.close();
                return;
              }

              buffer += decoder.decode(value, { stream: true });
              processBuffer();
              return pump();
            })
            .catch((streamError) => {
              console.error("Error reading Gemini stream", streamError);
              controller.error(streamError);
            });

        pump();
      },
    });

    return new Response(stream, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
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
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
