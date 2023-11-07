/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
          beforeFiles: [
            {
              source: "/api/:path*",
              destination: `${process.env.DOMAIN_SERVER_API}/api/v1/:path*`,
            },
          ],
        };
      },
}

module.exports = nextConfig
