import i18n from "./nuxt-i18n";

const baseName = process.env.BASE_NAME || "yamanoku.net";
const baseDesc = process.env.BASE_DISC || "Okuto Oyama Portfolio Site";
const baseUrl = process.env.BASE_URL || "https://yamanaoku.net";
const baseOgp = process.env.BASE_OGP || "https://yamanoku.net/ogp/ogp@2x.png";
const baseOgpAlt = baseName;

module.exports = {
  target: "static",
  telemetry: false,
  env: {
    baseName,
    baseDesc,
    baseUrl,
    baseOgp,
    baseOgpAlt
  },
  head: {
    htmlAttrs: {
      prefix: "og: http://ogp.me/ns#"
    },
    title: baseName,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: baseDesc
      },
      {
        hid: "og:image",
        name: "og:image",
        content: baseOgp
      },
      { name: "og:title", content: baseName },
      { name: "og:description", content: baseDesc },
      { name: "og:image", content: baseOgp },
      { name: "og:image:alt", content: baseOgpAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@yamanoku" },
      { name: "twitter:image:alt", content: baseOgpAlt }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://cdn.skypack.dev/@yamanoku/switch-components",
        type: "module"
      }
    ]
  },
  css: ["modern-normalize", "~/packages/yama-normalize"],
  buildModules: ["@nuxt/components"],
  components: [
    "~/components/",
    {
      path: "~/components/about-sections/",
      prefix: "about-sections"
    },
    {
      path: "~/components/buttons/",
      prefix: "buttons"
    },
    {
      path: "~/components/global/",
      prefix: "global"
    },
    {
      path: "~/components/products/",
      prefix: "products"
    },
    {
      path: "~/components/sections/",
      prefix: "sections"
    },
    {
      path: "~/components/vuejs-accessibility-sections/",
      prefix: "vuejs-accessibility-sections"
    }
  ],
  build: {
    extend(config, { isDev }) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: "json",
        use: "yaml-loader"
      });
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
  modules: ["@nuxtjs/pwa", ["nuxt-i18n", i18n], "@nuxtjs/axios"],
  generate: {
    cache: {
      ignore: [".nuxt", "node_modules"]
    },
    fetch({ redirect }) {
      return redirect("404.html");
    }
  },
  plugins: ["~plugins/icons.js", "~plugins/vue-highlight.js"],
  workbox: {
    dev: true
  },
  manifest: {
    name: baseName,
    short_name: "yamanoku",
    title: baseName,
    "og:title": baseName,
    description: baseDesc,
    "og:description": baseDesc,
    lang: "en",
    theme_color: "#36465d",
    background_color: "#36465d"
  }
};
