"use client";

import React, { useState, useRef, useCallback } from "react";

const queue = [
  { n: "01", song: "Memories", artist: "Maroon 5", dur: "3:09" },
  { n: "02", song: "Rasputin", artist: "Boney M.", dur: "4:25" },
  { n: "03", song: "All The Stars", artist: "Kendrick Lamar", dur: "3:52" },
  { n: "04", song: "Harleys In Hawaii", artist: "Katy Perry", dur: "3:05" },
  { n: "05", song: "Beauty and a beat", artist: "Justin Bieber", dur: "2:58" },
  { n: "06", song: "Again", artist: "AUR", dur: "4:03" },
  { n: "07", song: "Cheating on you", artist: "Charlie Puth", dur: "3:17" },
  { n: "08", song: "Nothing with you", artist: "John K", dur: "2:19" },
  { n: "09", song: "Tum Se", artist: "OutStation", dur: "3:48" },
];

export default function MusicModal({ onClose: _ }: { onClose: () => void }) {
  const [playing, setPlaying] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = appRef.current?.getBoundingClientRect();
    if (!rect || !appRef.current) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    appRef.current.style.setProperty("--mx", `${x}%`);
    appRef.current.style.setProperty("--my", `${y}%`);
  }, []);

  return (
    <div className="music-app cursor-headphone" ref={appRef} onMouseMove={handleMouseMove}>
      <div className="now-playing-label">Now Playing</div>

      <div className="music-top">
        <div className="album-cover">♪</div>
        <div className="music-meta" style={{ flex: 1 }}>
          <div className="song">Memories</div>
          <div className="artist">Maroon 5</div>
          <div className="album">Prajwal&apos;s Playlist</div>
          <div className="music-progress"><div className="fill" /></div>
          <div className="music-times">
            <span>1:04</span>
            <span>3:09</span>
          </div>
        </div>
      </div>

      <div className="music-controls">
        <button>⏮</button>
        <div className="play" onClick={() => window.open('https://music.youtube.com/playlist?list=PL3SwKz3nNa2RDOm22GPYj4wy9sqlpEi1-&si=0lxeZJz2diT3rZjF', '_blank', 'noopener,noreferrer')}>
          {playing ? "⏸" : "▶"}
        </div>
        <button>⏭</button>
      </div>

      <div className="music-queue">
        <h4>Up Next</h4>
        {queue.map((q) => (
          <div key={q.n} className="queue-item">
            <span className="q-num">{q.n}</span>
            <span className="q-song">{q.song}</span>
            <span className="q-artist">{q.artist}</span>
            <span className="q-dur">{q.dur}</span>
          </div>
        ))}
      </div>
    </div>
  );
}