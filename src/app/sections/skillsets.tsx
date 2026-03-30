type SkillsetGroup = {
  title: string;
  items: string[];
};

const skillsetsData: SkillsetGroup[] = [
  {
    title: "Frontend",
    items: ["HTML · CSS · JavaScript", "React · Next.js", "Tailwind CSS"],
  },
  {
    title: "UI/UX Design",
    items: [
      "Wireframing & Prototyping (Figma)",
      "User Interface Design",
      "User Experience Design",
      "Responsive Design",
      "Design Systems & Components",
      "User Flows & Journey Mapping",
    ],
  },
  {
    title: "Project & Collaboration",
    items: [
      "Project Planning and Management",
      "Developing Detailed Project Plans, Timelines, and Deliverables",
      "Milestone Tracking and Management",
      "Team Collaboration",
      "Time Management",
    ],
  },
];
export default function Skillsets() {
  return (
    <section className="space-y-6 rounded-3xl pt-10 ">
      <div className="space-y-2">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-[#ff6b4a] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#f6a623]" />
          Skillsets
        </p>
      </div>
      <div className="grid gap-4 px-2 text-sm md:grid-cols-3">
        {/* <div className="flex justify-between gap-4 px-2 text-sm "> */}
        {skillsetsData.map((group) => (
          <div key={group.title} className="space-y-2">
            <h4 className="font-semibold text-slate-900">{group.title}</h4>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-[#fff1e0] px-3 py-1 text-xs font-medium text-slate-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
