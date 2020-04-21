const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const PostcssImport = require("postcss-import");
const Autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = require('./config');
const tsConfig = require.resolve('../tsconfig.json');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: './src/main.tsx'
    },
    output: {
        path: path.resolve(process.cwd(), './dist'),
        publicPath: '/',
        filename: path.posix.join('js', '[name].[hash:7].js'),
        chunkFilename: path.posix.join('js', '[name].[chunkhash:7].js')
    },
    resolve: {
        extensions: ['.json', '.js', '.ts', '.tsx'],
        alias: config.alias,
    },
    devServer: {
        publicPath: '/',
        host: '127.0.0.1',
        port: 8085,
        hot: true,
        clientLogLevel: 'warning',
        compress: true,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {}
    },
    optimization: {
        minimize: true,
        minimizer: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash].css',
            }),
        ],
        runtimeChunk: true,
    },
    performance: {
        hints: false
    },
    stats: {
        children: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // {
            //     test: /\.tsx?$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: 'tslint-loader',
            //             options: {
            //                 // tslint错误默认显示为警告
            //                 emitErrors: false,
            //                 // 默认情况下，tslint不会中断编译
            //                 failOnHint: false,
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                PostcssImport({root: loader.resourcePath}),
                                Autoprefixer(),
                            ]
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('images', '[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    },
                    {
                        loader: path.resolve(__dirname, './md-loader/index.js')
                    }
                ]
            },
        ]
    },
    plugins: [
        /**** 使用HappyPack实例化 *****/
        // new HappyPack({
        //     id: 'ts-lint-pack',
        //     threads: 2,
        //     use: [
        //         {
        //             loader: 'vue-tslint-loader',
        //             options: {
        //                 // tslint错误默认显示为警告
        //                 emitErrors: false,
        //                 // 默认情况下，tslint不会中断编译
        //                 failOnHint: false,
        //             }
        //         }
        //     ]
        // }),
        // new HappyPack({
        //     id: 'ts-pack',
        //     threads: 2,
        //     use: [
        //         'babel-loader',
        //         {
        //             loader: 'ts-loader',
        //             options: {
        //                 happyPackMode: true,
        //                 transpileOnly: true,
        //                 appendTsSuffixTo: [/\.vue$/],
        //                 appendTsxSuffixTo: [/\.vue$/],
        //                 configFile: tsConfig,
        //             }
        //         }
        //     ]
        // }),
        /**** end *****/
        new ForkTsCheckerWebpackPlugin({
            vue: true,
            tslint: true,
            checkSyntacticErrors: true,
            tsconfig: tsConfig,
        }),
        new webpack.DefinePlugin({
            'process.env.FAAS_ENV': JSON.stringify(process.env.FAAS_ENV)
        }),
        new webpack.HotModuleReplacementPlugin(),
        // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
        new webpack.NamedModulesPlugin(),
        // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            favicon: './src/favicon.ico',
            // 压缩HTML代码的配置
            minify: {
                minifyCSS: true,
                minifyJS: true,
                collapseWhitespace: true
            }
        }),
        new ProgressBarPlugin()
    ],
    devtool: 'cheap-module-inline-source-map'
};
