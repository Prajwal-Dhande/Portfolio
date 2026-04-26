"use client";

import { useState, useEffect } from "react";
import { projects, VSCodeView, Project } from "./ProjectsModal";

export default function VscodeFolderModal({ onClose: _ }: { onClose: () => void }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => { if (window.innerWidth < 641) setSidebarOpen(false); }, []);

  if (selected) {
    return <VSCodeView project={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="cursor-techie" style={{ display: "flex", flexDirection: "column", height: "100%", background: "#1E1E1E", fontFamily: "var(--font-mono)" }}>
      {/* VS Code top bar */}
      <div style={{ height: 35, background: "#323233", display: "flex", alignItems: "center", padding: "0 14px", gap: 16, flexShrink: 0, borderBottom: "1px solid #111" }}>
        {/* Hamburger toggle */}
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          style={{ width: 26, height: 26, borderRadius: "50%", background: sidebarOpen ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "rgba(255,255,255,0.8)", flexShrink: 0, transition: "background 0.15s" }}
          title="Toggle Explorer"
        >☰</button>
        {["File", "Edit", "View", "Go", "Terminal", "Help"].map((m) => (
          <span key={m} style={{ fontSize: 12, color: "rgba(204,204,204,0.7)", cursor: "default", fontFamily: "var(--font-sans)" }}>{m}</span>
        ))}
      </div>

      <div style={{ flex: 1, display: "flex", overflow: "hidden", position: "relative" }}>
        {/* Activity bar */}
        <div style={{ width: 48, background: "#333333", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 8, gap: 6, flexShrink: 0, zIndex: 1 }}>
          {[
            { icon: "⎇", label: "Explorer", active: sidebarOpen },
            { icon: "⌕", label: "Search" },
            { icon: "◩", label: "Source Control" },
            { icon: "▷", label: "Run" },
          ].map((a) => (
            <div key={a.label} onClick={a.label === "Explorer" ? () => setSidebarOpen((o) => !o) : undefined} style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: a.active ? "white" : "rgba(255,255,255,0.4)", cursor: a.label === "Explorer" ? "pointer" : "default", borderLeft: a.active ? "2px solid white" : "2px solid transparent" }}>
              {a.icon}
            </div>
          ))}
        </div>

        {/* Sidebar — slide in/out */}
        <div style={{ width: sidebarOpen ? 220 : 0, background: "#252526", borderRight: sidebarOpen ? "1px solid #1A1A1A" : "none", display: "flex", flexDirection: "column", flexShrink: 0, overflow: "hidden", transition: "width 0.22s ease" }}>
          <div style={{ padding: "10px 14px 6px", fontSize: 10, fontWeight: 700, color: "#BBBBBB", letterSpacing: "0.1em", fontFamily: "var(--font-sans)" }}>EXPLORER</div>
          <div style={{ padding: "4px 8px", fontSize: 11, fontWeight: 600, color: "#CCCCCC", fontFamily: "var(--font-sans)" }}>▾ OPEN FOLDER</div>
          <div style={{ flex: 1, overflowY: "auto", paddingBottom: 8 }}>
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "5px 16px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", transition: "background 0.1s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{ fontSize: 13 }}>📁</span>
                <span style={{ fontSize: 12, color: "#CDD3DE", fontFamily: "var(--font-sans)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Welcome panel */}
        <div style={{ flex: 1, background: "#1E1E1E", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", overflowY: "auto", padding: "32px 48px 40px", gap: 28 }}>
          {/* VS Code logo */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, flexShrink: 0 }}>
            <svg width="64" height="64" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="vsc-welcome-g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#2196F3" />
                  <stop offset="1" stopColor="#1565C0" />
                </linearGradient>
                <clipPath id="vsc-welcome-clip"><rect x="1" y="1" width="58" height="58" rx="13" /></clipPath>
              </defs>
              <rect x="1" y="1" width="58" height="58" rx="13" fill="url(#vsc-welcome-g)" />
              <path d="M34 60 L60 34 L60 60 Z" fill="rgba(0,0,0,0.18)" clipPath="url(#vsc-welcome-clip)" />
              <path d="M19 22 L10 30 L19 38" fill="none" stroke="white" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="34" y1="20" x2="26" y2="40" stroke="white" strokeWidth="3.8" strokeLinecap="round" />
              <path d="M38 22 L47 30 L38 38" fill="none" stroke="white" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 22, fontWeight: 300, color: "rgba(204,204,204,0.9)", fontFamily: "var(--font-sans)", marginBottom: 4 }}>Visual Studio Code</p>
              <p style={{ fontSize: 12, color: "rgba(204,204,204,0.45)", fontFamily: "var(--font-sans)" }}>Select a folder to start editing</p>
            </div>
          </div>

          {/* Start section */}
          <div style={{ width: "100%", maxWidth: 420 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(204,204,204,0.5)", letterSpacing: "0.08em", marginBottom: 12, fontFamily: "var(--font-sans)" }}>START</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { label: "Open Folder...", sub: "Choose a project from the sidebar", icon: "📂" },
                { label: "Clone Git Repository", sub: "github.com/Prajwal-Dhande", icon: "⎇" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 6, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", cursor: "default" }}>
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: 13, color: "#89B4FA", fontFamily: "var(--font-sans)", fontWeight: 600 }}>{item.label}</p>
                    <p style={{ fontSize: 11, color: "rgba(204,204,204,0.45)", fontFamily: "var(--font-sans)" }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(204,204,204,0.5)", letterSpacing: "0.08em", margin: "20px 0 12px", fontFamily: "var(--font-sans)" }}>RECENT</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {projects.slice(0, 5).map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 10px", borderRadius: 5, background: "transparent", border: "none", cursor: "pointer", textAlign: "left", transition: "background 0.1s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: p.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-sans)" }}>{p.initials}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "#CDD3DE", fontFamily: "var(--font-sans)", fontWeight: 500 }}>{p.name}</p>
                    <p style={{ fontSize: 10, color: "rgba(204,204,204,0.4)", fontFamily: "var(--font-sans)" }}>~/projects/{p.id} · {p.year}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div style={{ height: 22, background: "#007ACC", display: "flex", alignItems: "center", padding: "0 12px", gap: 16, flexShrink: 0 }}>
        <span style={{ fontSize: 11, color: "white", fontFamily: "var(--font-sans)", fontWeight: 600 }}>⎇ main</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-sans)" }}>Prajwal-Dhande</span>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-sans)" }}>UTF-8</span>
      </div>
    </div>
  );
}
