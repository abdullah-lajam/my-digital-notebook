// next.config.mjs

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/my-digital-notebook',
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
