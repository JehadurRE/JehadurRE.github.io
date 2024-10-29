/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/jehadurre.me',
    trailingSlash: true,  // Ensures generated paths are compatible with static hosting
    publicRuntimeConfig: {
        basePath: '/jehadurre.me',
    },
};

export default nextConfig;
