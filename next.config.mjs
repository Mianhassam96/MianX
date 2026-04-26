/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: "/MianX",
  assetPrefix: "/MianX/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
