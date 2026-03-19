/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '82bfzbmfzqycv70x.public.blob.vercel-storage.com',
                port: '',
            },
        ],
    }
};
module.exports = nextConfig;
