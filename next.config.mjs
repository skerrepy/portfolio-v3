/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com',      "api.microlink.io"
    ]
    },
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
