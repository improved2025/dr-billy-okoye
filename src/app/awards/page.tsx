const awards = [
  "President's Gold Medal Community Service Award",
  "U.S. Certificate of Congressional Recognition",
  "Prince George's County African Cultural Award",
  "LoveWorld Partnership Award",
  "African Community Service Award (2021)",
  "PGCAR Platinum Sales Awards (2016 & 2018)",
  "RE/MAX President's Club & 100% Club",
  "Buffini & Company Certified",
  "Mentor Businessmen Fellowship Award of Stewardship",
] as const;

export default function AwardsPage() {
  return (
    <main className="text-white">
      <section className="px-6 md:px-14 lg:px-20 pt-24 md:pt-32 pb-24">
        <p className="uppercase tracking-[0.34em] text-white/55 text-[11px]">
          Honors & Awards
        </p>

        <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
          Recognition
        </h1>

        <div className="mt-6 h-px w-16 bg-[#C9A24D]/80" />

        <p className="mt-6 text-white/70 max-w-2xl text-lg leading-relaxed">
          Selected honors across community service, civic leadership, business excellence,
          and professional distinction.
        </p>

        {/* Elevated Award Stage */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10 backdrop-blur-sm shadow-[0_50px_140px_rgba(0,0,0,0.60)]">
          <ul className="space-y-4">
            {awards.map((a, i) => (
              <li
                key={a}
                className="group relative rounded-2xl border border-white/10 bg-black/25 px-6 py-5 
                           text-white/85 transition hover:border-[#C9A24D]/35"
              >
                <div className="flex items-start gap-4">
                  {/* Gold index marker */}
                  <div className="mt-1 text-[#C9A24D] text-sm font-semibold tracking-wide">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1 leading-relaxed">
                    {a}
                  </div>
                </div>

                {/* subtle gold accent on hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}