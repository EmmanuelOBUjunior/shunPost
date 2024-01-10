/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['uploadthing.com', 'lh3.googleusercontent.com']
        remotePatterns:[{
            protocol: 'https',
            hostname: '*.googleusercontent.com',
            port: '',
            pathname:'**'
        }]
    },
}

module.exports = nextConfig
