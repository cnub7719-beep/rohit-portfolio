export default function FeaturedProjects() {
  const projects = [
    {
      driveId: "1K5pmFIkAMjENjeqDv27YsqVxY8A5U83A",
      title: "Gaming Highlight Reel",
      category: "Gaming",
      description:
        "Fast-paced gameplay montage with dynamic cuts, sound design and cinematic transitions.",
    },
    {
      driveId: "1azRH4jVlfDFmzdfwk9DTdHephby-MOwT",
      title: "Cinematic Storytelling",
      category: "Video Editing",
      description:
        "Narrative-driven edit with smooth pacing, color grading and emotional beats.",
    },
    {
      driveId: "1lt8uI40GY0Gxy9b5IYZrqDTkBJNKaTGb",
      title: "Motion Graphics Showcase",
      category: "Motion Graphics",
      description:
        "Animated titles, transitions and visual effects layered for maximum impact.",
    },
    {
      driveId: "19gKEMo8CaKfq-yIMlAAza3e-7ytm1keL",
      title: "Talking Head Edit",
      category: "YouTube Editing",
      description:
        "Retention-focused edit with motion captions, jump cuts and clean pacing.",
    },
    {
      driveId: "19pQzn-KFUtaSHl1mHvHRrkT175pRBTi-",
      title: "Brand Promo Video",
      category: "Commercial",
      description:
        "Polished promotional edit built to highlight a brand's story and product.",
    },
    {
      driveId: "1AynMQbNUf4EleGQDR5NMkKt8rze7JPaA",
      title: "Short-Form Content",
      category: "Reels & Shorts",
      description:
        "High-retention vertical edit optimized for Reels, Shorts and TikTok.",
    },
    {
      driveId: "1HLsoWhBWu0jOWg_ohcH6EBCw1xPZ9oho",
      title: "AI-Assisted Edit",
      category: "AI Video Creation",
      description:
        "Modern AI-assisted workflow blended with traditional editing techniques.",
    },
  ];

  return (
    <section id="portfolio" className="px-8 md:px-16 mt-32">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Featured Work
        </h2>
        <p className="text-slate-500 mt-4 text-lg">
          A selection of projects showcasing my editing style, storytelling
          and creative approach.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.driveId} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-sky-300 transition duration-500 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
      <div className="relative aspect-video bg-slate-100">
        <iframe
          src={`https://drive.google.com/file/d/${project.driveId}/preview`}
          className="w-full h-full"
          allow="autoplay"
          allowFullScreen
          title={project.title}
        />
      </div>

      <div className="p-6">
        <span className="inline-block px-4 py-1 rounded-full bg-sky-50 text-sky-700 text-sm border border-sky-200">
          {project.category}
        </span>

        <h3 className="text-xl font-bold mt-4 text-slate-900">
          {project.title}
        </h3>

        <p className="text-slate-500 mt-3 leading-relaxed text-sm">
          {project.description}
        </p>
      </div>
    </div>
  );
}