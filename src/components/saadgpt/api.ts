export async function* callAPI(userMessage: string) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new Error("No response body");
    }

    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      buffer += chunk;

      // Process complete JSON objects
      let newlineIndex;
      while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
        const line = buffer.slice(0, newlineIndex);
        buffer = buffer.slice(newlineIndex + 1);

        if (line.trim()) {
          try {
            // Parse JSON response from Gemini API
            const parsed = JSON.parse(line);
            if (parsed.candidates?.[0]?.content?.parts?.[0]?.text) {
              yield parsed.candidates[0].content.parts[0].text;
            }
          } catch (parseError) {
            // If it's not JSON, yield as plain text
            yield line;
          }
        }
      }
    }

    // Process any remaining buffer
    if (buffer.trim()) {
      try {
        const parsed = JSON.parse(buffer);
        if (parsed.candidates?.[0]?.content?.parts?.[0]?.text) {
          yield parsed.candidates[0].content.parts[0].text;
        }
      } catch (parseError) {
        yield buffer;
      }
    }
  } catch (error) {
    yield "Error: Could not generate a response.";
  }
}
