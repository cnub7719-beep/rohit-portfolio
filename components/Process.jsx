"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Star({ filled, delay }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={filled ? "#0284c7" : "none"}
      stroke={filled ? "#0284c7" : "#cbd5e1"}
      strokeWidth="1.5"
      initial={{ scale: 0, rotate: -30, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{
        duration: 0.35,
        delay,
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </motion.svg>
  );
}

function Rating({ value, rowDelay }) {
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} delay={rowDelay + n * 0.05} filled={n <= value} />
      ))}
    </div>
  );
}


function ToolIcon({ tool }) {
  const [failed, setFailed] = useState(false);

  if (tool.logo && !failed) {
    return (
      <div className="w-16 h-16 shrink-0 rounded-xl border border-slate-200 bg-white flex items-center justify-center p-3">
        <img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-16 h-16 shrink-0 rounded-xl flex items-center justify-center text-lg font-bold ${tool.bg} ${tool.text} ${
        tool.light ? "border border-sky-200" : ""
      }`}
    >
      {tool.initials}
    </div>
  );
}

export default function Process() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { step: "01", title: "Receive Footage", text: "You send over raw footage, references or a brief." },
    { step: "02", title: "Planning", text: "I map out pacing, structure and creative direction." },
    { step: "03", title: "Editing", text: "First cut assembled with story and rhythm in mind." },
    { step: "04", title: "Motion Graphics", text: "Titles, transitions and animated elements added." },
    { step: "05", title: "Color Grading", text: "Cinematic color grade applied for a polished look." },
    { step: "06", title: "Sound Design", text: "Music, SFX and audio mix balanced throughout." },
    { step: "07", title: "Quality Check", text: "Full review pass for pacing, sync and polish." },
    { step: "08", title: "Final Delivery", text: "Export and delivery in your required format." },
  ];

  // Logos load from /public/logos/ - save your files there using these
  // exact names. Falls back to initials automatically if a file is missing.
  const tools = [
    { name: "Premiere Pro", logo: "/logos/premiere-pro.png", initials: "Pr", bg: "bg-indigo-950", text: "text-indigo-300", rating: 5 },
    { name: "After Effects", logo: "/logos/after-effects.png", initials: "Ae", bg: "bg-purple-950", text: "text-purple-300", rating: 4 },
    { name: "Photoshop", logo: "/logos/photoshop.png", initials: "Ps", bg: "bg-blue-950", text: "text-sky-300", rating: 4 },
    { name: "AI Video Tools", logo: "/logos/gemini-logo.webp", initials: "AI", bg: "bg-sky-50", text: "text-sky-700", rating: 4, light: true },
    { name: "Motion Graphics", logo: "/logos/motion-graphic.png", initials: "Mo", bg: "bg-sky-50", text: "text-sky-700", rating: 5, light: true },
    { name: "Sound Design", logo: "/logos/sound-mixer.png", initials: "Sd", bg: "bg-sky-50", text: "text-sky-700", rating: 3, light: true },
  ];

  return (
    <section id="process" className="px-8 md:px-16 mt-32">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-slate-900">
          Seamless Workflow
        </h2>
        <p className="text-slate-500 mt-3">
          A precise, repeatable system from raw footage to polished final
          cut.
        </p>
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 mt-14 items-stretch">
        {/* Timeline */}
        <div ref={containerRef} className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200" />

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] top-2 w-px bg-sky-500 origin-top"
          />

          <div className="space-y-10">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex gap-6 items-start group"
              >
                <motion.div
                  initial={{ scale: 0.6 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.06 + 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-sky-200 group-hover:scale-110 transition-transform"
                >
                  {item.step}
                </motion.div>

                <div className="pt-1">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="text-slate-500 text-sm mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="h-full flex flex-col bg-white border border-slate-200 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-slate-900">Tools & Skills</h3>
          <p className="text-slate-400 text-sm mt-1">
            What I use daily, and how confident I am with each.
          </p>

          <div className="mt-8 flex-1 flex flex-col justify-between gap-6">
            {tools.map((tool, toolIndex) => (
              <div
                key={tool.name}
                className="flex items-center justify-between gap-5"
              >
                <div className="flex items-center gap-3">
                  <ToolIcon tool={tool} />
                  <span className="text-xl font-semibold text-slate-800">
                    {tool.name}
                  </span>
                </div>

                <Rating value={tool.rating} rowDelay={0.4 + toolIndex * 0.1} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}