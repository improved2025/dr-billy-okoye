import Image from "next/image";

const orgs = [
  // Added (requested)
  { name: "Businessmen Fellowship", src: "/images/bf-logo.png" },
  { name: "Awkuzu Cultural Association", src: "/images/aca-logo.png" },
  {
    name: "Mid-Atlantic Government Recovery Agency Corporation",
    src: "/images/mid-logo.png",
  },

  // Existing
  { name: "Sold 100 Real Estate Inc", src: "/images/sold-logo.png" },
  { name: "BMO LLC General Contractors", src: "/images/bmo-logo.png" },
  { name: "Sold 100 Gives Back Foundation", src: "/images/giveback-logo.png" },
  { name: "Autograph Solar", src: "/images/auto-logo.png" },
  { name: "United Africa Advisory Board", src: "/images/uaab-logo.png" },
  {
    name: "Maryland National Capital Park and Planning Commission - M-NCPPC",
    src: "/images/mncppc-logo.png",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="text-white">
      <section className="px-6 md:px-14 lg:px-20 pt-24 md:pt-32 pb-16">
        <p className="uppercase tracking-[0.34em] text-white/55 text-[11px]">
          About
        </p>

        <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
          Dr. Billy Okoye
        </h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_50px_140px_rgba(0,0,0,0.65)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/bio pic.jpeg"
                  alt="Dr. Billy Okoye"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.15)_60%,rgba(0,0,0,0.06)_100%)]" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm">
              <h2 className="font-serif text-2xl md:text-3xl">Executive Bio</h2>

              <div className="mt-6 h-px w-16 bg-[#C9A24D]/80" />

              <p className="mt-6 text-white/70 leading-relaxed">
                Dr. Billy Okoye is a seasoned real estate executive, developer,
                and clean-energy entrepreneur with over two decades of
                experience building high-performing organizations across
                brokerage, construction, property development, and renewable
                infrastructure.
              </p>

              <p className="mt-5 text-white/70 leading-relaxed">
                He is the Founder and Principal Broker of Sold 100 Real Estate
                Inc., leading a multi-state operation with 50+ agents and more
                than $250M in closed transactions across Maryland, Washington
                DC, and Virginia. His portfolio includes residential and
                commercial brokerage, distressed asset redevelopment, land
                acquisition, and large-scale investment projects, driven by
                data-informed valuation systems and disciplined execution.
              </p>

              <p className="mt-5 text-white/70 leading-relaxed">
                Dr. Okoye also serves as Founder and CEO of Autograph Solar,
                delivering megawatt-scale clean energy solutions, and Group
                Managing Director of multiple companies spanning construction,
                collections, and international business services. His leadership
                extends into public service, including Board Chairman of Sold
                100 Gives Back Foundation and Honorable Commissioner with the
                Maryland-National Capital Park and Planning Commission, where he
                contributes to governance, ethics, and regional development
                strategy.
              </p>

              <p className="mt-5 text-white/70 leading-relaxed">
                Holding a Professional Doctorate in Business Administration,
                NABCEP solar licensure, and Graduate Realtor Institute
                designation, Dr. Okoye blends strategic vision with operational
                precision. His career is distinguished by national awards,
                community recognition, and a consistent record of scaling teams,
                optimizing ROI, and driving sustainable growth.
              </p>

              <p className="mt-5 text-white/70 leading-relaxed">
                He is also a real estate talk show host and civic leader,
                committed to economic empowerment, ethical leadership, and
                building platforms that create lasting impact.
              </p>
            </div>

            {/* UPDATED: Affiliated Organizations */}
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="uppercase tracking-[0.34em] text-white/55 text-[11px]">
                    Affiliated Organizations
                  </p>
                  <h3 className="mt-5 font-serif text-2xl md:text-3xl leading-[1.1]">
                    Institutional and enterprise platforms
                  </h3>
                </div>

                <div className="hidden md:block text-[11px] uppercase tracking-[0.30em] text-white/40">
                  Verified affiliations
                </div>
              </div>

              <div className="mt-6 h-px w-16 bg-[#C9A24D]/80" />

              {/* Grid (kept premium, just made it handle 9 items cleanly) */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {orgs.map((o) => (
                  <div
                    key={o.name}
                    className="group rounded-2xl border border-white/10 bg-black/20 p-5 hover:border-[#C9A24D]/25 transition"
                    title={o.name}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative h-11 w-28 shrink-0">
                        <Image
                          src={o.src}
                          alt={o.name}
                          fill
                          className="object-contain opacity-90 group-hover:opacity-100 transition"
                          sizes="112px"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-[0.30em] text-white/40">
                          Affiliation
                        </div>
                        <div className="mt-1 text-sm md:text-[15px] leading-snug text-white/80">
                          {o.name}
                        </div>
                        <div className="mt-3 h-px w-12 bg-[#C9A24D]/70" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <p className="mt-6 text-white/55 text-sm leading-relaxed">
                Certain organizations may operate through separate public brands
                and subsidiaries. This page reflects the primary entities tied
                to Dr. Okoye’s leadership and service record.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/awards"
                className="inline-flex items-center gap-3 rounded-full border border-[#C9A24D]/55 px-8 py-4
                           text-[11px] uppercase tracking-[0.30em] text-[#C9A24D]
                           hover:border-[#C9A24D]/85 hover:bg-[#C9A24D]/10 transition"
              >
                View Awards <span className="opacity-80">↗</span>
              </a>

              <a
                href="/publications"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4
                           text-[11px] uppercase tracking-[0.30em] text-white/80
                           hover:border-[#C9A24D]/35 hover:bg-white/[0.03] transition"
              >
                View Publications <span className="opacity-80">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}