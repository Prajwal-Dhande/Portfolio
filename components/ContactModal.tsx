"use client";

import { useState, useEffect } from "react";

export default function ContactModal({ onClose: _ }: { onClose: () => void }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => { if (window.innerWidth < 641) setSidebarOpen(false); }, []);

  return (
    <div className="mail-app" style={{ position: "relative", overflow: "hidden" }}>
      {sidebarOpen && (
        <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
      )}
      <div className={`mail-sidebar${sidebarOpen ? " sidebar-open" : ""}`}>
        <h5>Mailboxes</h5>
        <div className="mail-folder active"><span>📥 Inbox</span><span className="count">1</span></div>
        <div className="mail-folder"><span>⭐ Starred</span></div>
        <div className="mail-folder"><span>📤 Sent</span></div>
        <div className="mail-folder"><span>🗑 Trash</span></div>
        <h5 style={{ marginTop: 18 }}>Smart Mailboxes</h5>
        <div className="mail-folder"><span>✉ Contact Me</span></div>
      </div>

      <div className="mail-main">
        <div className="mail-toolbar">
          <button className="hamburger-btn mail-hamburger" onClick={() => setSidebarOpen(true)}>☰</button>
          <div className="btn btn-static">✎</div>
          <div className="btn btn-static">↩</div>
          <div className="btn btn-static">⎘</div>
          <div className="btn btn-static">🗑</div>
          <div style={{ marginLeft: "auto", fontSize: 12, color: "var(--ink-muted)" }}>1 message</div>
        </div>

        <div className="mail-body">
          <div className="mail-header">
            <h2 className="subject">Let&apos;s work together.</h2>
            <div className="mail-row">
              <div className="label">From</div>
              <div className="value"><b>Prajwal Dhande</b> &lt;prajwaldhande017@gmail.com&gt;</div>
            </div>
            <div className="mail-row">
              <div className="label">To</div>
              <div className="value">you</div>
            </div>
            <div className="mail-row">
              <div className="label">Reply</div>
              <div className="value">
                <span className="pill" onClick={() => window.location.href = "mailto:prajwaldhande017@gmail.com"} style={{ cursor: "pointer" }}>
                  📨 prajwaldhande017@gmail.com
                </span>
                <span className="pill" onClick={() => window.open("https://www.linkedin.com/in/prajwal-dhande-57384b380", "_blank")} style={{ cursor: "pointer" }}>
                  🔗 LinkedIn
                </span>
                <span className="pill" style={{ cursor: "default" }}>
                  📍 Nagpur, India
                </span>
              </div>
            </div>
          </div>

          <div className="mail-content">
            <p>Hi there! Thanks for making it all the way to the contact section.</p>
            <p>I&apos;m actively looking for <b>Internships and full-time Software Engineering</b> roles starting mid-2026. I&apos;m especially drawn to teams building scalable products utilizing the MERN stack or integrating AI/ML models where clean code and real-world impact matter.</p>
            <p>The fastest way to reach me is via email or LinkedIn. I read everything and reply quickly. If you&apos;re working on something interesting or just want to talk tech, I&apos;d love to hear from you!</p>
            <p className="mail-sig">— Prajwal 🚀</p>
          </div>
        </div>
      </div>
    </div>
  );
}