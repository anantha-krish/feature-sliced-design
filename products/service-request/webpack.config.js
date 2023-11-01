const HtmlWebpackplugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
       port: 8082 
    },
    plugins: [
              //newly added
              new ModuleFederationPlugin({
                name: 'serviceRequest',
                filename: 'remoteEntry.js',
                exposes: {
                    './createSR': './src/index'
                },
            }),
        new HtmlWebpackplugin({
            template:'./public/index.html'
        })
    ]
};