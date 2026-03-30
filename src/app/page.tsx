"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Projects from "./sections/projects";
import Skillsets from "./sections/skillsets";

export default function Home() {
  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!revealElements.length) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#fff9f2] text-slate-900">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="animate-drift absolute -left-20 top-16 h-44 w-44 rounded-full bg-[#ffe2b5]/50 blur-2xl" />
        <div className="animate-drift absolute right-0 top-72 h-52 w-52 rounded-full bg-[#ffd4c7]/60 blur-2xl delay-200" />
        <div className="animate-drift absolute left-1/2 top-216 h-40 w-40 -translate-x-1/2 rounded-full bg-[#fff0d2]/70 blur-2xl delay-400" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:gap-16 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <header
          data-reveal
          className="reveal-on-scroll flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight">
              Mae Angela Espera
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Web Developer · Project Manager · Quality Assurance
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-[#f6a623]">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="hover-spring transition-colors hover:text-slate-900"
            >
              Projects
            </a>
            <a
              href="#skillsets"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("skillsets");
                element?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="hover-spring transition-colors hover:text-slate-900"
            >
              Skillsets
            </a>
          </nav>
        </header>

        <section
          id="hero"
          className="grid grid-cols-1 items-center gap-10 py-10 md:grid-cols-2"
        >
          <div
            data-reveal
            className="reveal-on-scroll delay-100 flex justify-center"
          >
            <div className="relative">
              <div className="animate-float h-48 w-48 overflow-hidden rounded-full border-4 border-white bg-white shadow-md md:h-64 md:w-64 lg:h-96 lg:w-96">
                <Image
                  src="/images/MAE_IDPIC.jpg"
                  alt="Portrait of Mae Angela Espera"
                  width={640}
                  height={640}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="hover-bunny animate-float-slow absolute bottom-0 -left-15 z-10 h-32 w-32 overflow-hidden rounded-2xl border-4 border-none md:-left-15 md:h-32 md:w-32 lg:-left-20 lg:h-48 lg:w-48">
                <Image
                  src="/images/miffy/miffy-flowers.png"
                  alt="Miffy illustration"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div
            data-reveal
            className="reveal-on-scroll delay-200 flex flex-col gap-4 text-center md:text-left"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#ff6b4a]">
              Portfolio
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Hi, I’m Mae — I like building soft, friendly web experiences.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Reach out if you’d like to chat about your next idea.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="mailto:espera.maea@gmail.com"
                className="hover-spring rounded-full bg-[#ff6b4a] px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#ff5933]"
              >
                Email me
              </a>
              <Link
                href="https://www.linkedin.com/in/mae-espera-635109368/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-spring rounded-full border border-[#ffd18a] px-5 py-2 text-sm font-medium text-slate-800 hover:border-[#ffbf5c] hover:bg-[#fef0d8]"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/maeEsp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-spring rounded-full border border-[#ffd18a] px-5 py-2 text-sm font-medium text-slate-800 hover:border-[#ffbf5c] hover:bg-[#fef0d8]"
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>

        <section
          data-reveal
          className="reveal-on-scroll delay-300 flex flex-col gap-4 space-y-4 rounded-3xl bg-[#fef0d8] px-4 py-4 shadow-sm sm:px-6 sm:py-6 md:flex-row md:gap-6"
        >
          <div className="w-full md:w-1/2">
            <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#f6a623] pb-2">
              Soft, simple, and friendly web experiences.
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 md:text-base">
              I am a front-end developer with experience building responsive,
              accessible, and user-centered digital experiences, complemented by
              a strong background in UI/UX design using Figma. I specialize in
              translating design concepts into scalable interfaces, crafting
              intuitive user experiences, ensuring product quality through
              structured testing, and supporting teams with clear communication
              and organized workflows.
            </p>
          </div>

          <dl className="mt-0 md:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm w-full md:w-1/2">
            <div>
              <dt className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-slate-500">
                Role
              </dt>
              <dd className="mt-1 font-medium text-slate-700 text-xs sm:text-sm">
                Frontend Developer · UI/UX
              </dd>
            </div>
            <div>
              <dt className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-slate-500">
                Location
              </dt>
              <dd className="mt-1 font-medium text-slate-700 text-xs sm:text-sm">
                Davao City, Philippines
              </dd>
            </div>
            <div>
              <dt className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-slate-500">
                Focus
              </dt>
              <dd className="mt-1 font-medium text-slate-700 text-xs sm:text-sm">
                Web Apps · UI/UX · Coordination
              </dd>
            </div>
            <div>
              <dt className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-slate-500">
                Availability
              </dt>
              <dd className="mt-1 font-medium text-slate-700 text-xs sm:text-sm">
                Open to opportunities
              </dd>
            </div>
          </dl>
        </section>
        <div
          data-reveal
          className="reveal-on-scroll delay-100 hover-bunny animate-float relative z-10 
        -mt-20 sm:-mt-20 md:-mt-30
         -mb-10 sm:-mb-10 md:-mb-25
          h-40 w-64 sm:h-52 sm:w-96 mx-auto flex items-center justify-center"
        >
          <Image
            src="/images/miffy/miffy-writing.png"
            alt="Miffy illustration"
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>

        <div
          id="projects"
          data-reveal
          className="reveal-on-scroll delay-100 relative"
        >
          <Projects />
          <div className="hover-bunny animate-float-slow pointer-events-none absolute left-1/2 z-10 h-40 w-64 -translate-x-1/2 overflow-hidden border-none pt-10 sm:-bottom-30 sm:h-52 sm:w-96 -bottom-15">
            <Image
              src="/images/miffy/miffy-back.png"
              alt="Miffy illustration"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div id="skillsets" data-reveal className="reveal-on-scroll delay-200">
          <Skillsets />
        </div>

        <footer className="border-t border-[#ffdfaa] pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} All Rights Reserved. Made with a little
            bunny energy.
          </p>
        </footer>
      </div>
    </main>
  );
}
