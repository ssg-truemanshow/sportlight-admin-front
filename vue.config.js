const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        feather: 'feather-icons',
        d3: ['d3', 'default'],  // d3 import 방식 수정
        c3: 'c3',
        Chartist: 'chartist'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~assets': path.resolve(__dirname, 'src/assets')
      }
    }
    //여기 새로 추가했던 거
  }
})