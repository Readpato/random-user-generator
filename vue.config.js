module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/random-user-generator/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
};
