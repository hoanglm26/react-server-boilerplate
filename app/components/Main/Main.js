/**
 * Created by Khai Phan on 12/7/2015.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

import Header from '../Header';
import Footer from '../Footer';

let styles = '';
if (process.env.BROWSER) styles = require('./Main.css');

class Main extends React.Component {
    render(){
        return (
            <div className="container">
                <Header />
                { this.props.children }
                <Footer />
            </div>
        )
    }
}

export default CSSModules(Main, styles);
