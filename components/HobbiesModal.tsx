"use client";

import React, { useState } from "react";

const hobbies = [
  {
    id: "leetcode",
    title: "DSA & Problem Solving",
    desc: "My daily brain workout. I maintain a strict problem-solving routine on LeetCode. There's a unique kind of adrenaline rush and satisfaction in optimizing an algorithm, dropping the time complexity, and seeing all those green 'Accepted' test cases.",
  },
  {
    id: "marvel",
    title: "Marvel Universe",
    desc: "I am a massive MCU fanboy, specifically when it comes to Iron Man and Thor ⚡🤖. Whether it's Tony Stark's tech genius or Thor's epic lightning entrances, I can rewatch their movies anytime to recharge and can probably quote half the dialogue.",
  },
  {
    id: "german",
    title: "Learning German",
    desc: "Guten Tag! I've been diving into a completely different kind of syntax lately—the German language. I recently secured my A1-level certification from IIT Guwahati via NPTEL, and I'm really enjoying the challenge of mastering it. ✨",
  },
  {
    id: "ncc",
    title: "NCC & Discipline",
    desc: "Holding an NCC A-grade certificate has instilled a lot of discipline and leadership skills in me. When I'm not glued to a screen building MERN apps or training ML models, I rely on this discipline to stay focused, active, and lead teams effectively during Hackathons.",
  },
];

function DocCard({ hobby, onClick }: { hobby: typeof hobbies[0]; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform"
      style={{ background: "none", border: "none", padding: 0, width: "100%", cursor: "pointer" }}
    >
      {/* Document thumbnail */}
      <div
        style={{
          width: "100%",
          height: 148,
          background: "white",
          borderRadius: 6,
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
          padding: "12px 14px",
          position: "relative",
          textAlign: "left",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
        }}
        className="hover:shadow-md"
      >
        {/* Dog-ear */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 20,
            height: 20,
            background: "#EDE8E2",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          }}
        />
        <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1208", marginBottom: 28 }}>{hobby.title}</p>
        <p style={{ fontSize: 10, color: "rgba(26,18,8,0.45)", lineHeight: 1.5 }}>
          {hobby.desc.slice(0, 80)}…
        </p>
      </div>
      <div className="text-center mt-1">
        <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1208" }}>{hobby.title}</p>
      </div>
    </button>
  );
}

export default function HobbiesModal({ onClose: _ }: { onClose: () => void }) {
  const [detail, setDetail] = useState<typeof hobbies[0] | null>(null);

  return (
    <div className="flex-1 overflow-y-auto" style={{ background: "#FDFAF5", padding: "32px 36px" }}>
        {detail ? (
          <>
            <button
              onClick={() => setDetail(null)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "rgba(0,0,0,0.45)", fontWeight: 600, marginBottom: 24, display: "flex", alignItems: "center", gap: 4 }}
            >
              ‹ Back to Hobbies
            </button>
            <h1 style={{ fontSize: 36, fontWeight: 700, color: "#1A1208", marginBottom: 8 }}>{detail.title}</h1>
            <p style={{ fontSize: 14, color: "rgba(26,18,8,0.4)", marginBottom: 28, fontWeight: 500 }}> </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#2C1C0A" }}>{detail.desc}</p>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: 32, fontWeight: 700, color: "#1A1208", marginBottom: 6 }}>Hobbies</h1>
            <p style={{ fontSize: 14, color: "rgba(26,18,8,0.45)", marginBottom: 36, fontWeight: 500 }}>
              Things I make time for outside of the code editor.
            </p>
            {/* Grid for Hobby Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "24px" }}>
              {hobbies.map((h) => (
                <DocCard key={h.id} hobby={h} onClick={() => setDetail(h)} />
              ))}
            </div>
          </>
        )}
    </div>
  );
}