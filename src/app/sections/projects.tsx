"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on ESC key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll and horizontal overflow
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflowX = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "unset";
      document.documentElement.style.overflowX = "unset";
    };
  }, [selectedProject]);

  return (
    <section className="relative grid gap-10 items-center">
      <div className="space-y-6 pb-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-[#ff6b4a] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#f6a623]" />
          Projects and Achievements
        </p>
        <CarouselSize projects={projects} onImageClick={setSelectedProject} />
      </div>

      {/* Center miffy image overlapping the project cards like a gallery accent */}
      <div
        className="pointer-events-none absolute left-1/2 -bottom-15 sm:-bottom-30 z-10 
       h-40 w-64 sm:h-52 sm:w-96
       
      -translate-x-1/2 overflow-hidden border-none pt-10"
      >
        <Image
          src="/images/miffy/miffy-back.png"
          alt="Miffy illustration"
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
