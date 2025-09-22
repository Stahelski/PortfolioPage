/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/TickTackToe",
        destination: "/TicTacToe",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
