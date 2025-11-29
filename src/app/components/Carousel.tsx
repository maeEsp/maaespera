"use client";

import * as React from "react";
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
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-full mx-auto">
      {/* Mobile scroll hint */}
      <p className="text-xs text-slate-500 text-center mb-2 md:hidden">
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
                <article className="flex flex-col justify-between w-full h-52 rounded-3xl border border-[#ffd18a] bg-white overflow-hidden text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  {/* Project Image - Clickable */}
                  {project.image && (
                    <div
                      onClick={() => onImageClick?.(project)}
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </ShadcnCarousel>
    </div>
  );
}
