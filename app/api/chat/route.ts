import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      { reply: "Oops! My API key is missing. Please add GEMINI_API_KEY to your .env.local file." },
      { status: 500 }
    );
  }

  // Ensure the API key is available
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "Message is required" }, { status: 400 });
    }

    // Using gemini-flash-latest (future proof)
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const systemPrompt = `You are Prajwal's AI Assistant, built to answer questions about him on his portfolio. 
    CRITICAL RULES:
    1. Keep your answers EXTREMELY short and punchy (maximum 2-3 sentences).
    2. Do NOT use any bullet points, asterisks (*), or bold markdown. Use plain text only.
    3. Be friendly and enthusiastic (tech bro vibe). 
    
    Context about Prajwal:
    - B.Tech student in AI & Data Science at G.H. Raisoni College, Nagpur.
    - Fullstack developer & AI Engineer. His core stack is MERN (MongoDB, Express, React, Node), Next.js, TypeScript, and Java.
    - CRITICAL FACT: He DOES NOT use Python. He builds AI apps using APIs and JavaScript/TypeScript.
    - Projects: 'NodeClash' (real-time multiplayer MERN) and 'Tattvam' (nutrition app with barcode scanning).
    - Practices LeetCode daily for DSA.
    
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
