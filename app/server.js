/**
 * Created by Khai Phan on 12/7/2015.
 */

"use strict";

import path from 'path';
import express from 'express';
import morgan from 'morgan';

import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack.config.js';

import React from 'react';
import ReactDOM from 'react-dom/server'
import { match, RoutingContext} from 'react-router'
import App from './components/App';
import routes from './config/Routes';

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const devPort = isProduction ? process.env.DEV_PORT : 8080;
const root = path.normalize(__dirname + '/..');
const app = express();

app.use(morgan('short'));

if (!isProduction) {
    const compiler = webpack(webpackConfig);

    const devServer = new webpackDevServer(compiler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        noInfo: true,
        stats: {
            colors: true
        },
        proxy: {
            '*': 'http://localhost:3000'
        }
    });

    devServer.listen(8080, 'localhost', function() {});
} else {
    app.use(express.static(path.join(root, 'public')));
}

app.use((req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        }
        else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }
        else if (renderProps) {
            const data = {
                title: 'react-server-boilerplate',
                page: ReactDOM.renderToString(<RoutingContext {...renderProps} />),
                bundle : webpackConfig.output.publicPath + webpackConfig.output.filename
            };
            const html = ReactDOM.renderToStaticMarkup(<App {...data} />);
            res.status(200).send('<!doctype html>\n' + html);
        }
        else {
            res.status(404).send('Not found');
        }
    })
});

var server = app.listen(port, function () {
    console.log('App listening at %s', devPort);
});
