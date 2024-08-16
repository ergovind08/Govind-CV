/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dxgsqxdi3/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dxngjqetz/**",
      },
      {
        hostname: "i.scdn.co",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "media.licdn.com", // Add this line
      },
      {
        hostname: "www.google.com",
      },
      {
        hostname: "i0.wp.com",
      },
    ],
  },
};

module.exports = nextConfig;
