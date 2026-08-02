export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The edits felt like studio-level production. Pacing and motion design really stood out.",
      name: "Client Name",
      role: "YouTube Creator",
    },
    {
      quote:
        "Fast turnaround and genuinely premium output. Would work together again.",
      name: "Client Name",
      role: "Brand Marketer",
    },
    {
      quote:
        "My content looked sharper and more cinematic almost immediately.",
      name: "Client Name",
      role: "Streamer",
    },
  ];

  return (
    <section className="px-8 md:px-16 mt-32">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-slate-900">
          Words From Clients
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-2xl p-6"
          >
            <p className="text-slate-600 leading-relaxed">"{t.quote}"</p>
            <p className="mt-4 font-semibold text-slate-900 text-sm">
              {t.name}
            </p>
            <p className="text-slate-400 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}