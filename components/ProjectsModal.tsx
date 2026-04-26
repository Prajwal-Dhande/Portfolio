"use client";

import { useState, useEffect } from "react";

export interface Project {
  id: string;
  initials: string;
  color: string;
  name: string;
  year: string;
  categories: string[];
  desc: string;
  tech: string[];
  github?: string;
  live?: string;
  readme: ([] | [string, string])[][];
}

export const projects: Project[] = [
  {
    id: "tattvam",
    initials: "TV",
    color: "#6A9A70",
    name: "Tattvam",
    year: "2026",
    categories: ["MERN Stack", "Fullstack"],
    desc: "A web-based nutritional analysis application that scans ingredients and provides health-based 'Nutri-Grades' for consumer awareness.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    github: "https://github.com/Prajwal-Dhande/Tattvam/releases/tag/v1.0.0",
    live: "#",
    readme: [
      [["comment", "// README.md — Tattvam Nutritional Analyzer"]],
      [[]],
      [["header", "# Tattvam 🌿"]],
      [[]],
      [["text", "Web-based nutritional analysis platform providing automated"]],
      [["text", "'Nutri-Grades' based on deep ingredient scanning."]],
      [[]],
      [["header2", "## Stack"]],
      [[]],
      [["keyword", "let "], ["text", "frontend  "], ["operator", "= "], ["string", '"React.js + Tailwind CSS"']],
      [["keyword", "let "], ["text", "backend   "], ["operator", "= "], ["string", '"Node.js + Express.js"']],
      [["keyword", "let "], ["text", "database  "], ["operator", "= "], ["string", '"MongoDB (Mongoose Schema)"']],
      [[]],
      [["header2", "## Features"]],
      [[]],
      [["text", "- Real-time ingredient scanning and health risk assessment"]],
      [["text", "- Proprietary algorithm to generate dynamic 'Nutri-Grades'"]],
      [["text", "- User dashboards to track scanned products and diet history"]],
      [["text", "- Optimized MongoDB queries for fast product retrieval"]],
      [[]],
      [["comment", "// Core Logic: scan(ingredients) => return calculateGrade(toxins, nutrients)"]],
    ],
  },
  {
    id: "codearena",
    initials: "CA",
    color: "#7060B8",
    name: "CodeArena",
    year: "2026",
    categories: ["Fullstack", "WebSockets"],
    desc: "A real-time multiplayer coding platform utilizing WebSockets for live matchmaking and AI-driven constraints for competitive programming.",
    tech: ["Next.js", "Node.js", "Socket.io", "MongoDB", "AI Prompts"],
    github: "https://github.com/Prajwal-Dhande/CodeArena",
    live: "#",
    readme: [
      [["comment", "// README.md — CodeArena"]],
      [[]],
      [["header", "# CodeArena ⚔️"]],
      [[]],
      [["text", "Real-time multiplayer coding battleground built for developers."]],
      [["text", "Compete live with AI-driven constraints and instant matchmaking."]],
      [[]],
      [["header2", "## Architecture"]],
      [[]],
      [["text", "- Live execution environments utilizing WebSocket streams"]],
      [["text", "- AI engine generates dynamic edge-cases and constraints"]],
      [["text", "- State synchronization across clients with sub-50ms latency"]],
      [[]],
      [["header2", "## Stack"]],
      [[]],
      [["keyword", "const "], ["text", "client    "], ["operator", "= "], ["string", '"Next.js + Monaco Editor"']],
      [["keyword", "const "], ["text", "server    "], ["operator", "= "], ["string", '"Node.js + Socket.io"']],
      [["keyword", "const "], ["text", "engine    "], ["operator", "= "], ["string", '"Dockerized Code Execution + AI"']],
      [[]],
      [["header2", "## Matchmaking"]],
      [[]],
      [["comment", "// socket.on('join_queue', (user) => matchBasedOnElo(user))"]],
    ],
  },
  {
    id: "pixelbrain",
    initials: "PB",
    color: "#E25A84",
    name: "pixel-brain",
    year: "2026",
    categories: ["AI / ML", "Computer Vision"],
    desc: "A lightweight, AI-powered computer vision and image processing wrapper for Node.js simplifying operations like smart WebP compression and salient region cropping.",
    tech: ["JavaScript", "Node.js", "AI APIs", "Computer Vision"],
    github: "https://github.com/Prajwal-Dhande/pixel-brain",
    readme: [
      [["comment", "// README.md — Pixel-Brain"]],
      [[]],
      [["header", "# Pixel-Brain 🧠"]],
      [[]],
      [["text", "Pixel-Brain is a lightweight, AI-powered computer vision and"]],
      [["text", "image processing wrapper for Node.js. It simplifies complex image operations"]],
      [["text", "like structural edge extraction and AI-based cropping into easy-to-use functions."]],
      [[]],
      [["header2", "## Features ✨"]],
      [[]],
      [["text", "- 📦 Smart Compression: Convert heavy images to optimized WebP format with zero headache."]],
      [["text", "- 👁️ Edge Extraction: Apply convolution kernels to extract structural outlines."]],
      [["text", "- 🎯 AI Smart Crop: Uses saliency detection algorithms to intelligently crop images."]],
      [[]],
      [["header2", "## Installation 🚀"]],
      [[]],
      [["keyword", "npm "], ["text", "install "], ["string", "pixel-brain"]],
    ],
  },
  {
    id: "portfolio",
    initials: "PD",
    color: "#3A5A7A",
    name: "Developer Portfolio",
    year: "2026",
    categories: ["MERN Stack", "Fullstack"],
    desc: "My interactive developer portfolio built with React/Next.js, mimicking a desktop IDE environment with custom Markdown syntax highlighting.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "#",
    live: "#",
    readme: [
      [["comment", "// README.md — Developer Portfolio"]],
      [[]],
      [["header", "# Prajwal Dhande — Portfolio"]],
      [[]],
      [["text", "MERN Stack Developer & AI Enthusiast."]],
      [["text", "Building scalable backends and intelligent systems."]],
      [[]],
      [["header2", "## About"]],
      [[]],
      [["text", "This portfolio mimics a code editor to showcase my projects."]],
      [["text", "Includes custom parsers for syntax highlighting and modal routing."]],
      [[]],
      [["header2", "## Stack"]],
      [[]],
      [["keyword", "import "], ["text", "{ NextJS } "], ["keyword", "from "], ["string", '"framework"']],
      [["keyword", "import "], ["text", "{ Tailwind } "], ["keyword", "from "], ["string", '"styles"']],
    ],
  }
];

const allCategories = ["All", "MERN Stack", "Fullstack", "AI / ML", "Computer Vision", "WebSockets"];

export const tokenColors: Record<string, string> = {
  comment: "#6A9F6A",
  header: "#D4875A",
  header2: "#D4875A",
  keyword: "#C792EA",
  text: "#CDD3DE",
  operator: "#89DDFF",
  string: "#C3E88D",
};

export function VSCodeView({ project, onBack }: { project: Project; onBack: () => void }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [backHover, setBackHover] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="flex flex-col cursor-techie" style={{ background: "#1E1E1E", color: "#CDD3DE", height: "100%", minHeight: 0 }}>
      {/* Tab bar */}
      <div
        className="flex items-center justify-between shrink-0"
        style={{ background: "#252526", borderBottom: "1px solid #1A1A1A", height: 40 }}
      >
        <div className="flex items-center h-full" style={{ gap: 2, paddingLeft: 4 }}>
          {/* Hamburger toggle */}
          <button
            onClick={() => setSidebarOpen((o) => !o)}
            style={{ width: 26, height: 26, borderRadius: "50%", background: sidebarOpen ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "rgba(255,255,255,0.75)", flexShrink: 0, marginRight: 6, transition: "background 0.15s" }}
            title="Toggle Explorer"
          >☰</button>
          <div
            className="flex items-center gap-2 h-full"
            style={{
              background: "#1E1E1E",
              borderRight: "1px solid #1A1A1A",
              borderTop: "2px solid #007ACC",
              padding: isMobile ? "0 8px" : "0 16px",
            }}
          >
            <button
              type="button"
              className="back-button"
              onClick={onBack}
              onMouseEnter={() => setBackHover(true)}
              onMouseLeave={() => setBackHover(false)}
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#CDD3DE",
                textDecoration: "none",
                background: backHover
                  ? "rgba(255,255,255,0.14)"
                  : "rgba(255,255,255,0.08)",
                border: backHover
                  ? "1px solid rgba(255,255,255,0.24)"
                  : "1px solid rgba(255,255,255,0.14)",
                borderRadius: 5,
                padding: "4px 12px",
                fontFamily: "'Nunito', sans-serif",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              ‹ {isMobile ? "Back" : "Back to projects"}
            </button>
            <span style={{ fontSize: 11, color: "#CDD3DE" }}>📄 README.md</span>
          </div>
        </div>
        {/* Link buttons in tab bar */}
        <div className="flex items-center gap-2" style={{ paddingRight: 12 }}>
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink("github")}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#CDD3DE",
                textDecoration: "none",
                background: hoveredLink === "github" ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.08)",
                border: hoveredLink === "github" ? "1px solid rgba(255,255,255,0.24)" : "1px solid rgba(255,255,255,0.14)",
                borderRadius: 5,
                padding: "4px 12px",
                fontFamily: "'Nunito', sans-serif",
                cursor: "pointer !important",
                transition: "all 0.15s ease",
              }}
            >
              {isMobile ? "GitHub" : "GitHub ↗"}
            </a>
          )}

          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink("live")}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#CDD3DE",
                textDecoration: "none",
                background: hoveredLink === "live" ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.08)",
                border: hoveredLink === "live" ? "1px solid rgba(255,255,255,0.24)" : "1px solid rgba(255,255,255,0.14)",
                borderRadius: 5,
                padding: "4px 12px",
                fontFamily: "'Nunito', sans-serif",
                cursor: "pointer !important",
                transition: "all 0.15s ease",
              }}
            >
              {isMobile ? "Live" : "Live ↗"}
            </a>
          )}
        </div>
      </div>

      {/* Breadcrumb path bar */}
      <div style={{ height: 26, background: "#1E1E1E", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", padding: "0 16px", gap: 5, fontFamily: "'Nunito', sans-serif", flexShrink: 0 }}>
        <span style={{ fontSize: 11, color: "#858585" }}>📁</span>
        <span style={{ fontSize: 11, color: "#858585" }}>{project.name}</span>
        <span style={{ fontSize: 11, color: "#555", margin: "0 1px" }}>›</span>
        <span style={{ fontSize: 11, color: "#CDD3DE" }}>README.md</span>
      </div>

      <div className="flex overflow-hidden" style={{ flex: "1 1 0", minHeight: 0 }}>
        {/* Sidebar — collapsible */}
        <div
          className="flex flex-col shrink-0 overflow-y-auto"
          style={{ width: sidebarOpen ? 220 : 0, background: "#252526", borderRight: sidebarOpen ? "1px solid #1A1A1A" : "none", overflow: "hidden", transition: "width 0.22s ease", flexShrink: 0 }}
        >
          <div style={{ padding: "14px 16px 8px" }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#BBBBBB", letterSpacing: "0.1em", marginBottom: 12, textTransform: "uppercase" }}>
              Explorer
            </p>
            <div>
              <p style={{ fontSize: 11, color: "#CCCCCC", fontWeight: 700, marginBottom: 6, letterSpacing: "0.03em" }}>
                ▾ {project.name.toUpperCase().replace(/\s/g, "-")}
              </p>
              {[
                { name: "README.md", icon: "📄", color: "#CDD3DE", active: true },
                { name: "index.js", icon: "💛", color: "#F7DF1E", active: false },
                { name: "package.json", icon: "📦", color: "#A6E3A1", active: false },
                { name: ".env", icon: "⚙️", color: "#F38BA8", active: false },
                { name: ".gitignore", icon: "🔒", color: "#6C7086", active: false },
              ].map((f) => (
                <div
                  key={f.name}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "4px 10px 4px 14px",
                    borderRadius: 4,
                    background: f.active ? "rgba(255,255,255,0.09)" : "transparent",
                    cursor: "default",
                    marginBottom: 1,
                  }}
                >
                  <span style={{ fontSize: 12 }}>{f.icon}</span>
                  <span style={{ fontSize: 12, color: f.active ? "#CDD3DE" : "#858585", fontFamily: "'JetBrains Mono', monospace" }}>{f.name}</span>
                </div>
              ))}

              <p style={{ fontSize: 10, fontWeight: 700, color: "#585B70", letterSpacing: "0.08em", marginTop: 16, marginBottom: 6, textTransform: "uppercase" }}>
                Tech Stack
              </p>
              {project.tech.map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, padding: "3px 10px 3px 14px", marginBottom: 1 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#89B4FA", flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: "#A6ADB8", fontFamily: "'Nunito', sans-serif" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Code area */}
        <div className="flex overflow-hidden" style={{ flex: "1 1 0", minWidth: 0, overflowY: "auto" }}>
          {/* Line numbers */}
          <div
            className="shrink-0 select-none"
            style={{ width: 50, background: "#1E1E1E", borderRight: "1px solid rgba(255,255,255,0.04)", paddingTop: 14 }}
          >
            {project.readme.map((_, i) => (
              <div
                key={i}
                style={{
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: 14,
                  fontSize: 11.5,
                  color: "#45475A",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code content */}
          <div className="flex-1 overflow-x-auto" style={{ paddingTop: 14, paddingBottom: 20 }}>
            {project.readme.map((line, i) => (
              <div
                key={i}
                style={{
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 24,
                  paddingRight: 32,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12.5,
                  whiteSpace: "nowrap",
                }}
              >
                {(line as [string, string][]).map(([cls, txt], j) => (
                  <span key={j} style={{ color: tokenColors[cls as string] ?? "#CDD3DE" }}>
                    {txt}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div
        className="flex items-center justify-between shrink-0"
        style={{ height: 32, background: "#007ACC", padding: "0 12px" }}
      >
        <div className="flex items-center gap-3">
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>⎇ main</span>
        </div>
        <div className="flex items-center gap-4">
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>UTF-8</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>Markdown</span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsModal({ onClose: _ }: { onClose: () => void }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 641) setSidebarOpen(false);

    const check = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);

      if (mobile) setSidebarOpen(false);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  const shown = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.categories.includes(activeCategory));

  const catColors: Record<string, string> = {
    "AI / ML": "#5A8EA0",
    "Computer Vision": "#5A6EA0",
    "Fullstack": "#6070B8",
    "MERN Stack": "#6A9A70",
    "WebSockets": "#9060A8",
  };

  return (
    <>
      {selected ? (
        <VSCodeView project={selected} onBack={() => setSelected(null)} />
      ) : (
        <div className="flex flex-1 overflow-hidden cursor-techie" style={{ minHeight: 0, position: "relative" }}>
          {sidebarOpen && (
            <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
          )}
          {/* Sidebar */}
          <div
            className={`finder-sidebar flex flex-col shrink-0${sidebarOpen ? " sidebar-open" : ""}`}
            style={{ width: 190, background: "#F2EDE7", borderRight: "1px solid rgba(0,0,0,0.09)", padding: "14px 8px" }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(0,0,0,0.38)", padding: "0 8px 8px", letterSpacing: "0.06em" }}>
              FAVORITES
            </p>
            {[
              { icon: "🏠", label: "Home" },
              { icon: "📄", label: "Documents" },
              { icon: "📁", label: "Projects", active: true },
              { icon: "🖼", label: "Pictures" },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md"
                style={{ background: f.active ? "#4A90D9" : "transparent", cursor: "default" }}
              >
                <span style={{ fontSize: 14 }}>{f.icon}</span>
                <span style={{ fontSize: 13, fontWeight: f.active ? 700 : 400, color: f.active ? "white" : "#3D3028" }}>
                  {f.label}
                </span>
              </div>
            ))}

            <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(0,0,0,0.38)", padding: "16px 8px 8px", letterSpacing: "0.06em" }}>
              CATEGORIES
            </p>
            {/* All button */}
            <button
              onClick={() => setActiveCategory("All")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md"
              style={{
                background: activeCategory === "All" ? "rgba(0,0,0,0.07)" : "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#888", flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: "#3D3028" }}>All</span>
            </button>
            {allCategories.slice(1).map((cat) => {
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? "All" : cat)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md"
                  style={{
                    background: activeCategory === cat ? "rgba(0,0,0,0.07)" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: catColors[cat] ?? "#999", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#3D3028" }}>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#FFFFFF" }}>
            <div
              className="flex items-center justify-between px-5 py-2 shrink-0"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", background: "#FFFFFF" }}
            >
              <div className="flex items-center gap-2">
                <button
                  className="hamburger-btn"
                  onClick={() => setSidebarOpen(true)}
                  style={{ color: "rgba(0,0,0,0.5)", fontSize: 16, padding: "4px 6px" }}
                >☰</button>
                <span style={{ fontSize: 12, color: "rgba(0,0,0,0.45)", fontWeight: 500 }}>
                  ~ / Projects{activeCategory !== "All" ? ` / ${activeCategory}` : ""}
                </span>
              </div>
              <span style={{ fontSize: 12, color: "rgba(0,0,0,0.35)", fontWeight: 500 }}>
                {shown.length} items
              </span>
            </div>

            <div className="flex-1 overflow-y-auto" style={{ background: "#FFFFFF", padding: isMobile ? 0 : "28px 32px" }}>
              {isMobile ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {shown.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelected(p)}
                      style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 16px", background: "none", border: "none", borderBottom: "1px solid rgba(0,0,0,0.06)", width: "100%", cursor: "pointer", textAlign: "left" }}
                    >
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: p.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}>
                        <span style={{ fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.92)", fontStyle: "italic" }}>{p.initials}</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1208", marginBottom: 2 }}>{p.name}</p>
                        <p style={{ fontSize: 11, color: "rgba(26,18,8,0.42)" }}>{p.year} · {p.categories.join(" · ")}</p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-8">
                  {shown.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelected(p)}
                      className="cursor-eyes flex flex-col items-center gap-2 group"
                      style={{ background: "none", border: "none", padding: 0 }}
                    >
                      <div
                        className="rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                        style={{ width: 90, height: 90, background: p.color, boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
                      >
                        <span style={{ fontSize: 24, fontWeight: 300, color: "rgba(255,255,255,0.92)", fontStyle: "italic", letterSpacing: "-0.02em" }}>
                          {p.initials}
                        </span>
                      </div>
                      <div className="text-center">
                        <p style={{ fontSize: 12, fontWeight: 600, color: "#1A1208" }}>{p.name}</p>
                        <p style={{ fontSize: 10, color: "rgba(26,18,8,0.45)" }}>{p.year} · {p.categories.join(" · ")}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}