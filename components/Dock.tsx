"use client";

import React from "react";

interface DockProps {
  onAbout: () => void;
  onEducation: () => void;
  onProjects: () => void;
  onExperience: () => void;
  onMusic: () => void;
  onContact: () => void;
  onResume: () => void;
}

const S = 54; // icon size

/* ── Icon helpers ─────────────────────────────────────────── */
function RoundedSq({
  children,
  size = S,
}: {
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

/* Notes — soft yellow */
function NotesIcon() {
  return (
    <RoundedSq>
      <rect width="54" height="54" rx="14" fill="url(#notes-g)" />
      <rect x="12" y="12" width="30" height="2.5" rx="1.25" fill="rgba(0,0,0,0.22)" />
      {[18, 23.5, 29, 34.5, 40].map((y) => (
        <rect key={y} x="12" y={y} width={y === 18 ? 26 : 22} height="2" rx="1" fill="rgba(0,0,0,0.11)" />
      ))}
      <defs>
        <linearGradient id="notes-g" x1="0" y1="0" x2="54" y2="54">
          <stop stopColor="#FFE55A" />
          <stop offset="1" stopColor="#FFCC00" />
        </linearGradient>
      </defs>
    </RoundedSq>
  );
}

/* Books — soft sage green */
function BooksIcon() {
  return (
    <RoundedSq>
      <rect width="54" height="54" rx="14" fill="url(#books-g)" />
      <rect x="9"  y="31" width="36" height="11" rx="2" fill="#7ECFC4" />
      <rect x="9"  y="21" width="30" height="9"  rx="2" fill="#F4A0A0" />
      <rect x="9"  y="12" width="34" height="8"  rx="2" fill="#FFE08A" />
      <rect x="39" y="12" width="3"  height="8"  rx="1" fill="rgba(255,255,255,0.5)" />
      <rect x="33" y="21" width="3"  height="9"  rx="1" fill="rgba(255,255,255,0.5)" />
      <rect x="39" y="31" width="3"  height="11" rx="1" fill="rgba(255,255,255,0.5)" />
      <rect x="7"  y="42" width="40" height="3"  rx="1.5" fill="rgba(0,0,0,0.12)" />
      <defs>
        <linearGradient id="books-g" x1="0" y1="0" x2="54" y2="54">
          <stop stopColor="#8ED8C4" />
          <stop offset="1" stopColor="#4CAF95" />
        </linearGradient>
      </defs>
    </RoundedSq>
  );
}

/* Finder — macOS two-face, soft blue */
function FinderIcon() {
  return (
    <RoundedSq>
      <rect width="54" height="54" rx="14" fill="url(#finder-g)" />
      {/* Left half (light) */}
      <clipPath id="left-half"><rect x="0" y="0" width="27" height="54" /></clipPath>
      <ellipse cx="22" cy="28" rx="12" ry="15" fill="white" clipPath="url(#left-half)" />
      {/* Right half (dark) */}
      <clipPath id="right-half"><rect x="27" y="0" width="27" height="54" /></clipPath>
      <ellipse cx="32" cy="28" rx="12" ry="15" fill="#1A3860" clipPath="url(#right-half)" />
      {/* Brow line */}
      <rect x="13" y="16" width="28" height="2" rx="1" fill="rgba(0,0,0,0.15)" />
      {/* Left eye */}
      <circle cx="21" cy="25" r="4"   fill="#1A3860" />
      <circle cx="22.5" cy="23.5" r="1.5" fill="white" />
      {/* Right eye */}
      <circle cx="33" cy="25" r="4"   fill="white" />
      <circle cx="34.5" cy="23.5" r="1.5" fill="rgba(26,56,96,0.35)" />
      {/* Smile */}
      <path d="M17 36 Q27 44 37 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <defs>
        <linearGradient id="finder-g" x1="0" y1="0" x2="54" y2="54">
          <stop stopColor="#8ACFED" />
          <stop offset="1" stopColor="#4AABE0" />
        </linearGradient>
      </defs>
    </RoundedSq>
  );
}

/* Keynote — soft lavender */
function KeynoteIcon() {
  return (
    <RoundedSq>
      <rect width="54" height="54" rx="14" fill="url(#key-g)" />
      <rect x="7"  y="11" width="40" height="26" rx="3" fill="rgba(255,255,255,0.2)"  stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <rect x="11" y="15" width="32" height="18" rx="2" fill="rgba(255,255,255,0.13)" />
      <rect x="14" y="18" width="16" height="3"  rx="1.5" fill="rgba(255,255,255,0.9)" />
      <rect x="14" y="23" width="24" height="2"  rx="1"   fill="rgba(255,255,255,0.5)" />
      <rect x="14" y="27" width="20" height="2"  rx="1"   fill="rgba(255,255,255,0.35)" />
      <rect x="25" y="37" width="4"  height="7"  rx="1"   fill="rgba(255,255,255,0.4)" />
      <rect x="17" y="43" width="20" height="3"  rx="1.5" fill="rgba(255,255,255,0.4)" />
      <defs>
        <linearGradient id="key-g" x1="0" y1="0" x2="54" y2="54">
          <stop stopColor="#D4A0F0" />
          <stop offset="1" stopColor="#A060D0" />
        </linearGradient>
      </defs>
    </RoundedSq>
  );
}

/* Music — coral pink */
function MusicIcon() {
  return (
    <RoundedSq>
      <rect width="54" height="54" rx="14" fill="url(#music-g)" />
      <path d="M21 38 L21 19 L39 16 L39 25" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="18" cy="39" r="5" fill="white" />
      <circle cx="36" cy="26" r="5" fill="white" />
      <defs>
        <linearGradient id="music-g" x1="0" y1="0" x2="54" y2="54">
          <stop stopColor="#FF8FA8" />
          <stop offset="1" stopColor="#E8405A" />
        </linearGradient>
      </defs>
    </RoundedSq>
  );
}

/* Mail — periwinkle blue */
function MailIcon() {
  return (
    <RoundedSq>
      <rect width="54" height="54" rx="14" fill="url(#mail-g)" />
      <rect x="8" y="15" width="38" height="26" rx="3" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" />
      <path d="M8 18.5 L27 32 L46 18.5" stroke="rgba(255,255,255,0.92)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <defs>
        <linearGradient id="mail-g" x1="0" y1="0" x2="54" y2="54">
          <stop stopColor="#8AAFF0" />
          <stop offset="1" stopColor="#4070D8" />
        </linearGradient>
      </defs>
    </RoundedSq>
  );
}

/* Resume — warm sand + green check */
function ResumeIcon() {
  return (
    <RoundedSq>
      <rect width="54" height="54" rx="14" fill="url(#resume-g)" />
      <rect x="11" y="8"  width="27" height="35" rx="3" fill="white" />
      <path d="M29 8 L38 17 L29 17 Z" fill="#DDD5C8" />
      <rect x="29" y="8" width="9"  height="9"   fill="#CCC0B2" />
      <rect x="15" y="22" width="17" height="2" rx="1" fill="#BFB0A0" />
      <rect x="15" y="26" width="14" height="2" rx="1" fill="#BFB0A0" />
      <rect x="15" y="30" width="16" height="2" rx="1" fill="#BFB0A0" />
      <rect x="15" y="34" width="12" height="2" rx="1" fill="#BFB0A0" />
      <circle cx="39" cy="40" r="10" fill="#50C878" />
      <path d="M34 40 L37.5 43.5 L44 36.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="resume-g" x1="0" y1="0" x2="54" y2="54">
          <stop stopColor="#F5EFE6" />
          <stop offset="1" stopColor="#E8DDD0" />
        </linearGradient>
      </defs>
    </RoundedSq>
  );
}

/* GitHub — real Invertocat path */
function GitHubIcon() {
  const scale = 54 / 24;
  return (
    <RoundedSq>
      <rect width="54" height="54" rx="14" fill="#24292F" />
      <g transform={`scale(${scale})`}>
        <path
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          fill="white"
        />
      </g>
    </RoundedSq>
  );
}

/* LinkedIn */
function LinkedInIcon() {
  return (
    <RoundedSq>
      <rect width="54" height="54" rx="14" fill="#0A66C2" />
      <text
        x="9"
        y="41"
        fontFamily="Nunito, system-ui, sans-serif"
        fontWeight="800"
        fontSize="30"
        fill="white"
      >
        in
      </text>
    </RoundedSq>
  );
}

/* ── Dock item ──────────────────────────────────────────────── */
function DockItem({
  label,
  children,
  onClick,
  href,
}: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const inner = (
    <div className="dock-icon-wrapper">
      <div className="dock-tooltip">{label}</div>
      <div className="dock-icon">{children}</div>
      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(0,0,0,0.25)", marginTop: 4 }} />
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex" }}>
        {inner}
      </a>
    );
  }
  return (
    <div onClick={onClick} style={{ cursor: "pointer", display: "flex" }}>
      {inner}
    </div>
  );
}

function Separator() {
  return (
    <div
      style={{
        width: 1,
        height: 38,
        background: "rgba(0,0,0,0.13)",
        borderRadius: 1,
        margin: "0 4px",
        alignSelf: "center",
        flexShrink: 0,
      }}
    />
  );
}

export default function Dock({
  onAbout,
  onEducation,
  onProjects,
  onExperience,
  onMusic,
  onContact,
  onResume,
}: DockProps) {
  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-end z-40"
      style={{
        gap: 10,
        padding: "10px 16px",
        borderRadius: 24,
        background: "rgba(255,255,255,0.26)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: "1px solid rgba(255,255,255,0.52)",
        boxShadow: "0 10px 36px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.65)",
      }}
    >
      <DockItem label="About Me"   onClick={onAbout}><NotesIcon /></DockItem>
      <DockItem label="Education"  onClick={onEducation}><BooksIcon /></DockItem>
      <DockItem label="Projects"   onClick={onProjects}><FinderIcon /></DockItem>
      <DockItem label="Experience" onClick={onExperience}><KeynoteIcon /></DockItem>
      <DockItem label="Music"      onClick={onMusic}><MusicIcon /></DockItem>
      <DockItem label="Contact"    onClick={onContact}><MailIcon /></DockItem>
      <DockItem label="Resume" onClick={onResume}>
        <ResumeIcon />
      </DockItem>
      <Separator />
      <DockItem label="GitHub"   href="https://github.com/Prajwal-Dhande"><GitHubIcon /></DockItem>
      <DockItem label="LinkedIn" href="https://www.linkedin.com/in/prajwal-dhande-57384b380"><LinkedInIcon /></DockItem>
    </div>
  );
}
