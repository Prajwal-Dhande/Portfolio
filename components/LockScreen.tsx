"use client";

import { useState, useEffect } from "react";

export default function LockScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"show" | "exit">("show");

  useEffect(() => {
    // 1s faster than before (was 2900)
    const t = setTimeout(() => setPhase("exit"), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase === "exit") {
      const t = setTimeout(onComplete, 950);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  return (
    // <div
    //   style={{
    //     position: "fixed",
    //     inset: 0,
    //     zIndex: 9999,
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     // background: [
    //     //   "radial-gradient(ellipse 88% 65% at 8% 12%,  rgba(157, 116, 228, 0.88)  0%, transparent 52%)",
    //     //   "radial-gradient(ellipse 65% 75% at 88% 10%, rgba(197, 171, 245, 0.82) 0%, transparent 50%)",
    //     //   "radial-gradient(ellipse 70% 60% at 75% 52%, rgba(245,155,100,0.78) 0%, transparent 50%)",
    //     //   "radial-gradient(ellipse 65% 55% at 15% 65%, rgba(239, 138, 168, 0.72) 0%, transparent 48%)",
    //     //   "radial-gradient(ellipse 60% 58% at 50% 88%, rgba(251, 188, 111, 0.7) 0%, transparent 50%)",
    //     //   "radial-gradient(ellipse 50% 45% at 48% 42%, rgba(200,140,230,0.50) 0%, transparent 44%)",
    //     //   "#7040C0",
    //     // ].join(", "),
    //     background: [
    //       "radial-gradient(ellipse 80vw 50vh at 8% 12%,  rgba(188, 159, 243, 0.62) 0%, transparent 52%)",
    //       "radial-gradient(ellipse 60vw 55vh at 88% 10%, rgba(188, 170, 223, 0.82) 0%, transparent 50%)",
    //       "radial-gradient(ellipse 65vw 45vh at 75% 52%, rgba(245,155,100,0.78)    0%, transparent 50%)",
    //       "radial-gradient(ellipse 60vw 40vh at 15% 65%, rgba(239, 138, 168, 0.72) 0%, transparent 48%)",
    //       "radial-gradient(ellipse 55vw 45vh at 50% 88%, rgba(251, 188, 111, 0.7)  0%, transparent 50%)",
    //       "radial-gradient(ellipse 45vw 35vh at 48% 42%, rgba(217, 169, 241, 0.5)    0%, transparent 44%)",
    //       "#FF70C8",
    //     ].join(", "),
    //     transform: phase === "exit" ? "translateY(-100%)" : "translateY(0)",
    //     transition:
    //       phase === "exit"
    //         ? "transform 0.95s cubic-bezier(0.76, 0, 0.24, 1)"
    //         : "none",
    //     pointerEvents: phase === "exit" ? "none" : "auto",
    //     userSelect: "none",
    //     overflow: "hidden",
    //   }}
    // >
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        // background: [
        //   "radial-gradient(ellipse 80vw 50vh at 8% 12%, rgba(188,159,243,.62) 0%, transparent 52%)",
        //   "radial-gradient(ellipse 60vw 55vh at 88% 10%, rgba(188,170,223,.82) 0%, transparent 50%)",
        //   "radial-gradient(ellipse 65vw 45vh at 75% 52%, rgba(245,155,100,.78) 0%, transparent 50%)",
        //   "radial-gradient(ellipse 60vw 40vh at 15% 65%, rgba(239,138,168,.72) 0%, transparent 48%)",
        //   "radial-gradient(ellipse 55vw 45vh at 50% 88%, rgba(251,188,111,.7) 0%, transparent 50%)",
        //   "radial-gradient(ellipse 45vw 35vh at 48% 42%, rgba(217,169,241,.5) 0%, transparent 44%)",
        //   "#FF59BF",
        // ].join(","),

        /* glass */
        backdropFilter:
          phase === "exit"
            ? "blur(28px) saturate(170%)"
            : "blur(20px) saturate(150%)",

        WebkitBackdropFilter:
          phase === "exit"
            ? "blur(28px) saturate(170%)"
            : "blur(20px) saturate(150%)",

        /* lockscreen sheet motion */
        transform:
          phase === "exit"
            ? "translateY(-100%) scale(.982)"
            : "translateY(0) scale(1)",

        opacity: phase === "exit" ? 0.9 : 1,

        filter:
          phase === "exit"
            ? "blur(6px)"
            : "blur(0px)",

        /* rounded bottom like iOS sheet */
        borderBottomLeftRadius: "6px",
        borderBottomRightRadius: "6px",

        /* subtle glass edge highlight */
        boxShadow: `
      inset 0 1px 0 rgba(255,255,255,.35),
      inset 0 -1px 0 rgba(255,255,255,.08)
    `,

        transition: `
      transform 1s cubic-bezier(.76,0,.24,1),
      opacity 1s cubic-bezier(.76,0,.24,1),
      filter 1s cubic-bezier(.76,0,.24,1),
      backdrop-filter 1s cubic-bezier(.76,0,.24,1)
    `,

        pointerEvents: phase === "exit" ? "none" : "auto",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          padding: "0 24px",
          fontFamily: "'Playwrite BR', cursive",
          fontSize: "clamp(30px, 10vw, 118px)",
          fontWeight: 400,
          color: "rgb(255, 254, 241)",
          // letterSpacing: "0.08em",
          position: "relative",
          textAlign: "center",
          animation: "helloWrite 1s linear forwards",
          transform: "skewX(-8deg)",
          display: "inline-block",
        }}
      >
        hello
      </p>
    </div>
  );
}
