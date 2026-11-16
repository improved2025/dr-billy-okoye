import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Executive One-on-One | Dr. Billy Okoye",
  description:
    "A private 45 minute Zoom session with Dr. Billy Okoye on real estate, business growth, governance, and solar energy. Leave with a clear plan of action.",
};

const BOOKING_URL =
  "https://stan.store/DrBillyOkoye/p/executive-oneonone-with-dr-billy-okoye";

const GOLD = "#C9A24D";

const focusAreas = [
  {
    title: "Real Estate",
    body: "Acquisitions, redevelopment, and portfolio decisions, from someone with over $250M in transactions.",
  },
  {
    title: "Business Growth",
    body: "Where to focus next, what to stop doing, and how to structure the move in front of you.",
  },
  {
    title: "Governance & Public Process",
    body: "Planning, approvals, boards, and working with public bodies, from a sitting Planning Board Vice Chair.",
  },
  {
    title: "Solar & Renewable Energy",
    body: "Residential and commercial solar, informed by more than 4.2MW of clean energy delivered.",
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Reserve your time",
    body: "Secure checkout and scheduling in one step.",
  },
  {
    n: "02",
    title: "Meet on Zoom",
    body: "Forty five private minutes. Bring your questions and your numbers.",
  },
  {
    n: "03",
    title: "Leave with a plan",
    body: "You build a clear to do list together, specific to your situation.",
  },
] as const;

const details = [
  { label: "Length", value: "45 minutes" },
  { label: "Format", value: "Private Zoom" },
  { label: "Investment", value: "$495" },
] as const;

function BookButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={BOOKING_URL}
      className={[
        "inline-flex items-center justify-center rounded-full px-10 sm:px-12 py-5",
        "whitespace-nowrap uppercase tracking-[0.22em] sm:tracking-[0.30em] text-[11px] font-medium text-black",
        "bg-[#C9A24D] hover:bg-[#d6b260] transition",
        "shadow-[0_20px_60px_rgba(201,162,77,0.25)]",
        className,
      ].join(" ")}
    >
      Book Your Session · $495
    </a>
  );
}

export default function ConsultationPage() {
  return (
    <main className="text-white">
      {/* HERO */}
      <section className="px-6 md:px-14 lg:px-20 pt-24 md:pt-32 pb-16 md:pb-20">
        <Reveal>
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.34em] text-white/55 text-[11px]">
              Executive One-on-One
            </p>

            <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.02]">
              Forty five minutes.
              <br />
              <span style={{ color: GOLD }}>One clear plan.</span>
            </h1>

            <p className="mt-8 text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
              A private session with Dr. Billy Okoye. Bring the decision you are
              facing. Get direct answers, and leave with a practical to do list
              you build together, made for your situation.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BookButton />
              <Link
                href="/about"
                className="rounded-full border border-white/15 px-10 py-5 uppercase tracking-[0.30em] text-[11px] text-white/80
                           hover:border-[#C9A24D]/35 hover:bg-white/[0.03] transition"
              >
                About Dr. Okoye
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* DETAILS STRIP */}
      <section className="px-6 md:px-14 lg:px-20 pb-20 md:pb-28">
        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-3 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
            {details.map((d, i) => (
              <div
                key={d.label}
                className={[
                  "px-8 py-8 md:py-10 text-center",
                  i > 0 ? "border-t sm:border-t-0 sm:border-l border-white/10" : "",
                ].join(" ")}
              >
                <p className="uppercase tracking-[0.34em] text-white/45 text-[10px]">
                  {d.label}
                </p>
                <p className="mt-3 font-serif text-3xl md:text-4xl" style={{ color: i === 2 ? GOLD : undefined }}>
                  {d.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FOCUS AREAS */}
      <section className="px-6 md:px-14 lg:px-20 pb-20 md:pb-28">
        <Reveal>
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.34em] text-white/55 text-[11px]">
              What We Can Cover
            </p>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.05]">
              Bring the question that is holding you back.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((f, i) => (
            <Reveal key={f.title} delay={0.05 * i}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm">
                <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
                <h3 className="mt-6 font-serif text-2xl md:text-3xl">{f.title}</h3>
                <p className="mt-4 text-white/65 leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-14 lg:px-20 pb-20 md:pb-28">
        <Reveal>
          <p className="uppercase tracking-[0.34em] text-white/55 text-[11px]">
            How It Works
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.06 * i}>
              <div className="h-full border-t border-white/10 pt-8">
                <p className="font-serif text-4xl" style={{ color: GOLD }}>
                  {s.n}
                </p>
                <h3 className="mt-4 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-white/65 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 md:px-14 lg:px-20 pb-32">
        <Reveal>
          <div className="text-center rounded-3xl border border-[#C9A24D]/25 bg-white/[0.02] py-16 sm:py-20 px-6 sm:px-8 backdrop-blur-sm">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              Your next move, made clear.
            </h2>
            <p className="mt-6 text-white/65 max-w-xl mx-auto text-lg">
              Sessions are private. Reserve yours and choose a time
              that works for you.
            </p>
            <div className="mt-10">
              <BookButton />
            </div>
            <p className="mt-6 text-white/40 text-xs tracking-wide">
              Secure checkout and scheduling through Stan.
            </p>

            <div className="mt-12 mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <p className="mt-8 text-white/50 text-sm">
              General inquiries:{" "}
              <a
                href="mailto:Billy@Sold100.com"
                className="text-[#C9A24D] hover:text-[#C9A24D]/80 transition"
              >
                Billy@Sold100.com
              </a>{" "}
              or WhatsApp{" "}
              <a
                href="https://wa.me/12404625679"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A24D] hover:text-[#C9A24D]/80 transition"
              >
                +1 (240) 462-5679
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
