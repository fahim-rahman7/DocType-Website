// /** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === "production";
// const basePath = isProd ? `/venus-nextjs` : "";

// const nextConfig = {
//   output: "export",
//   basePath,
//   assetPrefix: basePath,
//   images: {
//     unoptimized: true,
//   },
//   trailingSlash: true,
//   env: {
//     NEXT_PUBLIC_BASE_PATH: basePath,
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
