/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "recoiljs.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.postgresql.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets-eu-01.kc-usercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
