/**
 * Created by Khai Phan on 12/8/2015.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

let styles = '';
if (process.env.BROWSER) styles = require('./User.css');

class User extends React.Component {
    render(){
        return (
            <div>
                Hello User 123
                <Link to={`/`}>Main</Link>
            </div>
        )
    }
}

export default CSSModules(User, styles);