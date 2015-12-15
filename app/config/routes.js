import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Main from '../components/Main';
import Home from '../components/Home';
import User from '../components/User';

export default(
    <Router>
        <Route component={Main}>
            <Route path='/' component={Home} />
            <Route path='/user' component={User} />
        </Route>
    </Router>
);
