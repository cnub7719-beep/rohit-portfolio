"use client";

import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const ticking = useRef(false);

  useEffect(() => {
    const sections = ["home", "services", "portfolio", "process", "about", "faq", "contact"];

    const updateScrollState = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(section);
          }
        }
      });

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateScrollState);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Work", id: "portfolio" },
    { name: "Process", id: "process" },
    { name: "About", id: "about" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-5 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-slate-900">
          Rohit Bhat
        </a>

        <div className="hidden lg:flex items-center gap-7 text-slate-600 text-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition ${
                active === link.id ? "text-sky-600 font-semibold" : "hover:text-slate-900"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-sky-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-sky-700 transition"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="lg:hidden text-2xl text-slate-900"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-6 bg-white border border-slate-200 rounded-2xl p-6 space-y-5 text-slate-600 shadow-lg">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`block ${active === link.id ? "text-sky-600 font-semibold" : ""}`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-sky-600 text-white text-center px-6 py-3 rounded-full font-semibold"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
