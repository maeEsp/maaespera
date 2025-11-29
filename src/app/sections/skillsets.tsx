export default function Skillsets() {
  return (
    <section className="space-y-6 rounded-3xl pt-10 ">
      <div className="space-y-2">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-[#ff6b4a] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#f6a623]" />
          Skillsets
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3 text-sm px-2">
        <div className="space-y-2">
          <h4 className="font-semibold text-slate-900">Frontend</h4>
          <ul className="flex flex-wrap gap-2">
            <li className="rounded-full bg-[#fff1e0] px-3 py-1 text-xs font-medium text-slate-800">
              HTML · CSS · JS
            </li>
            <li className="rounded-full bg-[#fff1e0] px-3 py-1 text-xs font-medium text-slate-800">
              React · Next.js
            </li>
            <li className="rounded-full bg-[#fff1e0] px-3 py-1 text-xs font-medium text-slate-800">
              Tailwind CSS
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-slate-900">QA & Testing</h4>
          <ul className="flex flex-wrap gap-2">
            <li className="rounded-full bg-[#fff1e0] px-3 py-1 text-xs font-medium text-slate-800">
              Manual testing
            </li>
            <li className="rounded-full bg-[#fff1e0] px-3 py-1 text-xs font-medium text-slate-800">
              Test case writing
            </li>
            <li className="rounded-full bg-[#fff1e0] px-3 py-1 text-xs font-medium text-slate-800">
              Bug reporting
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-slate-900">
            Project & Collaboration
          </h4>
          <ul className="flex flex-wrap gap-2">
            <li className="rounded-full bg-[#fff1e0] px-3 py-1 text-xs font-medium text-slate-800">
              Agile / Scrum
            </li>
            <li className="rounded-full bg-[#fff1e0] px-3 py-1 text-xs font-medium text-slate-800">
              Task coordination
            </li>
            <li className="rounded-full bg-[#fff1e0] px-3 py-1 text-xs font-medium text-slate-800">
              Documentation
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
