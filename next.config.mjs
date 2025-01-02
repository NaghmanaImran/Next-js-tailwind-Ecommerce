/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['example.com'], // Replace 'example.com' with your image host domains
        unoptimized: true,       // Disable image optimization for static exports
      },
    output:"export",
};

export default nextConfig;
