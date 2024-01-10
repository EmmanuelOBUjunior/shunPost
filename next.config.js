/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['uploadthing.com', 'lh3.googleusercontent.com']
        remotePatterns:[{
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname:''
        }]
    },
}

module.exports = nextConfig
