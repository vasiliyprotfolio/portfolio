/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {protocol: 'https', hostname: 'placehold.co'},
            {protocol: 'https', hostname: 'images.unsplash.com'},
            {protocol: 'https', hostname: 'i.imgur.com'}
        ]
    }
};
module.exports = nextConfig;
