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

module.exports = nextConfig;
