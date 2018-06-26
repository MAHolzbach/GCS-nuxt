const config = require("./.contentful.json");

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Grounds Central Station",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    // link: [
    //    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // ]
    script: [{ src: "https://use.fontawesome.com/releases/v5.0.13/js/all.js" }]
  },
  env: {
    GCS_SPACE: config.GCS_SPACE,
    GCS_TOKEN: config.GCS_TOKEN
  },
  generate: {
    fallback: true
  },
  css: ["assets/variables.scss"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {}
};
