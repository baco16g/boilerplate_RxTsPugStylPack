import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import path from 'path';

export default {
    context: path.resolve(__dirname, 'src'),

    entry: path.resolve(__dirname, 'src/ts/app.ts'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        inline: false,
        contentBase: 'dist',
        port: 3000
     },

    devtool: 'source-map',

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                  use: ['css-loader', 'stylus-loader']
                })
            }
        ]
    },

    plugins: [
        new BrowserSyncPlugin({
            server: {
                baseDir: ['./dist']
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Home',
            template: 'pug/index.pug'
        }),
        new ExtractTextPlugin('[name].css')
    ]
}
