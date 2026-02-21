import HeroRotator from "@/components/hero/HeroRotator";
import MetricsStrip from "@/components/sections/MetricsStrip";
import StoryReel from "@/components/sections/StoryReel";
import SocialPresence from "@/components/sections/SocialPresence";
import LuxBackground from "@/components/ui/LuxBackground";
import SectionRule from "@/components/ui/SectionRule";

const pillars = [
  {
    title: "Institutional Leadership",
    subtitle: "A record of governance, strategy, and execution.",
    link: "https://www.uaab.org/",
    cta: "Leadership Platform",
    note: "UAAB",
  },
  {
    title: "Private Real Estate Portfolio",
    subtitle: "Strategic assets across residential and commercial markets.",
    link: "https://www.sold100.com/",
    cta: "Portfolio Access",
    note: "SOLD100",
  },
  {
    title: "Renewable Infrastructure",
    subtitle:
      "Strategic energy initiatives and modern residential power systems.",
    link: "https://www.sunrun.com/",
    cta: "Energy Platform",
    note: "Sunrun",
  },
  {
    title: "Public Service Mandate",
    subtitle: "Appointed leadership and regulatory oversight.",
    link: "https://www.pgplanningboard.org/meet-the-board/",
    cta: "Governance Record",
    note: "PG Planning Board",
  },
  {
    title: "Philanthropic Capital",
    subtitle: "Long-term community and institutional investment.",
    link: "https://www.sold100givesbackfoundation.org/",
    cta: "Foundation Platform",
    note: "Gives Back",
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
      <StoryReel />

      <SectionRule />

      {/* PILLARS */}
      <section className="px-6 md:px-14 lg:px-20 pb-32 md:pb-40">
        <div className="max-w-6xl">
          <p className="uppercase tracking-[0.34em] text-white/55 text-[11px]">
            Pillar Platforms
          </p>

          <h3 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            Five arenas. One standard.
          </h3>

          <div className="mt-6 h-px w-16 bg-[#C9A24D]/80" />

          <p className="mt-6 text-white/65 max-w-2xl text-lg">
            Each pillar is a distinct platform with public record, active work,
            and a clear mandate.
          </p>
        </div>

        {/* Stage wrapper (adds depth) */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-4 md:p-8 backdrop-blur-sm">
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
                <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition duration-700
                  bg-[radial-gradient(40%_40%_at_30%_20%,rgba(201,162,77,0.18)_0%,rgba(0,0,0,0)_60%)]" />

                <div className="relative p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.30em] text-white/40">
                      Pillar
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.30em] text-[#C9A24D]/85">
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

                {/* bottom accent */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionRule />

      <SocialPresence />

      {/* FINAL CTA */}
      <section className="px-6 md:px-14 lg:px-20 pb-40">
        <div className="text-center rounded-3xl border border-white/10 bg-white/[0.02] py-20 px-8 backdrop-blur-sm">
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-[1.05]">
            Let’s build something serious.
          </h2>

          <p className="text-white/65 max-w-2xl mx-auto mb-12 text-lg">
            For institutional partnerships, private portfolio conversations,
            and strategic initiatives.
          </p>

          <button className="border border-[#C9A24D]/75 px-12 py-5 rounded-full uppercase tracking-[0.34em] text-[11px] text-[#C9A24D] hover:bg-[#C9A24D]/10 transition">
            Get in touch with Dr. Okoye
          </button>
        </div>
      </section>
    </main>
  );
}