/**
 * Created by Khai Phan on 12/7/2015.
 */

"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _chokidar = require('chokidar');

var _chokidar2 = _interopRequireDefault(_chokidar);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackConfigJs = require('../webpack.config.js');

var _webpackConfigJs2 = _interopRequireDefault(_webpackConfigJs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _configRoutes = require('./config/Routes');

var _configRoutes2 = _interopRequireDefault(_configRoutes);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var root = _path2['default'].normalize(__dirname + '/..');
var app = (0, _express2['default'])();

app.use((0, _morgan2['default'])('short'));

if (!isProduction) {
    (function () {
        var compiler = (0, _webpack2['default'])(_webpackConfigJs2['default']);
        app.use((0, _webpackDevMiddleware2['default'])(compiler, {
            noInfo: true,
            publicPath: _webpackConfigJs2['default'].output.publicPath,
            stats: {
                colors: true
            }
        }));
        app.use((0, _webpackHotMiddleware2['default'])(compiler));

        var watcher = _chokidar2['default'].watch(_path2['default'].join(root, 'app'));

        watcher.on('ready', function () {
            watcher.on('all', function (event, path) {
                console.log('clear cache');
                Object.keys(require.cache).forEach(function (id) {
                    delete require.cache[id];
                });
            });
        });
    })();
} else {
    app.use(_express2['default']['static'](_path2['default'].join(root, 'public')));
}

app.use(function (req, res, next) {
    (0, _reactRouter.match)({ routes: _configRoutes2['default'], location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            var data = {
                title: 'react-server-boilerplate',
                page: _reactDomServer2['default'].renderToString(_react2['default'].createElement(_reactRouter.RoutingContext, renderProps)),
                bundle: _webpackConfigJs2['default'].output.publicPath + _webpackConfigJs2['default'].output.filename
            };
            var html = _reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(_componentsApp2['default'], data));
            res.status(200).send('<!doctype html>\n' + html);
        } else {
            next();
        }
    });
});

app.use(function (req, res, next) {
    (0, _api2['default'])(req, res, next);
});

_http2['default'].createServer(app).listen(port, function () {
    console.log('App listening at %s', port);
});