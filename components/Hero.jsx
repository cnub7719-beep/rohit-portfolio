export default function Hero() {
  return (
    <section id="home" className="relative px-8 md:px-16 pt-32 pb-10 overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-sky-300/40 blur-[120px] rounded-full" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex px-5 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
          Available for Freelance Projects
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-slate-900">
          I Create
          <span className="block bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Visual Stories
          </span>
          That Make People Stop Scrolling
        </h1>

        <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
          I'm Rohit Bhat, a Video Editor and Thumbnail Designer with 3
          years of experience creating cinematic videos, gaming edits,
          motion graphics and high-quality designs.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <a
            href="#portfolio"
            className="bg-sky-600 text-white px-8 py-4 rounded-full font-bold hover:bg-sky-700 transition"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="bg-white border border-slate-200 px-8 py-4 rounded-full hover:border-sky-300 transition"
          >
            Let's Work Together
          </a>
        </div>

        <p className="mt-10 text-sm text-slate-500 font-medium">
          Trusted by 50+ creators &amp; brands
        </p>
      </div>
    </section>
  );
}
