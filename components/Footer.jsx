export default function Footer() {
  return (
    <footer className="px-8 md:px-16 py-10 border-t border-slate-200 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Rohit Bhat</h2>
          <p className="text-slate-500 mt-2">
            Video Editor & Thumbnail Designer
          </p>
        </div>

        <div className="flex gap-6 text-slate-500">
          <a
            href="https://www.linkedin.com/in/rohit-bhat-37a461339"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://www.fiverr.com/s/gDREe5o"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 transition"
          >
            Fiverr
          </a>
          <a
            href="https://www.instagram.com/roh.editss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 transition"
          >
            Instagram
          </a>
        </div>
      </div>

      <p className="text-center text-slate-400 mt-8 text-sm">
        © {new Date().getFullYear()} Rohit Bhat. All rights reserved.
      </p>
    </footer>
  );
}
