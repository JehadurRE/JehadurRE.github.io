/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/jehadurre.me',
    trailingSlash: true,  // Ensures generated paths are compatible with static hosting
    env: {
        NEXT_PUBLIC_BASE_PATH: '/jehadurre.me',  // This makes it accessible in components
    },
};

export default nextConfig;
