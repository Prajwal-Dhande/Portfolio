"use client";


const links = [
  {
    letter: "Li",
    bg: "#0A66C2",
    name: "LinkedIn",
    url: "linkedin.com/in/prajwal-dhande-57384b380",
    desc: "Let's connect professionally!",
    href: "https://www.linkedin.com/in/prajwal-dhande-57384b380",
  },
  {
    letter: "Gh",
    bg: "#24292E",
    name: "GitHub",
    url: "github.com/Prajwal-Dhande",
    desc: "All my public projects and code.",
    href: "https://github.com/Prajwal-Dhande",
  },
  {
    letter: "@",
    bg: "#C0604A",
    name: "Email",
    url: "prajwaldhande017@gmail.com",
    desc: "Another way to reach me!",
    href: "mailto:prajwaldhande017@gmail.com",
  },
  {
    letter: "CV",
    bg: "#5A8A6A",
    name: "Resume",
    url: "drive.google.com",
    desc: "Download my latest resume.",
    href: "Prajwal_Dhande_Resume.pdf",
  },
];

export default function QuickLinksModal({ onClose: _ }: { onClose: () => void }) {
  return (
    <div className="flex-1 overflow-y-auto" style={{ background: "#FDFAF5", padding: "32px 36px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: "#1A1208", marginBottom: 6 }}>Quick Links</h1>
      <p style={{ fontSize: 14, color: "rgba(26,18,8,0.45)", marginBottom: 32, fontWeight: 500 }}>
        Places I hang out online. Click through.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="group cursor-robot"
          >
            <div
              style={{
                background: "white",
                borderRadius: 12,
                padding: "18px 20px",
                border: "1px solid rgba(0,0,0,0.09)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                height: "100%",
              }}
              className="hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Avatar */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: link.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 14,
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {link.letter}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#1A1208", marginBottom: 2 }}>{link.name}</p>
                <p style={{ fontSize: 12, color: "rgba(26,18,8,0.38)", marginBottom: 6, wordBreak: "break-all" }}>{link.url}</p>
                <p style={{ fontSize: 13, color: "rgba(26,18,8,0.6)", lineHeight: 1.45, wordBreak: "break-word" }}>{link.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
