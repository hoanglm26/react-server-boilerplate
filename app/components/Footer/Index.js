/**
 * Created by khaip on 12/14/2015.
 */

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

let styles = '';
if (process.env.BROWSER) styles = require('./Footer.css');

class Footer extends Component {

    render() {
        return(
            <div>Footer</div>
        )
    }
}

export default CSSModules(Footer, styles);