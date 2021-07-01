module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "et", "ru"],
  },
  react: {
    useSuspense: false,
    wait: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      type: "javascript/auto",
      test: /\.mjs$/,
      use: [],
    })
    return config
  },
}
