/**
 * Created by Khai Phan on 12/7/2015.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

let styles = '';
if (process.env.BROWSER) styles = require('./Main.css');

class Main extends React.Component {
    render(){
        return (
            <div>
                Hello Main
                <Link to={`/user`}>User</Link>
            </div>
        )
    }
}

export default CSSModules(Main, styles);
