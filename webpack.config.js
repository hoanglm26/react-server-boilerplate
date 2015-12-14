var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssImport = require('postcss-import');


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/client.js'
    ],
    output: {
        path: path.join(__dirname, '/public/'),
        publicPath: '/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
                //loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]_[hash:base64:5]!postcss-loader'
            },
            {
                test:   /\.style.js$/,
                loader: "style-loader!css-loader!postcss-loader?parser=postcss-js!babel"
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                BROWSER: JSON.stringify(true)
            }
        })
    ],
    postcss: function (webpack) {
        return [
            autoprefixer,
            precss,
            postcssImport({
                addDependencyTo: webpack
            })
        ];
    }
};
