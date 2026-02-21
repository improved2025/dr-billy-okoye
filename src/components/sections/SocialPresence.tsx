export default function SocialPresence() {
  const links = [
    { label: "Broadcast", href: "https://www.youtube.com/@Sold100TV" },
    { label: "Professional Network", href: "https://www.linkedin.com/in/obilly/" },
    { label: "Visual Journal", href: "https://www.instagram.com/realtorbillyokoye/" },
    { label: "Public Archive", href: "https://www.facebook.com/RealtorBillyOkoye" },
  ];

  return (
    <section className="px-6 md:px-12 pb-28">
      <div className="rounded-2xl border border-white/10 bg-white/5 px-8 md:px-12 py-10">
        <p className="uppercase tracking-[0.28em] text-white/55 text-xs">
          Media & Presence
        </p>

        <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase tracking-[0.32em] text-xs text-white/75 hover:text-[#C9A24D] transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}