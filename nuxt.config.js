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
    script: [
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBQNZLwWEaWmxJXENTyqVQn0Zc4toUAX00"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "favicon.ico"
      }
    ]
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
