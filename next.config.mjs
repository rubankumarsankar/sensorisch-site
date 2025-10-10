/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
    unoptimized: true, // <-- disable the Image Optimization API
  },
};

export default nextConfig;
