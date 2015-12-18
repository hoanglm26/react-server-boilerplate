'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('../components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsMain = require('../components/Main');

var _componentsMain2 = _interopRequireDefault(_componentsMain);

var _componentsHome = require('../components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsUser = require('../components/User');

var _componentsUser2 = _interopRequireDefault(_componentsUser);

exports['default'] = _react2['default'].createElement(
    _reactRouter.Router,
    null,
    _react2['default'].createElement(
        _reactRouter.Route,
        { component: _componentsMain2['default'] },
        _react2['default'].createElement(_reactRouter.Route, { path: '/', component: _componentsHome2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { path: '/user', component: _componentsUser2['default'] })
    )
);
module.exports = exports['default'];