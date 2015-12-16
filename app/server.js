/**
 * Created by Khai Phan on 12/7/2015.
 */

"use strict";

import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import http from 'http';
import chokidar from 'chokidar';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';

import React from 'react';
import ReactDOM from 'react-dom/server'
import { match, RoutingContext} from 'react-router'
import App from './components/App';
import routes from './config/Routes';

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const root = path.normalize(__dirname + '/..');
const app = express();

app.use(morgan('short'));

if (!isProduction) {
    const compiler = webpack(webpackConfig);
    app.use(webpackMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true
        }
    }));
    app.use(webpackHotMiddleware(compiler));

    const watcher = chokidar.watch(path.join(root, 'app'))
    .on('all', function(event, path) {
        //console.log(event, path);
        Object.keys(require.cache).forEach(function(id) {
            delete require.cache[id];
        });
    });

} else {
    app.use(express.static(path.join(root, 'public')));
}

let eRouter = express.Router();

eRouter.get('/123', (req, res) => {
    res.send("You are a winner test");
});

app.use((req, res, next) => {
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
            next();
        }
    })
});

http.createServer(app).listen(port, function() {
    console.log('App listening at %s', port);
});