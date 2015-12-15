/**
 * Created by khaip on 12/10/2015.
 */

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

let styles = '';
if (process.env.BROWSER) styles = require('./App.css');

const DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script;

class App extends Component {
    render() {
        return (
            <html className="no-js" lang="">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>{ this.props.title }</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
            <div id="app" dangerouslySetInnerHTML={{ __html: this.props.page }} />
            <script src={this.props.bundle}></script>
            </body>
            </html>
        )
    }
}

export default CSSModules(App, styles);
