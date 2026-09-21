/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/clients",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/clients",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/clients",
        permanent: true,
      },
      {
        source: "/case-study",
        destination: "/clients",
        permanent: true,
      },
      {
        source: "/academy",
        destination: "/learn-digital-marketing",
        permanent: true,
      },
      {
        source: "/courses",
        destination: "/learn-digital-marketing",
        permanent: true,
      },
      {
        source: "/course",
        destination: "/learn-digital-marketing",
        permanent: true,
      },
      {
        source: "/training",
        destination: "/learn-digital-marketing",
        permanent: true,
      },
      {
        source: "/clients/subhash-sudha",
        destination: "/subhash-sudha",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
