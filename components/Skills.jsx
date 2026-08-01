export default function Skills() {
  const skills = [
    "Video Editing",
    "Motion Graphics",
    "AI Video Creation",
    "Graphic Design",
    "Sound Design",
    "Thumbnail Design",
  ];

  return (
    <section id="skills" className="px-8 md:px-16 mt-32">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-slate-900">
          Skills That Power Every Frame
        </h2>
        <p className="text-slate-500 mt-3">
          A refined toolkit of disciplines, used together to shape every cut,
          motion and pixel.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white border border-slate-200 rounded-2xl p-10 flex items-center justify-center text-center hover:border-sky-300 hover:-translate-y-1 transition min-h-[140px]"
          >
            <p className="font-bold text-slate-900 text-2xl leading-snug">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}