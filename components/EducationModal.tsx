"use client";

import React, { useState } from "react";

const books = [
  {
    id: "btech",
    years: "2022–2026",
    degree: "B.Tech., Artificial Intelligence",
    school: "G.H. Raisoni College, Nagpur",
    color: "#4A6FA5",
    highlights: [
      "Specializing in AI architectures and Machine Learning models",
      "Building scalable full-stack applications (MERN Stack)",
      "Focusing on Deep Learning and Computer Vision research",
      "Consistent academic performance in core technical subjects"
    ],
    coursework: [
      "Data Structures and Algorithms (DSA)",
      "Neural Networks & Deep Learning",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Software Engineering",
    ],
  },
  {
    id: "extra",
    years: "Leadership",
    degree: "Extra-Curricular Activities",
    school: "NCC & Hackathons",
    color: "#7A4040",
    highlights: [
      "Proud holder of an NCC A-grade Certificate (Discipline & Leadership)",
      "Team Leader at [Prototype 3.0] Hackathon organized by Nagpur NEXT",
      "Successfully led the 8-hour innovation & prototyping event",
      "Maintains a daily DSA problem-solving routine on LeetCode",
    ],
    coursework: [
      "NCC Leadership & Discipline Training",
      "Team Management & Agile Prototyping",
      "National Level Technical Competitions",
      "Community Engagement",
    ],
    image: "/hackathon.jpeg"
  },
  {
    id: "certs",
    years: "Credentials",
    degree: "Professional Certifications",
    school: "Verified Skills",
    color: "#5A7A60", 
    highlights: [
      { name: "German - I Certification (NPTEL - IIT Madras)", file: "/German.jpeg" },
      { name: "Alpha: DSA with Java (Apna College)", file: "/DSA_with_java.jpeg" },
      { name: "Introduction to Artificial Intelligence (Simplilearn)", file: "/AI.jpeg" },
      { name: "Introduction to Generative AI (Google Cloud)", file: "/generative_AI.jpeg" },
      { name: "Prototype 3.0 Hackathon Certificate", file: "/hackathon.jpeg" },
    ],
    coursework: [
      "Java & Advanced DSA",
      "Generative AI & LLM Basics",
      "German Language (A1 Level)",
      "MERN Stack Development",
    ],
  },
];

export default function EducationModal({ onClose: _ }: { onClose: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const active = books.find((b) => b.id === selected);

  return (
    <div className="flex-1 overflow-y-auto" style={{ background: "#F9F5EF" }}>
        <div style={{ padding: "32px 40px 20px" }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: "#1A1208", marginBottom: 6 }}>
            Education & Credentials
          </h1>
          <p style={{ fontSize: 15, color: "rgba(26,18,8,0.45)", marginBottom: 36, fontWeight: 500 }}>
            Click a book to view my academic journey and professional certificates.
          </p>

          {/* Book spines */}
          <div className="flex gap-5 mb-0 overflow-x-auto pb-4" style={{scrollbarWidth: 'none'}}>
            {books.map((book) => (
              <button
                key={book.id}
                onClick={() => setSelected(selected === book.id ? null : book.id)}
                style={{
                  width: 160,
                  height: 220,
                  borderRadius: 6,
                  background: book.color,
                  border: selected === book.id ? "3px solid rgba(255,255,255,0.5)" : "3px solid transparent",
                  cursor: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><text y='26' font-size='24'>📑</text></svg>\") 4 4, pointer",
                  padding: "20px 16px",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  boxShadow: "4px 4px 12px rgba(0,0,0,0.18)",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  transform: selected === book.id ? "translateY(-6px)" : "translateY(0)",
                  flexShrink: 0,
                }}
              >
                <div style={{ position: "absolute", top: 0, right: 20, width: 12, height: 30, background: "#E8A09A", clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)" }} />
                <div>
                  <p style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", fontWeight: 600, marginBottom: 8 }}>{book.years}</p>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", lineHeight: 1.25 }}>{book.degree}</h3>
                </div>
                <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>{book.school.split(",")[0]}</p>
              </button>
            ))}
          </div>
        </div>

        <div style={{ height: 10, background: "#C4A882", margin: "0 0 28px", boxShadow: "0 3px 8px rgba(0,0,0,0.12)" }} />

        {active ? (
          <div className="grid grid-cols-2 gap-6 px-10 pb-12" style={{ marginTop: 4, marginLeft: 24, marginRight: 24, marginBottom: 10 }}>
            <div style={{ background: "white", borderRadius: 14, padding: "24px 28px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(0,0,0,0.35)", marginBottom: 6, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Highlights
              </p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1208", marginBottom: 16 }}>{active.degree}</p>
              <ul style={{ listStyle: "disc", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                {active.highlights.map((h, i) => (
                  <li key={i} style={{ fontSize: 13.5, color: "#2C1C0A", lineHeight: 1.55 }}>
                    {typeof h === 'string' ? h : (
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{h.name}</span>
                        <span 
                          onClick={() => window.open(h.file, '_blank')}
                          style={{ color: '#007ACC', fontSize: 11, fontWeight: 700, cursor: 'pointer', marginLeft: 8, background: '#F0F7FF', padding: '2px 6px', borderRadius: 4, border: '1px solid #C2DFFF' }}
                        >
                          View 👁️
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "white", borderRadius: 14, padding: "24px 28px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(0,0,0,0.35)", marginBottom: 6, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Focus Areas
              </p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1208", marginBottom: 16 }}>Technical Curriculum</p>
              <ul style={{ listStyle: "disc", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                {active.coursework.map((c, i) => (
                  <li key={i} style={{ fontSize: 13.5, color: "#2C1C0A", lineHeight: 1.55 }}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p style={{ fontSize: 14, color: "rgba(0,0,0,0.35)", textAlign: "center", padding: "0 0 40px", fontStyle: "italic" }}>
            Select a book from the shelf above to view details.
          </p>
        )}
    </div>
  );
}