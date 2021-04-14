const config = (nextConfig = {}) =>
  ({
    ...nextConfig,
    webpack(config, options) {
      config.module.rules.push({
        type: "javascript/auto",
        test: /\.mjs$/,
        use: [],
      })

      return config
    },
    async redirects() {
      return [{
        source: "/careers",
        destination: "/",
        permanent: true,
      }]
    },
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/coinmetro_performance_test/canvas' : ""
  })

module.exports = config
