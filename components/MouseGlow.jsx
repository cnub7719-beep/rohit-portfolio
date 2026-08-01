"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    let animationFrame;

    const move = (e) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 w-64 h-64 rounded-full bg-sky-400/20 blur-[80px]"
      style={{
        transform: `translate3d(${position.x - 128}px, ${position.y - 128}px, 0)`,
      }}
    />
  );
}
