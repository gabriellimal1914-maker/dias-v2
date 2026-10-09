/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === '1';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  ...(isStaticExport ? { output: 'export' } : {}),

  images: {
    formats: ['image/avif', 'image/webp'],
    ...(isStaticExport ? { unoptimized: true } : {}),
    // Todas as imagens sao arquivos locais em /public/images — nenhum host externo.
  },

  // headers() nao se aplica a build estatica (`npm run export`)
  ...(isStaticExport
    ? {}
    : {
        async headers() {
          return [{ source: '/:path*', headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
