var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssImport = require('postcss-import');


module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
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
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                include: path.join(__dirname, 'app'),
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    stage: 0,
                    plugins: ['react-transform'],
                    extra: {
                        'react-transform': {
                            transforms: [
                                {
                                    transform: 'react-transform-hmr',
                                    imports: ['react'],
                                    locals: ['module']
                                }, {
                                    transform: 'react-transform-catch-errors',
                                    imports: ['react', 'redbox-react']
                                }
                            ]
                        }
                    }
                }
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
        //new webpack.NoErrorsPlugin(),
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
