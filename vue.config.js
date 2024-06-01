module.exports = {
  transpileDependencies: [
    'vuetify',
    '@google/model-viewer'
  ],
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Bundan App",
    },
  },
  chainWebpack: (config) => {
    // Add a rule to include transpilation of @google/model-viewer
    config.module
      .rule('js')
      .include
      .add(/node_modules\/@google\/model-viewer/)
      .end()
      .use('babel-loader')
      .loader('babel-loader');
  }
}