const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.tsx',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public'
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.css']
    },
    optimization: {
        nodeEnv: 'production',
        removeAvailableModules: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: "./src/index.html",
            path: "./public",
            excludeChunks: ['server']
        })
    ],
    module: {
        rules: [{
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                    /* inline if smaller than 10 KB, otherwise load as a file */
                    loader: 'url-loader?name=assets/[name].[ext]',
                    options: {
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.(webm|mp4)$/,
                use: 'file-loader?name=videos/[name].[ext]',
            },
            {
                test: /\.(eot|ttf|woff2?|otf)$/,
                use: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
};

// var serverConfig = {
//     entry: 'server.js',
//     target: 'node',
//     externals: [nodeExternals()],
//     output: {
//         path: path.resolve(__dirname, 'public'),
//         filename: 'server.js',
//         publicPath: '/'
//     },
//     module: {
//         rules: [{
//             test: /\.(js)$/,
//             use: 'babel-loader'
//         }]
//     },
//     plugins: [
//         new webpack.DefinePlugin({
//             __isBrowser__: "false"
//         })
//     ]
// }
// // serverConfig
// module.exports = [config]