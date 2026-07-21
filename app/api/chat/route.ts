import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Ensure the API key is available
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      { reply: "Oops! My API key is missing. Please add GEMINI_API_KEY to your .env.local file." },
      { status: 500 }
    );
  }

  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "Message is required" }, { status: 400 });
    }

    // Using gemini-flash-latest for fast text responses
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const systemPrompt = `You are Prajwal's AI Assistant, built to answer questions about him on his portfolio. 
    Keep your answers brief, friendly, and enthusiastic (like a tech bro). 
    Here is some context about Prajwal:
    - He is a B.Tech student in AI & Data Science at G.H. Raisoni College, Nagpur.
    - He is a Fullstack developer and AI Engineer.
    - Notable projects: 'NodeClash' (real-time multiplayer coding platform using WebSockets & MERN) and 'Tattvam' (nutritional analysis app with barcode scanning).
    - He has experience building ML pipelines and predictive models.
    - He practices LeetCode daily for DSA.
    
    User asked: ${message}`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { reply: "Sorry, my brain is having some trouble connecting right now." },
      { status: 500 }
    );
  }
}
