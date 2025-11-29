"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "../sections/projects";

type CarouselSizeProps = {
  projects: Project[];
  onImageClick?: (project: Project) => void;
};

export function CarouselSize({ projects, onImageClick }: CarouselSizeProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle image click - always use internal modal, but also call callback if provided
  const handleImageClick = (project: Project) => {
    setSelectedProject(project);
    // Also call the callback if provided for backward compatibility
    onImageClick?.(project);
  };

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
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-full mx-auto lg:px-12">
      {/* Mobile scroll hint */}
      <p className="text-xs text-slate-500 text-center mb-2 lg:hidden">
        Swipe to see more →
      </p>

      <ShadcnCarousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 sm:p-2">
                <article className="flex flex-col justify-between w-full h-52 md:h-64 lg:h-72 rounded-3xl border border-[#ffd18a] bg-white overflow-hidden text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  {/* Project Image - Clickable */}
                  {project.image && (
                    <div
                      onClick={() => handleImageClick(project)}
                      className="relative w-full h-32 md:h-40 lg:h-48 overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-col justify-between p-4 md:p-5 lg:p-6 grow">
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
                        <span className="rounded-full bg-[#fff1e0] px-1 py-1 text-xs font-medium text-slate-700">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex lg:flex border border-[#ffd18a]" />
        <CarouselNext className="hidden md:flex lg:flex border border-[#ffd18a]" />
      </ShadcnCarousel>

      {/* Modal for project screenshots */}
      {selectedProject && selectedProject.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm overflow-x-hidden"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition hover:scale-110"
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
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                {selectedProject.description}
              </p>

              {/* Screenshot */}
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-[#ffd18a] max-w-full">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} screenshot`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                />
              </div>

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
    </div>
  );
}
