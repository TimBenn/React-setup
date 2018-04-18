const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: '',
            template: './src/templates/html/index.html',
            filename: './index.html'
        })
    ]
};