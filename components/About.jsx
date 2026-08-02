export default function About() {
  return (
    <section id="about" className="px-8 md:px-16 mt-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            About Me
          </h2>

          <p className="text-slate-600 mt-6 text-lg leading-relaxed">
            I'm Rohit Bhat, a Video Editor and Thumbnail Designer with 3
            years of experience creating engaging digital content for
            creators, brands and online platforms.
          </p>

          <p className="text-slate-500 mt-5 leading-relaxed">
            I specialize in cinematic storytelling, gaming edits, motion
            graphics, YouTube content and high-quality thumbnail designs
            that help content stand out.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8">
          <h4 className="font-bold text-xl text-slate-900">My Approach</h4>
          <p className="text-slate-500 mt-3 leading-relaxed">
            Understanding the goal first, then creating visuals that are not
            only beautiful but also help content perform better.
          </p>
        </div>
      </div>
    </section>
  );
}
