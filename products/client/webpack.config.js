const HtmlWebpackplugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },

    plugins: [
        //newly added
        new ModuleFederationPlugin({
            name: 'client',
            filename: 'remoteEntry.js',
            exposes: {
                './addClient': './src/index'
            },
        }),
        new HtmlWebpackplugin({
            template: './public/index.html'
        })
    ]
};