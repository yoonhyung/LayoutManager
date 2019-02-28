const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const assetsDir = path.resolve(__dirname, '..', 'assets');
const distDir = path.resolve(__dirname, '..', 'dist');
const commonConfig = {
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
        filename: '[name].js',
        path: distDir
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(distDir, {
            allowExternal: true
        })
    ]
};

module.exports = (env, options) => {
    const isDevelopment = options.mode === 'development';

    if (isDevelopment) {
        commonConfig.devtool = 'source-map';
        commonConfig.devServer = {
            contentBase: distDir,
            compress: true,
            open: true,
            port: 8080
        };
        commonConfig.watch = true;
        commonConfig.plugins.push(new BundleAnalyzerPlugin());
        commonConfig.plugins.push(
            new HtmlWebpackPlugin({
                template: path.resolve(assetsDir, 'public', 'index.html'),
                title: 'WDP Layout',
                chunks: ['main']
            })
        );
        commonConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return commonConfig;
};
