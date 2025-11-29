"use client";

import Link from "next/link";
import Image from "next/image";
import Projects from "./sections/projects";
import Skillsets from "./sections/skillsets";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff9f2] text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:gap-16 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
              className="transition-colors hover:text-slate-900"
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
              className="transition-colors hover:text-slate-900"
            >
              Skillsets
            </a>
          </nav>
        </header>

        <section
          id="hero"
          className="grid grid-cols-1 items-center gap-10 py-10 md:grid-cols-2 w"
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96 overflow-hidden rounded-full border-4 border-white bg-white shadow-md">
                <Image
                  src="/images/MAE_IDPIC.jpg"
                  alt="Portrait of Mae Angela Espera"
                  width={640}
                  height={640}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="absolute -left-15 md:-left-15 lg:-left-20 bottom-0 z-10 h-32 w-32 md:h-32 md:w-32 lg:h-48 lg:w-48 overflow-hidden rounded-2xl border-4 border-none">
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

          <div className="flex flex-col gap-4 text-center md:text-left">
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
                className="rounded-full bg-[#ff6b4a] px-5 py-2 text-sm font-medium text-white shadow-sm transition-transform hover:scale-105 hover:bg-[#ff5933]"
              >
                Email me
              </a>
              <Link
                href="https://www.linkedin.com/in/mae-espera-635109368/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#ffd18a] px-5 py-2 text-sm font-medium text-slate-800 transition-transform hover:scale-105 hover:border-[#ffbf5c] hover:bg-[#fef0d8]"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/maeEsp"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#ffd18a] px-5 py-2 text-sm font-medium text-slate-800 transition-transform hover:scale-105 hover:border-[#ffbf5c] hover:bg-[#fef0d8]"
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl bg-[#fef0d8] px-4 py-4 sm:px-6 sm:py-6 shadow-sm flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="w-full md:w-1/2">
            <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#f6a623] pb-2">
              Soft, simple, and friendly web experiences.
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 md:text-base">
              I am a front-end developer with experience creating responsive,
              accessible, and user-centered digital experiences, while also
              being adaptable to roles in quality assurance and project
              management. I excel at translating design concepts into scalable
              interfaces, ensuring product reliability through structured
              testing, and supporting teams with clear communication and
              organized workflows.
            </p>
          </div>

          <dl className="mt-0 md:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm w-full md:w-1/2">
            <div>
              <dt className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-slate-500">
                Role
              </dt>
              <dd className="mt-1 font-medium text-slate-700 text-xs sm:text-sm">
                Frontend Developer · QA · Project Management
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
                Web Apps · Testing · Coordination
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
          className="relative z-10 
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

        <div id="projects">
          <Projects />
        </div>

        <div id="skillsets">
          <Skillsets />
        </div>

        <footer className="border-t border-[#ffdfaa] pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()}All Rights Reserved. Made with a little
            bunny energy.
          </p>
        </footer>
      </div>
    </main>
  );
}
