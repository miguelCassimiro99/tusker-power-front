/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // Rota para arquivos estáticos
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache duradouro
          },
        ],
      },
    ];
  }
};

export default nextConfig;
