import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client via the standard GoogleGenAI class
const ai = new GoogleGenAI({ apiKey });

export const generateWorkoutAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please check your environment configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are 'Coach VFC', an elite performance trainer for VFC Crafting Fitness Club in Nanded, Maharashtra.
        Your gym is located at Opp. Kisan Mall, Shivaji Nagar.
        Your tone is motivating, energetic, and professional.
        If asked about location, always refer to Opp. Kisan Mall, Shivaji Nagar.
        Keep answers concise (under 100 words).
        Focus on strength, weight loss, and general fitness advice suitable for gym members.`,
        thinkingConfig: { thinkingBudget: 0 } // Low latency priority
      },
    });

    return response.text || "Systems offline. Try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. Focus on your breathing and try again.";
  }
};