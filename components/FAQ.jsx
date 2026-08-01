"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How long does editing take?",
      a: "Short-form edits ship in 24-48 hours. Long-form and cinematic projects take 3-7 days depending on scope.",
    },
    {
      q: "Do you edit gaming videos?",
      a: "Absolutely. Montages, funny edits, highlights and kill montages, fast-paced with cinematic polish.",
    },
    {
      q: "Can you create AI-generated videos?",
      a: "Yes. AI commercials, product videos, cinematic visuals and storytelling using modern AI workflows.",
    },
    {
      q: "What software do you use?",
      a: "Premiere Pro, After Effects and Photoshop, plus modern AI video tools for generative work.",
    },
    {
      q: "How do we start?",
      a: "Reach out via the contact form or email below and I'll get back within 24 hours.",
    },
  ];

  return (
    <section id="faq" className="px-8 md:px-16 mt-32">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-10 max-w-3xl space-y-3">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center text-left px-6 py-4 font-semibold text-slate-900"
            >
              {item.q}
              <span className="text-sky-500 text-xl">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            {openIndex === i && (
              <p className="px-6 pb-5 text-slate-500 leading-relaxed">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
