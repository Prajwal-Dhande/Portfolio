"use client";

// Ye link tumhare public folder se seedha resume uthayega
const FILE_URL = "/Prajwal_Dhande_Resume.pdf";

export default function ResumeModal({ onClose: _ }: { onClose: () => void }) {
  return (
    <div className="resume-app cursor-hundred">
      {/* Word-style toolbar */}
      <div
        className="flex items-center gap-3 shrink-0"
        style={{
          height: 40,
          padding: "0 20px",
          background: "#2B579A",
          borderBottom: "1px solid rgba(0,0,0,0.15)",
        }}
      >
        {["File", "Home", "Insert", "Layout", "Review"].map((tab, i) => (
          <span
            key={tab}
            className="resume-tab-label"
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: i === 1 ? "white" : "rgba(255,255,255,0.65)",
              padding: "4px 8px",
              borderRadius: 3,
              background:
                i === 1 ? "rgba(255,255,255,0.18)" : "transparent",
              cursor: "default",
            }}
          >
            {tab}
          </span>
        ))}
        <div style={{ flex: 1 }} />
        <a
          href={FILE_URL}
          download="Prajwal_Dhande_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "white",
            color: "#2B579A",
            fontSize: 12,
            fontWeight: 700,
            padding: "5px 14px",
            borderRadius: 4,
            textDecoration: "none",
            boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
          }}
        >
          ↓ Download
        </a>
      </div>

      {/* Full PDF embed — scrollable */}
      <div style={{ flex: 1, overflow: "hidden", background: "#E8E8E8" }}>
        <iframe
          src={FILE_URL}
          title="Prajwal Dhande Resume"
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          allow="autoplay"
        />
      </div>
    </div>
  );
}