/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'openweathermap.org',
                pathname: '/img/wn/**'
            }
        ]
    }
}

module.exports = nextConfig


// https://openweathermap.org/img/wn/10d@2x.png
