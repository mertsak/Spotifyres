/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "i.scdn.co",
      "freesound.org",
      "dailymix-images.scdn.co",
      "seed-mix-image.spotifycdn.com",
      "newjams-images.scdn.co",
      "daily-mix.scdn.co",
      "mosaic.scdn.",
      "concerts.spotifycdn.com",
      "t.scdn.co",
      "i.scdn.co",
      "charts-images.scdn.co",
    ],
  },
};

// next.config.js
module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
