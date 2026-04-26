"use client";

import React, { useState } from "react";

export interface WinState {
  id: string;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  dark?: boolean;
}

const MIN_W = 420;
const MIN_H = 300;

interface WindowChromeProps {
  win: WinState;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onMove: (id: string, x: number, y: number) => void;
  onResize: (id: string, w: number, h: number) => void;
  rightAction?: React.ReactNode;
  children: React.ReactNode;
}

export default function WindowChrome({
  win, onClose, onFocus, onMove, onResize, rightAction, children,
}: WindowChromeProps) {
  const [closing, setClosing] = useState(false);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClosing(true);
    setTimeout(() => onClose(win.id), 180);
  };

  const onTitlebarMouseDown = (e: React.MouseEvent) => {
    if (window.innerWidth < 640) return;
    if ((e.target as HTMLElement).closest(".traffic-lights")) return;
    onFocus(win.id);
    const startX = e.clientX;
    const startY = e.clientY;
    const startLeft = win.x;
    const startTop = win.y;

    const move = (ev: MouseEvent) => {
      const nx = Math.max(0, Math.min(window.innerWidth - 120, startLeft + (ev.clientX - startX)));
      const ny = Math.max(44, Math.min(window.innerHeight - 90, startTop + (ev.clientY - startY)));
      onMove(win.id, nx, ny);
    };
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  const onResizeMouseDown = (e: React.MouseEvent) => {
    if (window.innerWidth < 640) return;
    e.stopPropagation();
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startW = win.w;
    const startH = win.h;

    const move = (ev: MouseEvent) => {
      const nw = Math.max(MIN_W, startW + (ev.clientX - startX));
      const nh = Math.max(MIN_H, startH + (ev.clientY - startY));
      onResize(win.id, nw, nh);
    };
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    document.body.style.cursor = "nwse-resize";
    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  return (
    <div
      className={`window${closing ? " closing" : ""}`}
      style={{ left: win.x, top: win.y, width: win.w, height: win.h, zIndex: win.z }}
      onMouseDown={() => onFocus(win.id)}
    >
      <div
        className={`window-titlebar${win.dark ? " dark" : ""}`}
        onMouseDown={onTitlebarMouseDown}
      >
        <div className="traffic-lights">
          <div onClick={handleClose} style={{ padding: 8, margin: -8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}>
            <div className="traffic-light close" />
          </div>
          <div className="traffic-light min" />
          <div className="traffic-light max" />
        </div>
        <div className={`window-title${win.dark ? " dark" : ""}`}>{win.title}</div>
        <div className="window-title-right">{rightAction}</div>
      </div>
      <div className="window-body">
        {children}
      </div>
      {/* Resize handle — bottom-right corner */}
      <div
        className="window-resize-handle"
        onMouseDown={onResizeMouseDown}
        title="Resize window"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" style={{ position: "absolute", right: 3, bottom: 3 }}>
          <path d="M9 1 L1 9 M9 5 L5 9 M9 9 L9 9" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
