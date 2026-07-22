 "use client";

import React, { useState } from "react";

const notes = [
  {
    id: "about",
    title: "About Me 🤔",
    preview: "Hi, I'm Prajwal!...",
    date: "Today",
    content: (
      <>
        <p>Hi, I&apos;m Prajwal Dhande! 👨‍💻</p>
        <p>
          I am a Full Stack (MERN) and AI Engineering developer who loves building end-to-end products. For me, clean code and scalable architecture are just as important as a smooth user interface. 
        </p>
        <p>
          Currently, I am pursuing my B.Tech in Artificial Intelligence at{" "}
          <strong>G.H. Raisoni College of Engineering and Management (GHRCEM), Nagpur</strong>. During my journey, I&apos;ve completed valuable internships at CodSoft (Web Dev) and Prodigy Infotech (Machine Learning), successfully leading teams in hackathons, and constantly pushing my limits to learn more. 👀
        </p>
        <p>
          I&apos;m actively looking for <strong>Internships and full-time Software Engineering roles</strong> where I can ship fast, integrate AI into real-world applications, and grow alongside a team of passionate developers. 🦾
        </p>
        <p>
          My core stack: <strong>MongoDB · Express.js · React · Node.js · Next.js · Java · TypeScript</strong>
          {" "} and whatever the problem needs to be solved. 🙌🏼
        </p>
        <p>
          To recharge, you&apos;ll probably find me hitting my daily LeetCode goals, watching Marvel movies (Iron Man & Thor fanboy ⚡), watching One Punch Man, or practicing my newly learned German skills. ✨
        </p>
      </>
    ),
  },
  {
    id: "currently",
    title: "Currently 👨‍💻",
    preview: "Lately, I am brainstorming...",
    date: "Apr 19",
    content: (
      <>
        <p> 
          Lately, I have been heavily focused on expanding my project portfolio. I recently built <strong>"Tattvam"</strong> (a nutritional analysis app using barcode scanning) and <strong>"NodeClash"</strong> (a real-time multiplayer coding platform).
        </p>
        <p>
          Beyond development, I maintain a strict daily routine on LeetCode for DSA and leverage the discipline I learned earning my NCC A-grade certificate to stay focused. I am always open to chatting about new ideas, Hackathon collaborations, or tech opportunities!
        </p>
      </>
    ),
  },
  {
    id: "stack",
    title: "My Stack 🛠",
    preview: "I'm most comfortable with...",
    date: "Apr 15",
    content: (
      <>
        <p>
          I&apos;m most comfortable adapting quickly and moving one step closer to doing better by trial and errors, and then debugging those - fueled by strong coffee ☕. I&apos;m always eager to learn new technologies and tools that bridge the gap between Web Development and Artificial Intelligence. If you have any recommendations or want to chat about tech, hit me up! 💯
        </p>
        <ul style={{ marginLeft: 20, marginTop: 12, listStyleType: "disc", paddingLeft: 20 }}>
          <li><strong>Languages & Libraries:</strong> JavaScript, TypeScript, Java, React, Next.js, Express.js, Node.js, Tailwind CSS, HTML/CSS.</li>
          <br></br>
          <li><strong>Tools & Databases:</strong> MongoDB, SQL, Git/GitHub, Docker, Render, GCP, CI/CD pipelines, Postman.</li>
        </ul>
      </>
    ),
  },
];

export default function AboutModal({ onClose: _ }: { onClose: () => void }) {
  const [active, setActive] = React.useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const activeNote = notes.find((n) => n.id === active)!;
  React.useEffect(() => { if (window.innerWidth < 641) setSidebarOpen(false); }, []);

  return (
    <div className="notes-app cursor-sparkle" style={{ position: "relative", overflow: "hidden" }}>
      {sidebarOpen && (
        <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
      )}
      <div className={`notes-sidebar${sidebarOpen ? " sidebar-open" : ""}`}>
        <h4>On My Mac</h4>
        {notes.map((note) => (
          <div
            key={note.id}
            className={`notes-list-item${active === note.id ? " active" : ""}`}
            onClick={() => { setActive(note.id); setSidebarOpen(false); }}
          >
            <div className="note-title">{note.title}</div>
            <div className="note-snip">{note.preview}</div>
          </div>
        ))}
      </div>
      <div className="notes-content">
        <div className="notes-mobile-header">
          <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>☰</button>
          <span className="notes-mobile-title">{activeNote.title}</span>
        </div>
        <h1>{activeNote.title}</h1>
        <div className="date">
          {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          {" · "}
          {new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
        </div>
        {activeNote.content}
      </div>
    </div>
  );
}