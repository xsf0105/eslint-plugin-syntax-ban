'use strict';

let path = require('path');

let config = {
    entry: path.resolve('example', './example.js'),
    devtool: 'source-map',
    output: {
        path: path.resolve('example', './'),
        filename: 'example.min.js',
    },
    resolve: {
        modules: [
            path.join('./src'),
            'node_modules',
        ],
        extensions: ['.js', '.xtpl', '.less'],
    },
    module: {
        rules: [
            {
                test: /\.xtpl$/,
                loader: '@fe-tool/xtpl-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            browsers: ['android >= 4.0', 'ios_saf >= 7.0'],
                            remove: false,
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            browsers: ['android >= 4.0', 'ios_saf >= 7.0'],
                            remove: false,
                        },
                    },
                    'less-loader?sourceMap',
                ],
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ],
            },
        ],
    },
    plugins: [],
};

module.exports = config;
