"use client";

import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import Counter from "./Counter";

function Star({ filled, delay }) {
  return (
    <motion.svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "#f59e0b" : "none"}
      stroke={filled ? "#f59e0b" : "#cbd5e1"}
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay, type: "spring", stiffness: 300 }}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </motion.svg>
  );
}

export default function Skills() {
  const skills = [
    {
      name: "Video Editing",
      rating: 5,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M7 4v16M17 4v16M2 9h5M2 15h5M17 9h5M17 15h5" />
        </svg>
      ),
    },
    {
      name: "Motion Graphics",
      rating: 5,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
          <path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
        </svg>
      ),
    },
    {
      name: "AI Video Creation",
      rating: 5,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3z" />
        </svg>
      ),
    },
    {
      name: "Graphic Design",
      rating: 4,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 22c-5 0-9-4-9-9a9 9 0 0 1 9-9c4.5 0 8 3 8 6.5 0 2-1.5 3.5-3.5 3.5H14a1.5 1.5 0 0 0-1 2.6c.4.4.6.9.6 1.4 0 1.1-.9 2-2 2z" />
          <circle cx="7.5" cy="10.5" r="1" fill="white" />
          <circle cx="10.5" cy="7" r="1" fill="white" />
          <circle cx="15" cy="7.5" r="1" fill="white" />
        </svg>
      ),
    },
    {
      name: "Sound Design",
      rating: 4,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M3 10v4h4l5 5V5L7 10H3z" />
          <path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14" />
        </svg>
      ),
    },
    {
      name: "Thumbnail Design",
      rating: 5,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="white" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="px-8 md:px-16 mt-32">
      <div className="max-w-2xl text-center mx-auto">
        <Eyebrow>Craft &amp; Mastery</Eyebrow>
        <h2 className="text-4xl font-bold text-slate-900 mt-4">
          Skills That Power Every Frame
        </h2>
        <p className="text-slate-500 mt-3">
          A refined toolkit of disciplines, used together to shape every cut,
          motion and pixel.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-sky-300 hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md shadow-sky-200">
              {skill.icon}
            </div>

            <p className="font-bold text-slate-900 mt-4">{skill.name}</p>

            <div className="flex gap-0.5 mt-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} delay={0.3 + i * 0.08 + n * 0.05} filled={n <= skill.rating} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats counters, kept from the earlier request */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative mt-16"
      >
        <motion.div
          animate={{ opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-1 bg-gradient-to-r from-sky-200 via-cyan-200 to-sky-200 rounded-3xl blur-xl"
        />

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 bg-white border border-slate-200 rounded-3xl p-10 shadow-sm divide-x divide-slate-100">
          <Counter number="3" label="Years Experience" />
          <Counter number="50" label="Projects Completed" />
          <Counter number="20" label="Clients Worked" />
          <Counter number="100" label="Videos Edited" />
        </div>
      </motion.div>
    </section>
  );
}