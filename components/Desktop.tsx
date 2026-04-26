"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import WindowChrome, { WinState } from "./WindowChrome";
import AboutModal from "./AboutModal";
import EducationModal from "./EducationModal";
import ProjectsModal from "./ProjectsModal";
import ExperienceModal from "./ExperienceModal";
import MusicModal from "./MusicModal";
import ContactModal from "./ContactModal";
import HobbiesModal from "./HobbiesModal";
import QuickLinksModal from "./QuickLinksModal";
import ResumeModal from "./ResumeModal";
import VscodeFolderModal from "./VscodeFolderModal";

type AppId =
  | "about" | "books" | "finder" | "keynote" | "music"
  | "mail" | "resume" | "hobbies" | "links" | "vscode";

interface WinDef extends WinState {
  appId: AppId;
}

// Mobile responsiveness detection
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check initial
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
}

const EMOJI_SPARKLES = [
  { e: "🚀", top: "18%", left: "22%" },
  { e: "💻", top: "28%", right: "26%" },
  { e: "⚡", top: "66%", left: "16%" },
  { e: "🤖", top: "62%", right: "20%" },
  { e: "🧠", top: "42%", left: "13%" },
  { e: "⚛️", top: "8%", right: "32%" },
  { e: "🔥", bottom: "28%", left: "28%" },
  { e: "🔨", top: "74%", right: "14%" },
  { e: "☕", bottom: "18%", right: "26%" },
  { e: "📈", top: "52%", right: "34%" },
];

function FolderIcon() {
  return (
    <svg viewBox="0 0 64 50" style={{ width: "6rem", height: "6rem" }}>
      <defs>
        <linearGradient id="folder-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c8e2ff" />
          <stop offset="1" stopColor="#86bdf4" />
        </linearGradient>

        <linearGradient id="folder-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfe5ff" />
          <stop offset="1" stopColor="#6fa8ea" />
        </linearGradient>

        <linearGradient id="folder-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.55" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="movingGloss" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0" />
          <stop offset="0.45" stopColor="white" stopOpacity="0" />
          <stop offset="0.52" stopColor="white" stopOpacity=".45" />
          <stop offset="0.62" stopColor="white" stopOpacity=".15" />
          <stop offset="0.60" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <clipPath id="folderClip">
          <path d="M 1.5 7 Q 1.5 3.5 6.5 3.5 L 23 3.5 L 28.5 10 L 60.5 10 Q 62.5 10 62.5 14 L 62.5 44 Q 62.5 48 58.5 48 L 6.5 48 Q 1.5 48 1.5 44 Z" />
        </clipPath>

        <filter id="softShadow">
          <feDropShadow dx="0" dy="1.2" stdDeviation="1.2" floodOpacity="0.10" />
        </filter>
      </defs>

      <g filter="url(#softShadow)">

        <path
          d="M 1.5 7 Q 1.5 3.5 6.5 3.5 L 23 3.5 L 28.5 10 L 60.5 10 Q 62.5 10 62.5 14 L 62.5 44 Q 62.5 48 58.5 48 L 6.5 48 Q 1.5 48 1.5 44 Z"
          fill="url(#folder-back)"
        />


        <path
          d="M 1.5 14.5 Q 1.5 11 6.5 11 L 58.5 11 Q 62.5 11 62.5 14.5 L 62.5 44 Q 62.5 48 58.5 48 L 6.5 48 Q 1.5 48 1.5 44 Z"
          fill="url(#folder-front)"
        />

        {/* top static shine */}
        <path
          d="M 1.5 14.5 Q 1.5 11 6.5 11 L 58.5 11 Q 62.5 11 62.5 14.5 L 62.5 22.5 L 1.5 22.5 Z"
          fill="url(#folder-shine)"
        />

        {/* moving sunglass-style gloss sweep */}
        <g clipPath="url(#folderClip)">
          <rect x="-40" y="-40" width="64" height="90"
            fill="url(#movingGloss)"
            transform="rotate(24)">
            <animate
              attributeName="x"
              values="-40;90;90"
              keyTimes="0;0.65;1"
              dur="1.75s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </g>
    </svg>
  );
}

function Clock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  if (!now) return <span className="status" />;
  const day = now.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  const time = now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  return <span className="status">{day} &nbsp; {time}</span>;
}

function renderApp(appId: AppId): React.ReactNode {
  const noClose = () => { };
  switch (appId) {
    case "about": return <AboutModal onClose={noClose} />;
    case "books": return <EducationModal onClose={noClose} />;
    case "finder": return <ProjectsModal onClose={noClose} />;
    case "keynote": return <ExperienceModal onClose={noClose} />;
    case "music": return <MusicModal onClose={noClose} />;
    case "mail": return <ContactModal onClose={noClose} />;
    case "resume": return <ResumeModal onClose={noClose} />;
    case "hobbies": return <HobbiesModal onClose={noClose} />;
    case "links": return <QuickLinksModal onClose={noClose} />;
    case "vscode": return <VscodeFolderModal onClose={noClose} />;
    default: return null;
  }
}

type OpenWinFn = (appId: AppId, title: string, w?: number, h?: number, dark?: boolean) => void;

export default function Desktop() {
  const [wins, setWins] = useState<WinDef[]>([]);
  const [topZ, setTopZ] = useState(100);
  const isMobile = useIsMobile(); // Use the mobile detector

  // Dynamically adjusted stickers based on screen size
  const STICKERS = [
    { src: "/stickers/macbook-open.png", top: isMobile ? "12%" : "9%", left: isMobile ? "2%" : "7%", rot: -9, size: isMobile ? 45 : 86 },
    { src: "/stickers/react.png", top: isMobile ? "8%" : "6%", left: isMobile ? "60%" : "38%", rot: 5, size: isMobile ? 35 : 72 },
    { src: "/stickers/nodejs.png", top: isMobile ? "6%" : "8%", right: isMobile ? "4%" : "14%", rot: 11, size: isMobile ? 45 : 78 },
    { src: "/stickers/ironman.png", top: isMobile ? "35%" : "32%", left: isMobile ? "1%" : "6%", rot: -12, size: isMobile ? 40 : 68 },
    { src: "/stickers/coffee.png", top: isMobile ? "45%" : "54%", left: isMobile ? "2%" : "5%", rot: -10, size: isMobile ? 40 : 82 },
    { src: "/stickers/airpods.png", top: isMobile ? "22%" : "28%", right: isMobile ? "2%" : "6%", rot: -6, size: isMobile ? 35 : 72 },
    { src: "/stickers/thor-hammer.png", top: isMobile ? "48%" : "56%", right: isMobile ? "2%" : "6%", rot: 8, size: isMobile ? 45 : 80 },
    { src: "/stickers/mongodb.png", bottom: isMobile ? "22%" : "14%", left: isMobile ? "4%" : "10%", rot: -8, size: isMobile ? 50 : 90 },
    { src: "/stickers/laptop-silver.png", bottom: isMobile ? "18%" : "10%", right: isMobile ? "4%" : "8%", rot: -5, size: isMobile ? 45 : 88 },
  ];

  const openWin: OpenWinFn = (appId, title, w = 760, h = 520, dark = false) => {
    setWins((prev) => {
      const existing = prev.find((x) => x.appId === appId);
      if (existing) {
        setTopZ((z) => z + 1);
        return prev.map((x) => x.appId === appId ? { ...x, z: topZ + 1 } : x);
      }
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      let winX: number, winY: number, winW: number, winH: number;
      if (vw < 640) {
        winW = vw; winH = vh - 44 - 106; winX = 0; winY = 44;
      } else if (vw < 1024) {
        winW = Math.min(w, vw - 40);
        winH = Math.min(h, vh - 44 - 140);
        winX = (vw - winW) / 2;
        winY = Math.max(52, (vh - winH) / 2 - 30);
      } else {
        const OFFSETS: [number, number][] = [[0, 0], [-36, -22], [36, 22], [-58, 14], [58, -14], [-20, 32], [20, -32]];
        const [offsetX, offsetY] = OFFSETS[prev.length % OFFSETS.length];
        const cx = (vw - w) / 2;
        const cy = (vh - h) / 2 - 55;
        winX = Math.max(40, cx + offsetX);
        winY = Math.max(52, Math.min(vh - h - 90, cy + offsetY));
        winW = w; winH = h;
      }
      setTopZ((z) => z + 1);
      return [...prev, { id: appId, appId, title, x: winX, y: winY, w: winW, h: winH, z: topZ + 1, dark }];
    });
  };

  const closeWin = (id: string) => setWins((prev) => prev.filter((x) => x.id !== id));
  const focusWin = (id: string) => {
    setTopZ((z) => z + 1);
    setWins((prev) => prev.map((x) => x.id === id ? { ...x, z: topZ + 1 } : x));
  };
  const moveWin = (id: string, x: number, y: number) =>
    setWins((prev) => prev.map((w) => w.id === id ? { ...w, x, y } : w));
  const resizeWin = (id: string, w: number, h: number) =>
    setWins((prev) => prev.map((win) => win.id === id ? { ...win, w, h } : win));

  const openIds = new Set(wins.map((w) => w.appId));

  const handleDockClick = (id: string) => {
    if (id === "about") return openWin("about", "About Me", 700, 440);
    if (id === "books") return openWin("books", "Education", 800, 520);
    if (id === "finder") return openWin("finder", "Projects", 840, 520);
    if (id === "keynote") return openWin("keynote", "Experience.key", 880, 540, true);
    if (id === "music") return openWin("music", "Listening", 480, 520, true);
    if (id === "mail") return openWin("mail", "Contact", 780, 500);
    if (id === "resume") return openWin("resume", "Prajwal_Dhande_Resume.pdf", 820, 500);
    if (id === "vscode") return openWin("vscode", "Visual Studio Code", 960, 620, true);
    if (id === "github") return window.open("https://github.com/Prajwal-Dhande", "_blank");
    if (id === "linkedin") return window.open("https://www.linkedin.com/in/prajwal-dhande-57384b380", "_blank");
  };

  const openFolder = (appId: AppId) => {
    if (appId === "hobbies") openWin("hobbies", "Hobbies", 760, 540);
    if (appId === "links") openWin("links", "Quick Links", 760, 520);
  };

  return (
    <>
      {/* Menu bar */}
      <div className="menubar">
        <div className="animoji-btn" onClick={() => setWins([])} title="Home">
          <Image src="/animojis/1.png" alt="home" width={24} height={24} style={{ width: "auto", height: "auto", objectFit: "contain", borderRadius: "50%" }} />
        </div>
        <span className="menu-item bold">Prajwal Dhande</span>
        <span
          className="menu-item menu-hide-mobile"
          style={{ cursor: "pointer" }}
          onClick={() => openWin("resume", "Prajwal_Dhande_Resume.pdf", 860, 560)}
        >Resume</span>
        <span
          className="menu-item menu-hide-mobile"
          style={{ cursor: "pointer" }}
          onClick={() => openWin("mail", "Contact", 820, 560)}
        >Contact</span>
        <a
          className="menu-item menu-hide-mobile"
          href="https://github.com/Prajwal-Dhande"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
        >GitHub</a>
        <a
          className="menu-item menu-hide-mobile"
          href="https://www.linkedin.com/in/prajwal-dhande-57384b380"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
        >LinkedIn</a>
        <div className="spacer" />
        <span className="status menu-hide-mobile">B.Tech in AI · GHRCEM, Nagpur</span>
        <Clock />
      </div>

      {/* Desktop */}
      <div className="desktop">
        {/* Floating clouds via CSS radial-gradient on cloud-layer */}
        <div className="cloud-layer" />

        {/* Sticker layer */}
        <div className="sticker-layer">
          {STICKERS.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt=""
              className="sticker float-a"
              style={{
                width: s.size,
                transform: `rotate(${s.rot}deg)`,
                "--hover-rot": `${s.rot * 0.5}deg`,
                ...(s.top && { top: s.top }),
                ...(s.bottom && { bottom: s.bottom }),
                ...(s.left && { left: s.left }),
                ...(s.right && { right: s.right }),
                animationDelay: `${i * 0.7}s`,
              } as React.CSSProperties}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          ))}
          {EMOJI_SPARKLES.map((s, i) => (
            <span
              key={`e${i}`}
              className="emoji-sticker float-b"
              style={{
                ...(s.top && { top: s.top }),
                ...("bottom" in s && { bottom: (s as { bottom?: string }).bottom }),
                ...(s.left && { left: s.left }),
                ...(s.right && { right: s.right }),
                fontSize: isMobile ? 12 : 20, // Smaller sparkles on mobile
                filter: "drop-shadow(0 2px 4px rgba(60,40,20,0.2))",
                animationDelay: `${i * 0.4}s`,
              }}
            >{s.e}</span>
          ))}
        </div>

        {/* Animoji stickers — Desktop and Mobile sizes significantly reduced */}
        <div className="float-a" style={{ position: "absolute", left: isMobile ? "8%" : "26%", top: isMobile ? "22%" : "22%", zIndex: 4, pointerEvents: "none" }}>
          {/* thinking animoji 🤔 */}
          <Image src="/animojis/1.png" alt="" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} style={{ width: "auto", height: "auto", filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.14))" }} />
        </div>
        <div className="float-b" style={{ position: "absolute", right: isMobile ? "10%" : "28%", top: isMobile ? "16%" : "13%", zIndex: 4, pointerEvents: "none" }}>
           {/* laptop animoji */}
          <Image src="/animojis/3.png" alt="" width={isMobile ? 50 : 60} height={isMobile ? 50 : 60} style={{ width: "auto", height: "auto", filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.14))", transform: "rotate(4deg)" }} />
        </div>
        <div className="float-c" style={{ position: "absolute", left: isMobile ? "12%" : "30%", bottom: isMobile ? "30%" : "17%", zIndex: 4, pointerEvents: "none" }}>
           {/* smile animoji */}
          <Image src="/animojis/4.png" alt="" width={isMobile ? 40 : 48} height={isMobile ? 40 : 48} style={{ width: "auto", height: "auto", filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.14))", transform: "rotate(-7deg)" }} />
        </div>
        <div className="float-a" style={{ position: "absolute", right: isMobile ? "12%" : "30%", bottom: isMobile ? "28%" : "22%", zIndex: 4, pointerEvents: "none" }}>
          {/* star-struck animoji 🤩 */}
          <Image src="/animojis/2.png" alt="" width={isMobile ? 35 : 45} height={isMobile ? 35 : 45} style={{ width: "auto", height: "auto", filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.14))", transform: "rotate(6deg)" }} />
        </div>

        {/* Centered photo */}
        <div className="hero">
          <div className="photo-wrap">
            <Image src="/prajwal.png" alt="Prajwal Dhande" width={500} height={500} priority style={{ width: "100%", height: "auto", aspectRatio: "1/1", objectFit: "cover", borderRadius: "50%" }} />
          </div>
        </div>

        {/* Desktop folders — pulled toward center */}
        <div className="desktop-folders">
          <div className="desktop-folder" style={{ bottom: isMobile ? 450 : 312, left: isMobile ? "12%" : "19%" }} onClick={() => openFolder("hobbies")}>
            <div className="folder-icon"><FolderIcon /></div>
            <div className="label">Hobbies</div>
          </div>
          <div className="desktop-folder" style={{ top: isMobile ? 120 : 294, right: isMobile ? "12%" : "22%" }} onClick={() => openFolder("links")}>
            <div className="folder-icon"><FolderIcon /></div>
            <div className="label">Quick Links</div>
          </div>
        </div>

        {/* Open windows */}
        {wins.map((w) => (
          <WindowChrome
            key={w.id}
            win={w}
            onClose={closeWin}
            onFocus={focusWin}
            onMove={moveWin}
            onResize={resizeWin}
            rightAction={
              w.appId === "keynote"
                ? <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 600, cursor: "default" }}>▶ Play</span>
                : undefined
            }
          >
            {renderApp(w.appId)}
          </WindowChrome>
        ))}
      </div>

      {/* Dock */}
      <DockBar openIds={openIds} onItemClick={handleDockClick} />
    </>
  );
}

/* ── Dock ─────────────────────────────────────────────── */
function DockBar({ openIds, onItemClick }: { openIds: Set<string>; onItemClick: (id: string) => void }) {
  const items = [
    { id: "about", title: "About Me", icon: <NotesIcon /> },
    { id: "books", title: "Education", icon: <BooksIcon /> },
    { id: "finder", title: "Projects", icon: <FinderIcon /> },
    { id: "keynote", title: "Experience", icon: <KeynoteIcon /> },
    { id: "music", title: "Listening", icon: <MusicIcon /> },
    null,
    { id: "resume", title: "Resume", icon: <ResumeIconSvg /> },
    { id: "mail", title: "Contact", icon: <MailIcon /> },
    { id: "github", title: "GitHub", icon: <GithubIcon /> },
    { id: "linkedin", title: "LinkedIn", icon: <LinkedInIcon /> },
  ];

  return (
    <div className="dock">
      {items.map((it, i) => {
        if (!it) return <div key={`d${i}`} className="dock-divider" />;
        return (
          <div
            key={it.id}
            className={`dock-item${openIds.has(it.id) ? " open" : ""}`}
            onClick={() => onItemClick(it.id)}
          >
            {it.icon}
            <div className="tooltip">{it.title}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Dock icons — pastel macOS-accurate ──────────────── */

function NotesIcon() {
  return (
    <svg viewBox="0 0 60 60" width={56} height={56}>
      <defs>
        <linearGradient id="notes-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFEF0" /><stop offset="1" stopColor="#FFF7C0" />
        </linearGradient>
        <clipPath id="notes-clip"><rect x="1" y="1" width="58" height="58" rx="13" /></clipPath>
      </defs>
      <rect x="1" y="1" width="58" height="58" rx="13" fill="url(#notes-bg)" />
      {/* Soft golden header bar */}
      <rect x="1" y="1" width="58" height="17" fill="#FFE040" clipPath="url(#notes-clip)" />
      <line x1="1" y1="17" x2="59" y2="17" stroke="#D9C000" strokeWidth="0.8" />
      {/* Blue ruled notebook lines */}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={i} x1="11" y1={26 + i * 7} x2={i === 4 ? 35 : 50} y2={26 + i * 7}
          stroke="#8BBCE8" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
      ))}
    </svg>
  );
}

function BooksIcon() {
  return (
    <svg viewBox="0 0 60 60" width={56} height={56}>
      <defs>
        <linearGradient id="books-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFF0F5" /><stop offset="1" stopColor="#FFD8E8" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="58" height="58" rx="13" fill="url(#books-bg)" />
      {/* Bottom book — rose */}
      <rect x="7" y="38" width="46" height="14" rx="2.5" fill="#E8759A" />
      <rect x="7" y="38" width="8" height="14" rx="2.5" fill="#C05070" />
      <line x1="15.5" y1="40" x2="15.5" y2="51" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
      {/* Middle book — pale yellow */}
      <rect x="10" y="25" width="40" height="14" rx="2.5" fill="#F5DFA8" />
      <rect x="10" y="25" width="8" height="14" rx="2.5" fill="#C8A860" />
      <line x1="18.5" y1="27" x2="18.5" y2="38" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
      {/* Top book — blush */}
      <rect x="12" y="12" width="36" height="14" rx="2.5" fill="#FFB8CC" />
      <rect x="12" y="12" width="8" height="14" rx="2.5" fill="#E080A0" />
      <line x1="20.5" y1="14" x2="20.5" y2="25" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
    </svg>
  );
}

function FinderIcon() {
  return (
    <svg viewBox="0 0 60 60" width={56} height={56}>
      <defs>
        <linearGradient id="fd-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#54CCFE" /><stop offset="1" stopColor="#1270EE" />
        </linearGradient>
        <linearGradient id="fd-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#E0EAF8" />
        </linearGradient>
        <clipPath id="finder-clip"><rect x="1" y="1" width="58" height="58" rx="13" /></clipPath>
      </defs>
      {/* Blue background — full icon */}
      <rect x="1" y="1" width="58" height="58" rx="13" fill="url(#fd-blue)" />
      {/* White/silver right face with organic curved left edge */}
      <path
        d="M32 1 C26 9 24 18 26 30 C24 42 26 51 32 59 L59 59 L59 1 Z"
        fill="url(#fd-face)"
        clipPath="url(#finder-clip)"
      />
      {/* Left eye — pill (blue side) */}
      <rect x="9" y="18" width="7" height="12" rx="3.5" fill="#0C2340" />
      {/* Right eye — pill (white side) */}
      <rect x="40" y="18" width="7" height="12" rx="3.5" fill="#0C2340" />
      {/* Shared smile arc spanning full width */}
      <path d="M11 37 Q30 55 49 37" stroke="#0C2340" strokeWidth="2.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function KeynoteIcon() {
  return (
    <svg viewBox="0 0 60 60" width={56} height={56}>
      <defs>
        <linearGradient id="keynote-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6878D0" /><stop offset="1" stopColor="#3848A8" />
        </linearGradient>
        <clipPath id="keynote-clip"><rect x="1" y="1" width="58" height="58" rx="13" /></clipPath>
      </defs>
      <rect x="1" y="1" width="58" height="58" rx="13" fill="url(#keynote-bg)" />
      {/* Presentation slide */}
      <rect x="9" y="11" width="42" height="27" rx="2" fill="#EEE8DC" />
      <rect x="13" y="15" width="20" height="3" rx="1" fill="#E05040" />
      <rect x="13" y="21" width="30" height="1.5" rx="0.5" fill="rgba(0,0,0,0.18)" />
      <rect x="13" y="24" width="22" height="1.5" rx="0.5" fill="rgba(0,0,0,0.18)" />
      <rect x="13" y="27" width="26" height="1.5" rx="0.5" fill="rgba(0,0,0,0.18)" />
      {/* Star */}
      <path d="M43 13 L44 16 L47.5 16 L45 18 L46 21 L43 19 L40 21 L41 18 L38.5 16 L42 16 Z" fill="#FFD040" />
      {/* Podium */}
      <rect x="27" y="38" width="6" height="7" fill="rgba(255,255,255,0.35)" />
      <rect x="21" y="45" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg viewBox="0 0 60 60" width={56} height={56}>
      <defs>
        <linearGradient id="music-bg" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#E85070" /><stop offset="1" stopColor="#F87898" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="58" height="58" rx="13" fill="url(#music-bg)" />
      {/* Note stem */}
      <rect x="32" y="13" width="4" height="24" rx="2" fill="white" />
      {/* Flag */}
      <path d="M36 13 Q48 15 47 26 Q42 22 36 23 Z" fill="white" />
      {/* Note head */}
      <ellipse cx="27" cy="37" rx="7.5" ry="5.5" fill="white" transform="rotate(-12 27 37)" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 60 60" width={56} height={56}>
      <defs>
        <linearGradient id="mail-bg-dk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#80D0FF" /><stop offset="1" stopColor="#3898E0" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="58" height="58" rx="13" fill="url(#mail-bg-dk)" />
      <rect x="7" y="16" width="46" height="28" rx="3" fill="white" />
      <path d="M7 19 L30 34 L53 19" stroke="#3898E0" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}


function ResumeIconSvg() {
  return (
    <svg viewBox="0 0 60 60" width={56} height={56}>
      <defs>
        <linearGradient id="resume-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EEF5FF" /><stop offset="1" stopColor="#D8E8F8" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="58" height="58" rx="13" fill="url(#resume-bg)" />
      {/* Paper */}
      <rect x="12" y="7" width="36" height="46" rx="2" fill="white" />
      <rect x="12" y="7" width="36" height="46" rx="2" fill="none" stroke="rgba(0,0,120,0.09)" strokeWidth="0.75" />
      {/* Dog-ear */}
      <path d="M36 7 L48 19 L36 19 Z" fill="#E4EEFB" />
      <line x1="36" y1="7" x2="48" y2="19" stroke="rgba(0,0,120,0.09)" strokeWidth="0.75" />
      {/* Name bar */}
      <rect x="17" y="25" width="22" height="3" rx="1.5" fill="#7090C8" />
      {/* Text lines */}
      <line x1="17" y1="33" x2="43" y2="33" stroke="#C8D8EE" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="38" x2="40" y2="38" stroke="#C8D8EE" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="43" x2="43" y2="43" stroke="#C8D8EE" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="48" x2="36" y2="48" stroke="#C8D8EE" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 60 60" width={56} height={56}>
      <rect x="1" y="1" width="58" height="58" rx="13" fill="#24292E" />
      <path d="M30 10 C19.5 10 11 18.5 11 29 C11 37.4 16.7 44.5 24.6 47 C25.6 47.2 26 46.6 26 46.1 L26 42.3 C20.6 43.4 19.4 39.7 19.4 39.7 C18.4 37.4 17.1 36.8 17.1 36.8 C15.3 35.6 17.2 35.7 17.2 35.7 C19.2 35.8 20.3 37.7 20.3 37.7 C22.1 40.6 25 39.8 26.2 39.3 C26.4 38.0 26.9 37.1 27.5 36.6 C23.0 36.1 18.3 34.4 18.3 27.3 C18.3 25.1 19.1 23.4 20.4 22.0 C20.2 21.5 19.5 19.5 20.6 16.9 C20.6 16.9 22.3 16.3 26.1 18.7 C27.7 18.2 29.3 18.0 31 18.0 C32.7 18.0 34.3 18.2 35.9 18.7 C39.7 16.3 41.4 16.9 41.4 16.9 C42.5 19.5 41.8 21.5 41.6 22.0 C42.9 23.4 43.7 25.1 43.7 27.3 C43.7 34.4 39.0 36.1 34.5 36.6 C35.2 37.2 35.9 38.5 35.9 40.5 L35.9 46.1 C35.9 46.6 36.3 47.2 37.3 47 C45.3 44.5 51 37.4 51 29 C51 18.5 42.5 10 30 10 Z" fill="white" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 60 60" width={56} height={56}>
      <defs>
        <linearGradient id="li-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3A80D8" /><stop offset="1" stopColor="#0A56B8" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="58" height="58" rx="13" fill="url(#li-bg)" />
      <rect x="12" y="23" width="8" height="24" rx="1" fill="white" />
      <circle cx="16" cy="16" r="5" fill="white" />
      <path d="M26 23 L34 23 L34 27 Q36 22 42 22 C49 22 50 27 50 32 L50 47 L42 47 L42 34 C42 31 41 29 38.5 29 C36 29 34 31 34 34 L34 47 L26 47 Z" fill="white" />
    </svg>
  );
}