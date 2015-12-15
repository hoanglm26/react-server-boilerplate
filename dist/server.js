/**
 * Created by Khai Phan on 12/7/2015.
 */

"use strict";

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackConfig = require('../webpack.config.js');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Routes = require('./config/Routes');

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var root = _path2.default.normalize(__dirname + '/..');
var app = (0, _express2.default)();

app.use((0, _morgan2.default)('short'));

if (!isProduction) {
    var compiler = (0, _webpack2.default)(_webpackConfig2.default);
    app.use((0, _webpackDevMiddleware2.default)(compiler, {
        noInfo: true,
        publicPath: _webpackConfig2.default.output.publicPath,
        stats: {
            colors: true
        }
    }));
    app.use((0, _webpackHotMiddleware2.default)(compiler));
} else {
    app.use(_express2.default.static(_path2.default.join(root, 'public')));
}

app.use(function (req, res) {
    (0, _reactRouter.match)({ routes: _Routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            var data = {
                title: 'react-server-boilerplate',
                page: _server2.default.renderToString(_react2.default.createElement(_reactRouter.RoutingContext, renderProps)),
                bundle: _webpackConfig2.default.output.publicPath + _webpackConfig2.default.output.filename
            };
            var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_App2.default, data));
            res.status(200).send('<!doctype html>\n' + html);
        } else {
            res.status(404).send('Not found');
        }
    });
});

var server = app.listen(port, function () {
    console.log('App listening at %s', port);
});