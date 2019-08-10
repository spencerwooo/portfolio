export default {
  mode: "universal",
  head: {
    title: "Jay Yan",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap"
      }
    ]
  },
  loading: { color: "#fff" },
  css: ["@/assets/base.css"],
  plugins: [],
  devModules: [],
  modules: [],
  build: {
    extend(config, ctx) {}
  }
};
