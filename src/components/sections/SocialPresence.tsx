const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@Sold100TV" },
  { label: "Facebook", href: "https://www.facebook.com/RealtorBillyOkoye" },
  { label: "Instagram", href: "https://www.instagram.com/realtorbillyokoye/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/obilly/" },
] as const;

function Icon({ name }: { name: (typeof socials)[number]["label"] }) {
  const cls = "h-5 w-5";
  switch (name) {
    case "YouTube":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.6A3 3 0 0 0 2.4 7.2 31.5 31.5 0 0 0 2 12s.1 3.2.4 4.8a3 3 0 0 0 2.1 2.1c1.8.6 7.5.6 7.5.6s5.7 0 7.5-.6a3 3 0 0 0 2.1-2.1c.3-1.6.4-4.8.4-4.8s-.1-3.2-.4-4.8ZM10 15V9l6 3-6 3Z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.5V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.3v3H10v8h3.5Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4Zm-4.5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM17.9 6.8a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.5 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4.7 21.5h3.6V9H4.7v12.5ZM9.8 9h3.4v1.7h.1c.5-1 1.8-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8v7h-3.6v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.3H9.8V9Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SocialPresence() {
  return (
    <section className="px-6 md:px-14 lg:px-20 pb-28 md:pb-36">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.34em] text-white/55 text-[11px]">
              Social Presence
            </p>
            <h3 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.05]">
              Public visibility. Private standards.
            </h3>
            <p className="mt-5 text-white/65 text-base md:text-lg">
              Updates, interviews, and work in motion across platforms.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="h-12 w-12 rounded-full border border-white/10 bg-black/20 flex items-center justify-center
                           text-white/70 hover:text-white hover:border-[#C9A24D]/40 hover:bg-[#C9A24D]/5 transition"
              >
                <Icon name={s.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}