const HtmlWebpackplugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        //newly addeded
        new ModuleFederationPlugin({
            name: 'platform',
            remotes: {
                client: 'client@http://localhost:8081/remoteEntry.js',
                serviceRequest:'serviceRequest@http://localhost:8082/remoteEntry.js',
            }
        }),
        new HtmlWebpackplugin({
            template: './public/index.html'
        })
    ]
};