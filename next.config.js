const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/mypage',
        destination: '/mypage/profile',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
