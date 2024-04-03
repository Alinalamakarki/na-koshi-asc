
/** @type {import('next').NextConfig} */
const nextConfig = {
    // image url
    images: {
        remotePatterns: [
          {
            // https://i0.wp.com/nacentralohio.org/wp-content/uploads/2018/05/cropped-cropped-default_nalogo-1.jpg?fit=150%2C150&ssl=1
            protocol: 'https',
            hostname: '**.wp.com',
            port: '',
            pathname: '/nacentralohio.org/wp-content/uploads/2018/05/**',
          },
        ],
      },
};

export default nextConfig;
