/**
 * Created by khaip on 12/14/2015.
 */

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

let styles = '';
if (process.env.BROWSER) styles = require('./Header.css');

class Header extends Component {

    render() {
        return(
            <div>Header</div>
        )
    }
}

export default CSSModules(Header, styles);