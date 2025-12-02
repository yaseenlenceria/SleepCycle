import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const getSleepInsight = async (
  targetTime: string, 
  mode: 'WAKE' | 'SLEEP'
): Promise<string> => {
  if (!apiKey) {
    return "Consistency is key. Try to wake up at the same time every day to regulate your circadian rhythm.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = mode === 'WAKE' 
      ? `I plan to wake up at ${targetTime}. Give me one short, specific, scientific tip (under 30 words) about morning routines or circadian rhythms for this wake-up time. Do not be chatty.`
      : `I am going to sleep now (around ${targetTime}). Give me one short, specific, scientific tip (under 30 words) to fall asleep faster or improve sleep quality. Do not be chatty.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Sleep is essential for health.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ensure your bedroom is cool, dark, and quiet for the best night's sleep.";
  }
};