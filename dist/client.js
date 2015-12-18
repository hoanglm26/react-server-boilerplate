/**
 * Created by khaip on 12/10/2015.
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _historyLibCreateBrowserHistory = require('history/lib/createBrowserHistory');

var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

var _configRoutes = require('./config/routes');

var _configRoutes2 = _interopRequireDefault(_configRoutes);

var history = (0, _historyLibCreateBrowserHistory2['default'])();

_reactDom2['default'].render(_react2['default'].createElement(
  _reactRouter2['default'],
  { history: history },
  _configRoutes2['default']
), document.getElementById('app'));