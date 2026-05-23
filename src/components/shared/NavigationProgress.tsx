"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    setVisible(true);
    setProgress(15);

    const t1 = setTimeout(() => setProgress(55), 120);
    const t2 = setTimeout(() => setProgress(78), 380);
    const t3 = setTimeout(() => setProgress(93), 650);
    const t4 = setTimeout(() => {
      setProgress(100);
      const t5 = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 250);
      timers.current.push(t5);
    }, 900);

    timers.current.push(t1, t2, t3, t4);
    return () => timers.current.forEach(clearTimeout);
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[3px] bg-primary transition-all"
      style={{
        width: `${progress}%`,
        opacity: visible ? 1 : 0,
        transitionDuration: progress === 100 ? "200ms" : "600ms",
        transitionTimingFunction: "ease-out",
        boxShadow: visible ? "0 0 10px #FF6B35, 0 0 4px #FF6B35" : "none",
      }}
    />
  );
}
