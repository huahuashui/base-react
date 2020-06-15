const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');
const PostcssImport = require("postcss-import");
const Autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// 文件打包公共配置项
const config = require('./config');
const tsConfig = require.resolve('../tsconfig.json');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/main.tsx',
    },
    output: {
        path: path.resolve(process.cwd(), './dist'),
        publicPath: '/',
        filename: path.posix.join('js', '[name].[hash:7].js'),
        chunkFilename: path.posix.join('js', '[name].[chunkhash:7].js'),
    },
    resolve: {
        extensions: ['.json', '.js', '.ts', '.tsx'],
        alias: config.alias

    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ],
        splitChunks: {
            chunks: "all", // 在做代码分割时，只对异步代码生效，写成all的话，同步异步代码都会分割
            minSize: 80000, // 引入的包大于80KB才做代码分割
            maxSize: 300000, // 限制包的大小
            minChunks: 1, // 当一个包至少被用了多少次的时候才进行代码分割
            maxAsyncRequests: 5, // 同时加载的模块数最多是5个
            maxInitialRequests: 3, // 入口文件做代码分割最多能分成3个js文件
            automaticNameDelimiter: '~', // 文件生成时的连接符
            name: true, // 让cacheGroups里设置的名字有效
            cacheGroups: { // 当打包同步代码时,上面的参数生效
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // 检测引入的库是否在node_modlues目录下的
                    priority: -10, // 值越大,优先级越高.模块先打包到优先级高的组里
                    filename: 'common/vendors.js', // 把所有的库都打包到一个叫vendors.js的文件里
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true, // 如果一个模块已经被打包过了,那么再打包时就忽略这个上模块
                    filename: 'common/common.js',
                },
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.tsx?/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: ['happypack/loader?id=ts-lint-pack']
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['happypack/loader?id=ts-pack']
            },
            {
                test: /\.(scss|css)$/,
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
            }
        ]
    },
    plugins: [
        /****   使用HappyPack实例化    *****/
        new HappyPack({
            id: 'ts-lint-pack',
            threads: 2,
            use: [
                {
                    loader: 'tslint-loader',
                    options: {
                        // tslint错误默认显示为警告
                        emitErrors: true,
                        // 默认情况下，tslint不会中断编译
                        failOnHint: false,
                    }
                }
            ]
        }),
        new HappyPack({
            id: 'ts-pack',
            threads: 2,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        happyPackMode: true,
                        transpileOnly: true,
                        configFile: tsConfig,
                    }
                }
            ]
        }),
        /**** end *****/
        new webpack.DefinePlugin({
            'process.env.FAAS_ENV': JSON.stringify(process.env.FAAS_ENV)
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
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
        // new CopyWebpackPlugin([
        //     {from: path.join(__dirname, '..', "./src/assets/music/"), to: "music/"}
        // ]),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ProgressBarPlugin(),
    ],
    devtool: 'none'
};
