import HeroRotator from "@/components/hero/HeroRotator";
import MetricsStrip from "@/components/sections/MetricsStrip";
import StoryReel from "@/components/sections/StoryReel";
import SocialPresence from "@/components/sections/SocialPresence";
import LuxBackground from "@/components/ui/LuxBackground";
import SectionRule from "@/components/ui/SectionRule";
import Reveal from "@/components/ui/Reveal";

const pillars = [
  {
    title: "Institutional Leadership",
    subtitle: "A record of governance, strategy, and execution.",
    link: "https://www.uaab.org/",
    cta: "Leadership Platform",
    note: "United Africa Advisory Board",
  },
  {
    title: "Private Real Estate Portfolio",
    subtitle: "Strategic assets across residential and commercial markets.",
    link: "https://www.sold100.com/",
    cta: "Portfolio Access",
    note: "Sold 100 Real Estate Inc",
  },
  {
    title: "Renewable Infrastructure",
    subtitle: "Strategic energy initiatives and modern residential power systems.",
    link: "https://www.sunrun.com/",
    cta: "Energy Platform",
    note: "Autograph Renewal Energy Powered by SunRun",
  },
  {
    title: "Public Service Mandate",
    subtitle: "Appointed leadership and regulatory oversight.",
    link: "https://www.pgplanningboard.org/meet-the-board/",
    cta: "Governance Record",
    note: "Maryland National Capital Park and Planning Commission - M-NCPPC",
  },
  {
    title: "Philanthropic Capital",
    subtitle: "Long-term community and institutional investment.",
    link: "https://www.sold100givesbackfoundation.org/",
    cta: "Foundation Platform",
    note: "Sold 100 Gives Back Foundation",
  },
  {
    title: "Urban Development",
    subtitle: "Real estate development and general contracting.",
    link: "https://www.bmogeneralcontractors.com/",
    cta: "Development Platform",
    note: "BMO LLC General Contractors",
  },
] as const;

export default function Home() {
  return (
    <main className="text-white relative">
      <LuxBackground />

      <HeroRotator />
      <MetricsStrip />

      <SectionRule />

      {/* STORY REEL */}
      <Reveal>
        <StoryReel />
      </Reveal>

      <SectionRule />

      {/* PILLARS */}
      <Reveal delay={0.04}>
        <section className="px-6 md:px-14 lg:px-20 pb-14 md:pb-16">
          <div className="max-w-6xl">
            <p className="uppercase tracking-[0.34em] text-white/55 text-[11px]">
              Pillar Platforms
            </p>

            <h3 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
              Six arenas. One standard.
            </h3>

            <div className="mt-6 h-px w-16 bg-[#C9A24D]/80" />

            <p className="mt-6 text-white/65 max-w-2xl text-lg">
              Each pillar is a distinct platform with public record, active work,
              and a clear mandate.
            </p>
          </div>

          {/* Stage wrapper (adds depth + premium separation) */}
          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-4 md:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pillars.map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "group relative block overflow-hidden rounded-3xl",
                    "border border-white/10 bg-white/[0.03]",
                    "shadow-[0_60px_160px_rgba(0,0,0,0.65)]",
                    "transition-all duration-500",
                    "hover:-translate-y-2",
                  ].join(" ")}
                >
                  {/* gold ambient bloom */}
                  <div
                    className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition duration-700
                    bg-[radial-gradient(40%_40%_at_30%_20%,rgba(201,162,77,0.18)_0%,rgba(0,0,0,0)_60%)]"
                  />

                  <div className="relative p-10">
                    <div className="flex items-start justify-between gap-6">
                      <span className="text-[11px] uppercase tracking-[0.30em] text-white/40">
                        Pillar
                      </span>

                      {/* note (supports long names, stays premium) */}
                      <span className="text-[11px] uppercase tracking-[0.28em] text-[#C9A24D]/85 text-right leading-snug max-w-[260px]">
                        {p.note}
                      </span>
                    </div>

                    <h4 className="mt-8 font-serif text-3xl leading-[1.1] tracking-[-0.01em]">
                      {p.title}
                    </h4>

                    <p className="mt-6 text-white/70 leading-relaxed max-w-[44ch]">
                      {p.subtitle}
                    </p>

                    <div className="mt-10 flex items-center gap-4">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-[#C9A24D]/50 text-[#C9A24D] transition group-hover:border-[#C9A24D]">
                        ↗
                      </span>
                      <span className="uppercase tracking-[0.34em] text-[11px] text-[#C9A24D]">
                        {p.cta}
                      </span>
                    </div>
                  </div>

                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* DISTINCT MINI STRIP: Honors & Awards + Publications */}
      <Reveal delay={0.06}>
        <section className="px-6 md:px-14 lg:px-20 pb-20 md:pb-24">
          <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.015] p-6 md:p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="uppercase tracking-[0.34em] text-white/45 text-[11px]">
                  Record
                </p>
                <h3 className="mt-4 font-serif text-2xl md:text-3xl">
                  Honors and publications
                </h3>
                <p className="mt-4 text-white/60">
                  Select recognition and editorial references.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/awards"
                  className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.02] px-7 py-3
                             text-[11px] uppercase tracking-[0.30em] text-white/75
                             hover:border-[#C9A24D]/35 hover:bg-white/[0.03] transition"
                >
                  View Awards <span className="text-[#C9A24D]">↗</span>
                </a>

                <a
                  href="/publications"
                  className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.02] px-7 py-3
                             text-[11px] uppercase tracking-[0.30em] text-white/75
                             hover:border-[#C9A24D]/35 hover:bg-white/[0.03] transition"
                >
                  View Publications <span className="text-[#C9A24D]">↗</span>
                </a>
              </div>
            </div>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </section>
      </Reveal>

      <SectionRule />

      {/* SOCIAL PRESENCE (icons) */}
      <Reveal delay={0.08}>
        <SocialPresence />
      </Reveal>

      {/* FINAL CTA */}
      <Reveal delay={0.1}>
        <section className="px-6 md:px-14 lg:px-20 pb-40">
          <div className="text-center rounded-3xl border border-white/10 bg-white/[0.02] py-20 px-8 backdrop-blur-sm">
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-[1.05]">
              Let’s build something serious.
            </h2>

            <p className="text-white/65 max-w-2xl mx-auto mb-12 text-lg">
              For institutional partnerships, private portfolio conversations, and
              strategic initiatives.
            </p>

            <a
              href="/consultation"
              className="inline-flex items-center justify-center border border-[#C9A24D]/75 px-12 py-5 rounded-full uppercase tracking-[0.34em] text-[11px] text-[#C9A24D] hover:bg-[#C9A24D]/10 transition"
            >
              Get in touch with Dr. Okoye
            </a>
          </div>
        </section>
      </Reveal>
    </main>
  );
}