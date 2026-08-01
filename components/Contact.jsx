"use client";

import { useState } from "react";

const links = [
  {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/rohit-bhat-37a461339",
    logo: "/logos/linkedin-logo.webp",
  },
  {
    label: "Hire Me on Fiverr",
    href: "https://www.fiverr.com/s/gDREe5o",
    logo: "/logos/fiverr.png",
  },
  {
    label: "Follow on Instagram",
    href: "https://www.instagram.com/roh.editss",
    logo: "/logos/instagram-logo.jpg",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/cnub7719@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-8 md:px-16 mt-32 pb-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Let's Work Together
          </h2>

          <p className="text-slate-500 mt-5 text-lg leading-relaxed">
            Have a project in mind? Let's create engaging videos, thumbnails
            and visual content that helps your brand grow.
          </p>

          <div className="flex flex-col gap-4 mt-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-slate-200 px-6 py-4 rounded-xl hover:border-sky-300 transition"
              >
                <img
                  src={link.logo}
                  alt={`${link.label} logo`}
                  className="w-11 h-11 object-contain"
                />
                <span className="text-lg font-medium text-slate-800">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8">
          {status === "sent" ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold text-slate-900">
                Message sent
              </h3>
              <p className="text-slate-500 mt-3">
                Thanks for reaching out, I'll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-sky-600 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="_subject" value="New Portfolio Inquiry" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-sky-400 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-sky-400 transition"
                />
              </div>

              <div>
                <label htmlFor="service" className="sr-only">Select Service</label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-sky-400 transition"
                >
                  <option value="" disabled>Select Service</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Thumbnail Design">Thumbnail Design</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-sky-400 transition"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold hover:bg-sky-700 transition disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Inquiry"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong, please try again or email me
                  directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}