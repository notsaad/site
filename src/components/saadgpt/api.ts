import { GoogleGenAI } from "@google/genai";

export async function callAPI() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "What is the capital of Belarus?",
    config: {
      thinkingConfig: {
        thinkingBudget: 0,
      },
    },
  });
  return response.text;
}
