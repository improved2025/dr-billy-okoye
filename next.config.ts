import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Short links for print, QR codes, and social bios.
  async redirects() {
    return [
      { source: "/book", destination: "/consultation", permanent: false },
      { source: "/1on1", destination: "/consultation", permanent: false },
    ];
  },
};

export default nextConfig;
