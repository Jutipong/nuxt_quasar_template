// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vue-macros/nuxt", "nuxt-quasar-ui", "@nuxtjs/google-fonts"],
  //   experimental: {
  //     reactivityTransform: true,
  //   },
  macros: {},
  googleFonts: {
    download: true,
    base64: true,
    families: {
      Roboto: true,
      Poppins: true,
    },
  },
  quasar: {
    plugins: [
      "AppFullscreen",
      "BottomSheet",
      "Dialog",
      "Loading",
      "LoadingBar",
      "Notify",
      "Dark",
    ],
    extras: {
      //   font: "roboto-font",
      fontIcons: ["material-icons"],
    },
  },
});
