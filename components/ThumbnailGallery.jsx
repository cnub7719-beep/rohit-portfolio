"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ThumbnailGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const thumbnails = [
    {
      image: "Match Day fiverrr",
      title: "Cinematic Match Poster",
      category: "Sports Design",
      description:
        "Cinematic key-art poster with bold typography, dramatic color grading and editorial composition.",
    },
    {
      image: "porti",
      title: "Portfolio Showcase",
      category: "Creative Design",
      description:
        "Modern portfolio artwork with clean layout, premium visuals and strong presentation.",
    },
    {
      image: "React",
      title: "Technology Thumbnail",
      category: "Tech Content",
      description:
        "High-impact technology thumbnail designed with sharp visuals and strong hierarchy.",
    },
    {
      image: "Suszane",
      title: "Creative Content Thumbnail",
      category: "YouTube Design",
      description:
        "Attention-grabbing thumbnail with expressive composition and engaging visuals.",
    },
    {
      image: "b2",
      title: "High Impact Thumbnail",
      category: "YouTube Design",
      description:
        "Click-focused thumbnail design with balanced colors and powerful visual elements.",
    },
    {
      image: "BGmi",
      title: "Gaming Thumbnail",
      category: "Gaming Design",
      description:
        "Dynamic gaming thumbnail with cinematic effects and intense action styling.",
    },
    {
      image: "BMW vlog 2_!",
      title: "Automotive Design",
      category: "Lifestyle Content",
      description:
        "Luxury automotive thumbnail with cinematic lighting and premium storytelling.",
    },
  ];

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="thumbnails" className="px-8 md:px-16 mt-32">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Thumbnail Designs
        </h2>
        <p className="text-slate-500 mt-4 text-lg">
          High-converting thumbnails designed to capture attention and
          increase clicks.
        </p>
      </div>

      {/*
        FIX: previously a plain 3-column grid, so 7 items left a lone
        card in the final row with a big empty gap beside it. Using
        flex-wrap + justify-center instead means an incomplete last
        row centers itself rather than sitting flush-left with dead space.
      */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {thumbnails.map((item) => {
          const src = `/projects/${encodeURIComponent(item.image)}.png`;

          return (
            <div
              key={item.image}
              className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-sky-300 transition duration-500 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
            >
              <div
                className="relative overflow-hidden cursor-pointer h-64"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-sm px-4 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold mt-4 text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
            aria-label="Close preview"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Full size preview"
            className="max-h-[90vh] max-w-[90vw] rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
