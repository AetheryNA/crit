module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      }
    ]
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { test: /\.(js|ts|jsx|tsx)x?$/ },
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
