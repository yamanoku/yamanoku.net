import vueI18n from "./vueI18n";

module.exports = {
  head: {
    title: "yamanoku.net",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Okuto Oyama Portfolio Site."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://yamanoku.net/ogp@2x.png"
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@yamanoku" },
      { name: "twitter:title", content: "yamanoku.net" },
      { name: "twitter:description", content: "Okuto Oyama Portfolio Site" },
      { name: "twitter:image", content: "https://yamanoku.net/ogp@2x.png" },
      { name: "twitter:image:alt", content: "yamanoku.net" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // { rel: "stylesheet", href: "https://scrapbox.io/api/code/yamanoku/vartical-rhythmCSS/base-line.css" },
    ],
    script: [
      {
        src: "https://minmoji.ucda.jp/sealjs/https%3A__yamanoku.net",
        charset: "UTF-8"
      }
    ]
  },
  css: ["modern-normalize"],
  build: {
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: [
    "@nuxtjs/pwa",
    [
      "nuxt-i18n",
      {
        seo: false,
        baseUrl: "https://yamanoku.net",
        locales: [
          {
            code: "ja",
            iso: "ja",
            name: "日本語ページ"
          },
          {
            code: "en",
            iso: "en-US",
            name: "English Page"
          },
          {
            code: "fr",
            iso: "fre",
            name: "Page française"
          }
        ],
        defaultLocale: "ja",
        vueI18n
      }
    ],
    [
      "@nuxtjs/google-gtag",
      {
        id: "UA-146072150-1",
        debug: true
      }
    ],
    "@nuxtjs/axios",
  ],
  plugins: [
    "~plugins/icons.js",
    "~plugins/vue-highlight.js",
    "~plugins/storeGithub.js",
    "~plugins/storeSlide.js",
    "~plugins/storeDay.js"
  ],
  workbox: {
    dev: true
  },
  manifest: {
    name: "yamanoku.net",
    short_name: "yamanoku",
    title: "yamanoku.net",
    "og:title": "yamanoku.net",
    description: "Okuto Oyama Portfolio Site.",
    "og:description": "Okuto Oyama Portfolio Site.",
    lang: "en",
    theme_color: "#36465d",
    background_color: "#36465d"
  }
};
