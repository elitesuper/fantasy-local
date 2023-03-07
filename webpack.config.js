const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const fs = require('fs');

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        main: "./src/index.tsx",
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        proxy: {
            '/common-api': {
                target: 'https://stagingapifanchallenge.6lgx.com/',
                secure: false,
                changeOrigin: true,
            },
            '/cricket-api': {
                target: 'https://stagingapifanchallenge.6lgx.com/apicricket.fanchallengeapp.com',
                secure: false,
                changeOrigin: true,
            }
        },

    },
    mode: isDevelopment ? 'development' : 'production',
    output: {
        filename: isDevelopment ? '[name].js' : '[name].[hash].js',
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: [65]
                            },
                            optipng: {
                                enabled: !isDevelopment
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            webp: {
                                quality: [75]
                            },
                            bypassOnDebug: true,
                            disable: true
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: !isDevelopment}
                    }
                ]
            },
            {
                test: /\.(ts|js)x?$/i,
                exclude: [/node_modules/, /\.(spec|test).(ts|js)x?$/i],
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                    compact: true,
                }
            },
            {
                test: /\.module\.s(a|c)ss$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin?.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", "css", ".scss", ".png", ".jpg", ".svg"],
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        }),
        new StyleLintPlugin({
            files: ['**/*.{css,scss,sass}'],
        }),
        new ESLintPlugin(),
        new Dotenv({
            path: isDevelopment ? './.env.development' : './.env'
        })
    ].filter(Boolean),
};
