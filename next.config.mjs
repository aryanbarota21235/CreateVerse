/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
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
        destination: "https://www.createverse.in/clients",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "https://www.createverse.in/clients",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "https://www.createverse.in/clients",
        permanent: true,
      },
      {
        source: "/case-study",
        destination: "https://www.createverse.in/clients",
        permanent: true,
      },
      {
        source: "/academy",
        destination: "https://www.createverse.in/learn-digital-marketing",
        permanent: true,
      },
      {
        source: "/courses",
        destination: "https://www.createverse.in/learn-digital-marketing",
        permanent: true,
      },
      {
        source: "/course",
        destination: "https://www.createverse.in/learn-digital-marketing",
        permanent: true,
      },
      {
        source: "/training",
        destination: "https://www.createverse.in/learn-digital-marketing",
        permanent: true,
      },
      {
        source: "/digital-marketing-course",
        destination: "https://www.createverse.in/learn-digital-marketing",
        permanent: true,
      },
      {
        source: "/digital-marketing-institute",
        destination: "https://www.createverse.in/learn-digital-marketing",
        permanent: true,
      },
      {
        source: "/aditya-surjewala",
        destination: "https://www.createverse.in/clients/aditya-surjewala",
        permanent: true,
      },
      {
        source: "/randeep-singh-surjewala",
        destination: "https://www.createverse.in/clients/randeep-singh-surjewala",
        permanent: true,
      },
      {
        source: "/kewal-singh-dhillon",
        destination: "https://www.createverse.in/clients/kewal-singh-dhillon",
        permanent: true,
      },
      {
        source: "/gurkirat-singh-kotli",
        destination: "https://www.createverse.in/clients/gurkirat-singh-kotli",
        permanent: true,
      },
      {
        source: "/shamsher-singh-gogi",
        destination: "https://www.createverse.in/clients/shamsher-singh-gogi",
        permanent: true,
      },
      {
        source: "/pritpal-singh-pannu",
        destination: "https://www.createverse.in/clients/pritpal-singh-pannu",
        permanent: true,
      },
      {
        source: "/bhupinder-lather",
        destination: "https://www.createverse.in/clients/bhupinder-lather",
        permanent: true,
      },
      {
        source: "/rajiv-mamuram-gonder",
        destination: "https://www.createverse.in/clients/rajiv-mamuram-gonder",
        permanent: true,
      },
      {
        source: "/rajiv-mamuram-gondar",
        destination: "https://www.createverse.in/clients/rajiv-mamuram-gonder",
        permanent: true,
      },
      {
        source: "/umesh-sharma",
        destination: "https://www.createverse.in/clients/umesh-sharma",
        permanent: true,
      },
      {
        source: "/subhash-sudha",
        destination: "https://www.createverse.in/clients/subhash-sudha",
        permanent: true,
      },
      // Regional Hub & City Keyword Redirects (Direct to Canonical https://www.createverse.in/locations/[city])
      {
        source: "/haryana",
        destination: "https://www.createverse.in/locations",
        permanent: true,
      },
      {
        source: "/karnal",
        destination: "https://www.createverse.in/locations/karnal",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-karnal",
        destination: "https://www.createverse.in/locations/karnal",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-karnal",
        destination: "https://www.createverse.in/locations/karnal",
        permanent: true,
      },
      {
        source: "/panipat",
        destination: "https://www.createverse.in/locations/panipat",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-panipat",
        destination: "https://www.createverse.in/locations/panipat",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-panipat",
        destination: "https://www.createverse.in/locations/panipat",
        permanent: true,
      },
      {
        source: "/kurukshetra",
        destination: "https://www.createverse.in/locations/kurukshetra",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-kurukshetra",
        destination: "https://www.createverse.in/locations/kurukshetra",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-kurukshetra",
        destination: "https://www.createverse.in/locations/kurukshetra",
        permanent: true,
      },
      {
        source: "/kaithal",
        destination: "https://www.createverse.in/locations/kaithal",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-kaithal",
        destination: "https://www.createverse.in/locations/kaithal",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-kaithal",
        destination: "https://www.createverse.in/locations/kaithal",
        permanent: true,
      },
      {
        source: "/jind",
        destination: "https://www.createverse.in/locations/jind",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-jind",
        destination: "https://www.createverse.in/locations/jind",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-jind",
        destination: "https://www.createverse.in/locations/jind",
        permanent: true,
      },
      {
        source: "/yamunanagar",
        destination: "https://www.createverse.in/locations/yamunanagar",
        permanent: true,
      },
      {
        source: "/jagadhri",
        destination: "https://www.createverse.in/locations/yamunanagar",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-yamunanagar",
        destination: "https://www.createverse.in/locations/yamunanagar",
        permanent: true,
      },
      {
        source: "/best-digital-marketing-agency-yamunanagar",
        destination: "https://www.createverse.in/locations/yamunanagar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
