const publications = [
  {
    title: "Amb. Dr. Billy Okoye and the Rise of Diaspora Leadership",
    href: "https://authorityngr.com/2025/10/29/amb-dr-billy-okoye-and-the-rise-of-diaspora-leadership/",
    source: "Authority NG",
  },
  {
    title: "Dr. Billy Okoye’s Appointment Symbolizes a New Era of Diaspora Empowerment",
    href: "https://peoplesdailyng.com/dr-billy-okoyes-appointment-symbolizes-a-new-era-of-diaspora-empowerment/",
    source: "Peoples Daily NG",
  },
] as const;

export default function PublicationsPage() {
  return (
    <main className="text-white">
      <section className="px-6 md:px-14 lg:px-20 pt-24 md:pt-32 pb-24">
        <p className="uppercase tracking-[0.34em] text-white/55 text-[11px]">
          Publications
        </p>

        <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
          Editorial Record
        </h1>

        <div className="mt-6 h-px w-16 bg-[#C9A24D]/80" />

        <p className="mt-6 text-white/70 max-w-2xl text-lg leading-relaxed">
          Selected features and articles.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm
                         hover:border-[#C9A24D]/35 hover:bg-white/[0.03] transition"
            >
              <div className="text-[11px] uppercase tracking-[0.34em] text-white/55">
                {p.source}
              </div>
              <h2 className="mt-5 font-serif text-2xl leading-snug">
                {p.title}
              </h2>
              <div className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.34em] text-[#C9A24D]">
                Read Article <span className="opacity-80">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}