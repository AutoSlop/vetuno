import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/funcionalidades",
        destination: "/modulos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
