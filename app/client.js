/**
 * Created by khaip on 12/10/2015.
 */

import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './config/routes';

const history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>,document.getElementById('app'));