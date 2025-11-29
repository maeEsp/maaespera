"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Project = {
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      // Don't go beyond the last position where we can show 3 cards
      const maxIndex = Math.max(0, projects.length - 3);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, projects.length - 3);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, projects.length - 3);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="relative grid gap-10 items-center">
      <div className="space-y-6 pb-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-[#ff6b4a] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#f6a623]" />
          Projects and Achievements
        </p>
        <div className="relative w-full">
          {/* Carousel container */}
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / 3)))`,
              }}
            >
              {projects.map((project) => (
                <div key={project.title} className="w-1/3 shrink-0 p-2 my-2">
                  <article className="flex flex-col justify-between w-full h-52 rounded-3xl border border-[#ffd18a] bg-white overflow-hidden text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    {/* Project Image - Clickable */}
                    {project.image && (
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="relative w-full h-32 overflow-hidden cursor-pointer"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="flex flex-col justify-between p-4 grow">
                      <div className="space-y-2">
                        {project.link ? (
                          <h4
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(
                                project.link,
                                "_blank",
                                "noopener,noreferrer"
                              );
                            }}
                            className="font-semibold text-slate-900 flex items-center gap-2 cursor-pointer hover:text-[#ff6b4a] transition-colors"
                          >
                            {project.title}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="h-4 w-4 text-[#ff6b4a] hover:scale-110 transition-transform"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                                clipRule="evenodd"
                              />
                              <path
                                fillRule="evenodd"
                                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </h4>
                        ) : (
                          <h4 className="font-semibold text-slate-900">
                            {project.title}
                          </h4>
                        )}
                        <p className="text-xs text-slate-600 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-[#fff1e0] px-2 py-1 text-xs font-medium text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="rounded-full bg-[#fff1e0] px-2 py-1 text-xs font-medium text-slate-700">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons and dot indicators */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={prevSlide}
              className="bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition hover:scale-110"
              aria-label="Previous project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[#ff6b4a]"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {Array.from({
                length: Math.max(1, projects.length - 2),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-[#ff6b4a]"
                      : "w-2 bg-[#ffd18a] hover:bg-[#ffbf5c]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition hover:scale-110"
              aria-label="Next project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[#ff6b4a]"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Center miffy image overlapping the project cards like a gallery accent */}
      <div className="pointer-events-none absolute left-1/2 -bottom-30 z-10 h-52 w-96 -translate-x-1/2 overflow-hidden border-none pt-10">
        <Image
          src="/images/miffy/miffy-back.png"
          alt="Miffy illustration"
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Modal for project screenshots */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition hover:scale-110"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-slate-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                {selectedProject.description}
              </p>

              {/* Screenshots */}
              {selectedProject.image ? (
                <div className="space-y-4">
                  <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-[#ffd18a]">
                    <Image
                      src={selectedProject.image}
                      alt={`${selectedProject.title} screenshot`}
                      fill
                      className="object-fill"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-[#ffd18a] bg-slate-100 flex items-center justify-center">
                  <p className="text-slate-400">No screenshots available</p>
                </div>
              )}

              {/* Tech stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#fff1e0] px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* External link button */}
              {selectedProject.link && (
                <div className="mt-6">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#ff6b4a] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#ff5933]"
                  >
                    Visit Website
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
