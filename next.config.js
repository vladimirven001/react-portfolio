/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/demo",
        destination: "/",
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
