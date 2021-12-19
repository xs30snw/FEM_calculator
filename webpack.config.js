const path = require('path');
const SRC = path.resolve(__dirname, 'src');
const PUBLIC = path.resolve(__dirname, 'public');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
    entry: {
        index: [
            './src/App.tsx',
            './src/styles/style.css'
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: SRC,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.tsx$/i,                
                include: SRC,
                use: {
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'tsx',
                        target: 'es2015'
                    }
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: false,
            minify: false
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ],    
    resolve: {
        extensions: ['.js', '.tsx'],
    },    
    optimization: {
        minimize: false,
        minimizer: [
            new ESBuildMinifyPlugin({
                target: 'es2015',
                css: false
            })
        ]
    },
    output: {
        filename: 'main.js',
        path: PUBLIC,
        clean: true,
    },  
    devtool: "source-map",
};