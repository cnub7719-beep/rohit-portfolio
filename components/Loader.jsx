"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-700">
      <h1 className="text-5xl md:text-7xl font-black tracking-widest text-slate-900 animate-pulse">
        ROHIT BHAT
      </h1>

      <p className="mt-4 text-slate-500 text-lg">
        Video Editor & Thumbnail Designer
      </p>

      <div className="mt-10 w-40 h-1 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full bg-sky-500 animate-loader" />
      </div>
    </div>
  );
}
