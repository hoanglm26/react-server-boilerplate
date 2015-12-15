'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _Main = require('../components/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Home = require('../components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _User = require('../components/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Router,
    null,
    _react2.default.createElement(
        _reactRouter.Route,
        { component: _Main2.default },
        _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/user', component: _User2.default })
    )
);