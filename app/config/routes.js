import React from 'react';
import { Router, Route } from 'react-router';
import App from '../components/App';
import Main from '../components/Main';
import User from '../components/User';

export default(
    <Router>
        <Route path='/' component={Main}>

        </Route>
        <Route path='/user' component={User}>

        </Route>
    </Router>
);
