/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Simple allowlist:
    domains: ["images.unsplash.com"],

    // Or use remotePatterns (more control):
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "images.unsplash.com",
    //   },
    // ],
  },
};

export default nextConfig;
