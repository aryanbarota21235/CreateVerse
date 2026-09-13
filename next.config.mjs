/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/clients",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
