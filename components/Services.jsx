export default function Services() {
  const services = [
    {
      title: "Talking Head Videos",
      text: "YouTube editing, retention editing, motion captions and B-roll integration.",
      tags: ["YouTube Editing", "Retention Editing", "Motion Captions", "Sound Design"],
    },
    {
      title: "Motion Graphics",
      text: "Titles, logo animation, lower thirds and dynamic explainers.",
      tags: ["Titles", "Logo Animation", "Lower Thirds", "Explainers"],
    },
    {
      title: "Gaming Videos",
      text: "Cinematic montages, funny edits, highlights and kill montages.",
      tags: ["Montages", "Highlights", "Fast-Paced Editing"],
    },
    {
      title: "AI Video Creation",
      text: "Modern AI workflows for commercials, product videos and storytelling.",
      tags: ["AI Commercials", "AI Storytelling", "AI Social Ads"],
      premium: true,
    },
    {
      title: "Short & Long Form",
      text: "Reels, TikTok, Shorts, documentaries, podcasts and vlogs.",
      tags: ["Reels", "Shorts", "Podcasts", "Documentaries"],
    },
    {
      title: "Thumbnails & Posters",
      text: "Click-worthy design that stops the scroll, built in Photoshop.",
      tags: ["YouTube Thumbnails", "Key Art Posters", "Color Grading"],
    },
  ];

  return (
    <section id="services" className="px-8 md:px-16 mt-32">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-slate-900">My Services</h2>
        <p className="text-slate-500 mt-3">
          Full-stack video production, from talking-head retention edits to
          AI-generated cinematic spots.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative bg-white border border-slate-200 p-8 rounded-3xl hover:border-sky-300 hover:-translate-y-1 transition shadow-sm"
          >
            {service.premium && (
              <span className="absolute top-6 right-6 text-xs font-semibold text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
                Premium
              </span>
            )}

            <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
            <p className="text-slate-500 mt-3 leading-relaxed text-sm">
              {service.text}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
