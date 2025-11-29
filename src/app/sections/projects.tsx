"use client";

import { CarouselSize } from "../components/Carousel";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  screenshots?: string[];
};

const projects: Project[] = [
  {
    title: "SAMAHAN Palaro 2024",
    description:
      "Official website for SAMAHAN Palaro 2024, featuring a full event gallery showcasing highlights, game moments, and team performances.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://samahan-palaro-2024-samahan-system-developments-projects.vercel.app/",
    image: "/images/screenshots/palaro-hero.png",
  },
  {
    title: "MISSCON 2025",
    description:
      "Official website for the Mindanao International Studies Society Convention 2025, showcasing event details, registration workflows, and announcements",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://misscon2025.info/",
    image: "/images/screenshots/misscon.png",
  },
  {
    title: "SAMAHAN UFest-Palaro 2025",
    description:
      "Official for the SAMAHAN UFest Palaro 2025, which served as the hub for event information, schedules, and game results.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://duyog2025.addu.edu.ph/",
    image: "/images/screenshots/ufestpalaro.png",
  },
  {
    title: "AMRY Pharmacy Management System",
    description:
      "A management system for AMRY Pharmacy, which allows for the management of inventory, sales, and customers.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Django", "Supabase"],
    image: "/images/screenshots/sia.png",
  },
  {
    title: "Jurisprudence Chatbot (Thesis)",
    description:
      "A chatbot that helps students with their jurisprudence questions.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Django", "LLM"],
    image: "/images/screenshots/thesis.png",
  },
  {
    title: "Aura Beauty",
    description:
      "Techstars Startup Weekend Astra Davao 2024: Pitching Competition. 2025 - A beauty start up with a curated selection of top international and premium local Philippine brands.",
    tech: ["Startup Competition", "2nd Place"],
    image: "/images/screenshots/Aura-Beauty.png",
  },
];

export default function Projects() {
  return (
    <section className="relative grid gap-10 items-center overflow-hidden lg:overflow-visible">
      <div className="space-y-6 pb-10 w-full overflow-x-hidden lg:overflow-x-visible">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-[#ff6b4a] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#f6a623]" />
          Projects and Achievements
        </p>
        <CarouselSize projects={projects} />
      </div>
    </section>
  );
}
