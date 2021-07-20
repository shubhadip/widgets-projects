const { StatsWriterPlugin } = require("webpack-stats-plugin")

module.exports = {
  chainWebpack: (config) => {
    if(process.env.VUE_APP_WIDGET_BUILD){
      config.entryPoints.delete('app')
      config
        .entry('common')
        .add('./src/widget.js')
        .end()
    }
  },
  configureWebpack: {
    plugins: [
      new StatsWriterPlugin({
        filename: "stats.json"
      })
    ]
  }
}