import axios from "axios";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const groq = axios.create({
  baseURL: "https://api.groq.com/openai/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${GROQ_API_KEY}`,
  },
});

export const generateItinerary = async (prompt) => {
  try {
    const response = await groq.post("/chat/completions", {
      model: "llama3-8b-8192", // You can change to "llama3-70b-8192" if needed
      messages: [
        {
          role: "system",
          content:
            "You are a helpful travel assistant who generates personalized, well-structured travel itineraries.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("❌ Groq API error:", error);
    if (error.response) {
      console.error("🚨 Response Status:", error.response.status);
      console.error("🚨 Response Data:", error.response.data);
      console.error("🚨 Response Headers:", error.response.headers);
    }
    return "Something went wrong while generating your itinerary.";
  }
};
