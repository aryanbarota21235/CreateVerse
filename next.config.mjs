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
        source: "/aditya-surjewala",
        destination: "/clients/aditya-surjewala",
        permanent: true,
      },
      {
        source: "/randeep-singh-surjewala",
        destination: "/clients/randeep-singh-surjewala",
        permanent: true,
      },
      {
        source: "/kewal-singh-dhillon",
        destination: "/clients/kewal-singh-dhillon",
        permanent: true,
      },
      {
        source: "/gurkirat-singh-kotli",
        destination: "/clients/gurkirat-singh-kotli",
        permanent: true,
      },
      {
        source: "/shamsher-singh-gogi",
        destination: "/clients/shamsher-singh-gogi",
        permanent: true,
      },
      {
        source: "/bhupinder-lather",
        destination: "/clients/bhupinder-lather",
        permanent: true,
      },
      {
        source: "/rajiv-mamuram-gonder",
        destination: "/clients/rajiv-mamuram-gonder",
        permanent: true,
      },
      {
        source: "/rajiv-mamuram-gondar",
        destination: "/clients/rajiv-mamuram-gonder",
        permanent: true,
      },
      {
        source: "/umesh-sharma",
        destination: "/clients/umesh-sharma",
        permanent: true,
      },
      {
        source: "/clients/subhash-sudha",
        destination: "/subhash-sudha",
        permanent: true,
      },
      // Regional Hub & City Keyword Redirects (Direct to Canonical /locations/[city])
      {
        source: "/haryana",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/karnal",
        destination: "/locations/karnal",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-karnal",
        destination: "/locations/karnal",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-karnal",
        destination: "/locations/karnal",
        permanent: true,
      },
      {
        source: "/panipat",
        destination: "/locations/panipat",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-panipat",
        destination: "/locations/panipat",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-panipat",
        destination: "/locations/panipat",
        permanent: true,
      },
      {
        source: "/kurukshetra",
        destination: "/locations/kurukshetra",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-kurukshetra",
        destination: "/locations/kurukshetra",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-kurukshetra",
        destination: "/locations/kurukshetra",
        permanent: true,
      },
      {
        source: "/kaithal",
        destination: "/locations/kaithal",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-kaithal",
        destination: "/locations/kaithal",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-kaithal",
        destination: "/locations/kaithal",
        permanent: true,
      },
      {
        source: "/jind",
        destination: "/locations/jind",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-jind",
        destination: "/locations/jind",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-jind",
        destination: "/locations/jind",
        permanent: true,
      },
      {
        source: "/yamunanagar",
        destination: "/locations/yamunanagar",
        permanent: true,
      },
      {
        source: "/jagadhri",
        destination: "/locations/yamunanagar",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-yamunanagar",
        destination: "/locations/yamunanagar",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-yamunanagar",
        destination: "/locations/yamunanagar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
