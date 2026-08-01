import Counter from "./Counter";

export default function Stats() {
  return (
    <section className="px-8 md:px-16 mt-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white border border-slate-200 rounded-3xl p-10 shadow-sm">
        <Counter number="3" label="Years Experience" />
        <Counter number="50" label="Projects Completed" />
        <Counter number="20" label="Clients Worked" />
        <Counter number="100" label="Videos Edited" />
      </div>
    </section>
  );
}
