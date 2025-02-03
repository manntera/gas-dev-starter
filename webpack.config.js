const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const Es3ifyPlugin = require('es3ify-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

const env = dotenv.config().parsed;

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    context: __dirname,
    entry: {
        main: path.resolve(__dirname, 'src', 'index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.[tj]s$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new GasPlugin(), new Es3ifyPlugin(),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env),
        }),
    ]
};