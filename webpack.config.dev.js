import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'shared')
                ],
                loaders: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.scss$/,
                include: [
                    path.join(__dirname, 'client')
                ],
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[hash].[ext]'
                }
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            {
                test: /\.md$/,
                loaders: ['html-loader', 'markdown-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    }
}