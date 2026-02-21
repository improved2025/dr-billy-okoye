import "./globals.css";

export const metadata = {
  title: "Dr. Billy Okoye",
  description: "Real Estate · Renewable Energy · Governance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={[
          "min-h-screen text-white antialiased",
          // premium base depth (safe, not fragile)
          "bg-[radial-gradient(1200px_700px_at_18%_12%,rgba(201,162,77,0.08),transparent_55%),radial-gradient(900px_600px_at_82%_18%,rgba(255,255,255,0.04),transparent_60%),linear-gradient(180deg,#07070A_0%,#0B0C10_60%,#07070A_100%)]",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}