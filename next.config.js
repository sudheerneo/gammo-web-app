 
const withImages = require('next-images');
const webpack = require('webpack');

module.exports = withImages({
  webpack5: true,
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {

    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery'
      })
    );
    
    return config
  }
})


