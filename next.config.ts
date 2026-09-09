import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "145727087.fs1.hubspotusercontent-eu1.net",
        pathname: "/hub/**",
      },
    ],
  },
};

export default nextConfig;
