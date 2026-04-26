"use client";

import { useState } from "react";
import Desktop from "@/components/Desktop";
import LockScreen from "@/components/LockScreen";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      {!unlocked && <LockScreen onComplete={() => setUnlocked(true)} />}
      <Desktop />
    </>
  );
}
