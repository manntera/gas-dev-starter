const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Load .env (optional). Ensure an empty object when not present
const env = dotenv.config().parsed ?? {};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'inline-source-map',
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
        new GasPlugin({
            // export された関数を自動的に GAS のグローバルへ割り当て
            autoGlobalExportsFiles: [path.resolve(__dirname, 'src', 'index.ts')],
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env),
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src', 'appsscript.json'), to: '.' },
            ],
        }),
    ]
};
