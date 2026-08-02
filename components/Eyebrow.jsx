export default function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
      {children}
    </span>
  );
}