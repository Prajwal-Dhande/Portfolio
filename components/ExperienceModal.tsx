"use client";

import { useState, useEffect } from "react";

interface Slide {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tag: string;
  isCover?: boolean;
  isEnd?: boolean;
}

const slides: Slide[] = [
  { id: "cover", company: "Prajwal Dhande", role: "", period: "", tag: "EXPERIENCE", bullets: [], isCover: true },
  {
    id: "codsoft",
    company: "Codsoft",
    role: "Web Development Intern",
    period: "Dec 2025 — Jan 2026",
    tag: "MERN Stack",
    bullets: [
      "Developed and deployed responsive web applications utilizing MongoDB, Express.js, React, and Node.js.",
      "Optimized database queries and schema designs, significantly improving data retrieval efficiency.",
      "Collaborated on building interactive UIs and maintained a clean, scalable, and modular codebase.",
    ],
  },
  {
    id: "prodigy",
    company: "Prodigy Infotech",
    role: "Machine Learning Intern",
    period: "Jan 2026",
    tag: "Artificial Intelligence",
    bullets: [
      "Completed complex ML tasks including House Price Prediction and advanced Image Classification.",
      "Implemented Computer Vision algorithms and structured scalable data processing pipelines.",
      "Trained and fine-tuned predictive models, enhancing accuracy and evaluation metrics.",
    ],
  },
  {
    id: "hackathon",
    company: "National Level Hackathon",
    role: "Team Leader & Lead Developer",
    period: "Apr 2026",
    tag: "Agile Development",
    bullets: [
      "Led a cross-functional team to build **CodeArena**, a real-time multiplayer coding platform.",
      "Architected the application using WebSockets for live matchmaking and AI for automated constraints.",
      "Managed version control and delegated tasks, ensuring a bug-free project delivery under high-pressure conditions.",
    ],
  },
  { id: "end", company: "Thank you.", role: "", period: "", tag: "", bullets: [], isEnd: true },
];

/* ── Diagram colors — warm portfolio palette ─────────────── */
const C = {
  blue: { fill: "rgba(210,225,245,0.55)", stroke: "rgba(140,170,215,0.75)" },
  purple: { fill: "rgba(220,210,240,0.55)", stroke: "rgba(170,148,220,0.80)" },
  teal: { fill: "rgba(195,225,210,0.55)", stroke: "rgba(130,185,160,0.80)" },
};

function Box({ x, y, w, h, c, label, label2 }: {
  x: number; y: number; w: number; h: number;
  c: { fill: string; stroke: string };
  label: string; label2?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="5" fill={c.fill} stroke={c.stroke} strokeWidth="1" />
      {label2 ? (
        <>
          <text x={x + w / 2} y={y + h / 2 - 5} textAnchor="middle" fill="rgba(44,28,10,0.75)" fontSize="8.5" fontFamily="system-ui,sans-serif">{label}</text>
          <text x={x + w / 2} y={y + h / 2 + 7} textAnchor="middle" fill="rgba(44,28,10,0.75)" fontSize="8.5" fontFamily="system-ui,sans-serif">{label2}</text>
        </>
      ) : (
        <text x={x + w / 2} y={y + h / 2 + 3} textAnchor="middle" fill="rgba(44,28,10,0.75)" fontSize="8.5" fontFamily="system-ui,sans-serif">{label}</text>
      )}
    </g>
  );
}

function VLine({ x, y1, y2 }: { x: number; y1: number; y2: number }) {
  return <line x1={x} y1={y1} x2={x} y2={y2} stroke="rgba(150,120,90,0.28)" strokeWidth="1" />;
}

function CodsoftDiagram() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#EDE8E2", borderRadius: 8, display: "flex", flexDirection: "column", padding: "12px 12px 10px", flex: 1 }}>
      <p style={{ fontSize: 9, fontWeight: 700, color: "rgba(44,28,10,0.38)", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>MERN Stack Workflow</p>
      <svg viewBox="0 0 218 240" style={{ flex: 1, width: "100%", overflow: "visible" }}>
        <Box x={8} y={4} w={202} h={34} c={C.blue} label="React.js / Next.js Frontend UI" />
        <VLine x={109} y1={38} y2={54} />
        <Box x={8} y={54} w={202} h={34} c={C.purple} label="Express.js + Node.js API Layer" />
        <VLine x={109} y1={88} y2={104} />
        <Box x={8} y={104} w={202} h={34} c={C.teal} label="MongoDB Database via Mongoose" />
        <VLine x={109} y1={138} y2={154} />
        <Box x={8} y={154} w={202} h={34} c={C.blue} label="Deployed Application Delivery" />
      </svg>
    </div>
  );
}

function ProdigyDiagram() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#EDE8E2", borderRadius: 8, display: "flex", flexDirection: "column", padding: "12px 12px 10px", flex: 1 }}>
      <p style={{ fontSize: 9, fontWeight: 700, color: "rgba(44,28,10,0.38)", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>ML Pipeline Architecture</p>
      <svg viewBox="0 0 218 260" style={{ flex: 1, width: "100%", overflow: "visible" }}>
        <Box x={8} y={4} w={202} h={34} c={C.blue} label="Raw Image & Housing Data Injection" label2="(Datasets)" />
        <VLine x={109} y1={38} y2={54} />
        <Box x={8} y={54} w={94} h={30} c={C.purple} label="Data Cleaning" />
        <Box x={116} y={54} w={94} h={30} c={C.purple} label="Feature Eng." />
        <VLine x={55} y1={84} y2={100} />
        <VLine x={163} y1={84} y2={100} />
        <Box x={8} y={100} w={202} h={30} c={C.teal} label="Model Training & Fine-Tuning" label2="(Scikit-learn, TensorFlow)" />
        <VLine x={109} y1={130} y2={146} />
        <Box x={8} y={146} w={94} h={30} c={C.blue} label="Predictions" />
        <Box x={116} y={146} w={94} h={30} c={C.purple} label="Evaluation" />
      </svg>
    </div>
  );
}

function HackathonDiagram() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#EDE8E2", borderRadius: 8, display: "flex", flexDirection: "column", padding: "12px 12px 10px", flex: 1 }}>
      <p style={{ fontSize: 9, fontWeight: 700, color: "rgba(44,28,10,0.38)", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>CodeArena Execution</p>
      <svg viewBox="0 0 218 240" style={{ flex: 1, width: "100%", overflow: "visible" }}>
        <Box x={8} y={4} w={202} h={34} c={C.blue} label="CodeArena Platform Architecture" label2="(WebSockets, MERN Stack)" />
        <VLine x={109} y1={38} y2={54} />
        <Box x={8} y={54} w={202} h={34} c={C.purple} label="Real-time Matchmaking Logic" label2="(Socket.io integration)" />
        <VLine x={109} y1={88} y2={104} />
        <Box x={8} y={104} w={202} h={34} c={C.teal} label="AI-Driven Constraint System" />
        <VLine x={109} y1={138} y2={154} />
        <Box x={8} y={154} w={202} h={34} c={C.blue} label="Successful Deployment & Presentation" />
      </svg>
    </div>
  );
}

const diagrams: Record<string, () => React.JSX.Element> = {
  codsoft: CodsoftDiagram,
  prodigy: ProdigyDiagram,
  hackathon: HackathonDiagram,
};

/* ── Slide content ───────────────────────────────────────── */
function SlideContent({ slide, index, total, isMobile }: { slide: Slide; index: number; total: number; isMobile: boolean }) {
  if (slide.isCover) {
    return (
      <div className="slide-cover-content h-full flex flex-col" style={{ background: "linear-gradient(135deg, #F5E8E2 0%, #EDD8D0 100%)", padding: "52px 60px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", color: "rgba(80,40,30,0.38)", textTransform: "uppercase" }}>Portfolio · 2026</p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "rgba(80,40,30,0.45)", textTransform: "uppercase", marginBottom: 18 }}>{slide.tag}</p>
          <div style={{ width: 44, height: 2, background: "rgba(80,40,30,0.18)", borderRadius: 1, marginBottom: 28 }} />
          <h1 style={{ fontSize: 64, fontWeight: 200, color: "#2C1008", lineHeight: 1.0, letterSpacing: "-0.03em", fontFamily: "'Nunito', sans-serif", marginBottom: 18 }}>{slide.company}</h1>
          <p style={{ fontSize: 13, color: "rgba(80,40,30,0.45)", fontWeight: 400 }}>MERN Stack Developer · B.Tech AI</p>
        </div>
        <p style={{ fontSize: 11, color: "rgba(80,40,30,0.28)", fontWeight: 500 }}>{index + 1} of {total}</p>
      </div>
    );
  }

  if (slide.isEnd) {
    return (
      <div style={{ background: "#FAF6F0", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0, height: "100%" }}>
        <p style={{ fontSize: 36, fontWeight: 200, color: "rgba(44,28,10,0.38)", fontStyle: "italic" }}>Thank you. ✨</p>
      </div>
    );
  }

  /* ── Mobile layout: text top half, PNG bottom half ── */
  if (isMobile) {
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#FAF6F0", overflow: "hidden" }}>
        {/* Top: text */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px 12px" }}>
          <span style={{ display: "inline-block", background: "#F0E0DA", color: "#8B4035", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, marginBottom: 12, letterSpacing: "0.04em" }}>
            {slide.tag}
          </span>
          <h2 style={{ fontSize: 20, fontWeight: 300, color: "#2C1008", marginBottom: 3, letterSpacing: "-0.01em", lineHeight: 1.2 }}>{slide.role}</h2>
          <p style={{ fontSize: 9, color: "rgba(44,28,10,0.42)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>{slide.period}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {slide.bullets.map((b) => (
              <div key={b} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: "#C8705A", fontWeight: 700, fontSize: 11, marginTop: 1, flexShrink: 0, lineHeight: 1 }}>–</span>
                <span style={{ fontSize: 11, color: "#3A2010", lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(44,28,10,0.5)", marginTop: 14 }}>{slide.company}</p>
        </div>
        {/* Bottom: PNG diagram */}
        <div style={{ flex: "0 0 50%",minHeight: 80, borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", justifyContent: "center", padding: "5px", background: "#F7F2EB" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/diagrams/${slide.id}.png`} alt="" style={{ width: "90%", height: 240, objectFit: "contain", borderRadius: "12px", top: "10%" }} />
        </div>
      </div>
    );
  }

  /* ── Desktop layout ── */
  const Diagram = diagrams[slide.id];

  return (
    <div className="slide-content-wrap h-full flex" style={{ background: "#FAF6F0" }}>
      {/* Left: text */}
      <div className="slide-text-panel flex flex-col justify-between" style={{ flex: "0 0 56%", padding: "28px 32px 36px" }}>
        <div>
          <span style={{ display: "inline-block", background: "#F0E0DA", color: "#8B4035", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, marginBottom: 14, letterSpacing: "0.04em" }}>
            {slide.tag}
          </span>
          <h2 style={{ fontSize: 24, fontWeight: 300, color: "#2C1008", marginBottom: 4, letterSpacing: "-0.01em", lineHeight: 1.2 }}>{slide.role}</h2>
          <p style={{ fontSize: 10, color: "rgba(44,28,10,0.42)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>{slide.period}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {slide.bullets.map((b) => (
              <div key={b} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                <span style={{ color: "#C8705A", fontWeight: 700, fontSize: 12, marginTop: 1, flexShrink: 0, lineHeight: 1 }}>–</span>
                <span style={{ fontSize: 11.5, color: "#3A2010", lineHeight: 1.55 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-end">
          <p style={{ fontSize: 12, fontWeight: 700, color: "rgba(44,28,10,0.5)" }}>{slide.company}</p>
          <p style={{ fontSize: 10, color: "rgba(44,28,10,0.28)", fontWeight: 500 }}>{index} / {total - 2}</p>
        </div>
      </div>

      {/* Right: diagram */}
      <div className="slide-diagram-panel" style={{ flex: "0 0 44%", borderLeft: "1px solid rgba(0,0,0,0.06)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "14px 10px" }}>
        {Diagram && <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}><Diagram /></div>}
      </div>
    </div>
  );
}

export default function ExperienceModal({ onClose: _ }: { onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const [filmstripOpen, setFilmstripOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mobile = window.innerWidth < 641;
    if (mobile) setFilmstripOpen(false);
    setIsMobile(mobile);
  }, []);
  const total = slides.length;

  return (
    <div className="flex flex-1 overflow-hidden cursor-raise" style={{ background: "#1C1C1C", minHeight: 0, position: "relative" }}>
      {filmstripOpen && (
        <div className="sidebar-backdrop" onClick={() => setFilmstripOpen(false)} style={{ zIndex: 55 }} />
      )}
      {/* Filmstrip */}
      <div className={`exp-filmstrip flex flex-col overflow-y-auto shrink-0${filmstripOpen ? " sidebar-open" : ""}`} style={{ width: 186, background: "#252525", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-2 px-3 py-2.5 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="w-2 h-2 rounded-full" style={{ background: "#FF5F57", flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Experience.key</span>
          <button onClick={() => setFilmstripOpen(false)} style={{ marginLeft: "auto", background: "none", border: "none", color: "rgba(255,255,255,0.35)", fontSize: 16, cursor: "pointer", padding: "0 2px", lineHeight: 1, flexShrink: 0 }} title="Collapse">‹</button>
        </div>
        <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 4 }}>
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              style={{ background: current === i ? "rgba(255,255,255,0.09)" : "transparent", border: current === i ? "1px solid rgba(74,158,232,0.6)" : "1px solid transparent", borderRadius: 6, cursor: "pointer", padding: "6px 8px", textAlign: "left", transition: "background 0.12s ease" }}
            >
              <div style={{ width: "100%", height: 48, borderRadius: 4, background: s.isCover ? "#EDD8D0" : s.isEnd ? "#F0ECE6" : "#F0EBE4", marginBottom: 5, overflow: "hidden", display: "flex", flexDirection: "column", padding: "5px 6px", gap: 3 }}>
                {s.isCover ? (
                  <><div style={{ height: 2, width: "40%", background: "rgba(44,28,10,0.15)", borderRadius: 1 }} /><div style={{ height: 7, width: "75%", background: "rgba(44,28,10,0.2)", borderRadius: 1 }} /></>
                ) : s.isEnd ? (
                  <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ height: 4, width: "50%", background: "rgba(44,28,10,0.12)", borderRadius: 2 }} /></div>
                ) : (
                  <><div style={{ height: 2, width: "45%", background: "#D4A090", borderRadius: 1 }} /><div style={{ height: 5, width: "80%", background: "rgba(44,28,10,0.2)", borderRadius: 1 }} /><div style={{ height: 2, width: "35%", background: "rgba(44,28,10,0.12)", borderRadius: 1 }} /></>
                )}
              </div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.company}</p>
              {s.role && <p style={{ fontSize: 10, color: "rgba(255,255,255,0.38)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.role}</p>}
            </button>
          ))}
        </div>
      </div>

      {/* Main canvas */}
      <div className="flex-1 flex flex-col" style={{ background: "#111111" }}>
        <div className="exp-main-canvas flex-1 flex items-center justify-center" style={{ padding: "28px 36px", position: "relative" }}>
          {/* Hamburger — always visible pill on dark bg */}
          <button
            className="hamburger-btn"
            onClick={() => setFilmstripOpen(true)}
            style={{ position: "absolute", top: 10, left: 10, zIndex: 50, color: "rgba(255,255,255,0.9)", fontSize: 17, background: "rgba(0,0,0,0.55)", borderRadius: 8, padding: "4px 9px", backdropFilter: "blur(4px)" }}
          >☰</button>

          {/* Slide + edge carousel arrows */}
          <div style={{ position: "relative", width: "100%", maxWidth: 620, display: "flex", alignItems: "center" }}>
            {/* Left arrow */}
            <button
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="exp-carousel-arrow exp-carousel-left"
              style={{ position: "absolute", left: -12, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 36, height: 36, borderRadius: 18, background: current === total-1 ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.25)", border: "none", color: current === 0 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255, 1.0)", fontSize: 20, cursor: current === 0 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(2px)", transition: "background 0.15s" }}
            >‹</button>

            <div className="exp-slide-wrapper" style={{ width: "100%", aspectRatio: "16 / 10", borderRadius: 8, overflow: "hidden", boxShadow: "0 12px 48px rgba(0,0,0,0.5)" }}>
              <SlideContent slide={slides[current]} index={current} total={total} isMobile={isMobile} />
            </div>

            {/* Right arrow */}
            <button
              onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
              disabled={current === total - 1}
              className="exp-carousel-arrow exp-carousel-right"
              style={{ position: "absolute", right: -12, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 36, height: 36, borderRadius: 18, background: current === total-1 ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.25)", border: "none", color: current === total - 1 ? "rgba(255,255,255,0.5)" : "rgb(255, 255, 255)", fontSize: 20, cursor: current === total - 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", transition: "background 0.15s" }}
            >›</button>
          </div>
        </div>

        {/* Bottom counter */}
        <div className="flex items-center justify-center pb-4 shrink-0">
          <div style={{ background: "rgba(0,0,0,0.5)", borderRadius: 16, padding: "3px 14px" }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>{current + 1} / {total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}