/**
 * Created by khaip on 12/10/2015.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var styles = '';
if (process.env.BROWSER) styles = require('./App.css');

var DOM = _react2['default'].DOM,
    body = DOM.body,
    div = DOM.div,
    script = DOM.script;

var App = (function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'html',
                { className: 'no-js', lang: '' },
                _react2['default'].createElement(
                    'head',
                    null,
                    _react2['default'].createElement('meta', { charSet: 'utf-8' }),
                    _react2['default'].createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
                    _react2['default'].createElement(
                        'title',
                        null,
                        this.props.title
                    ),
                    _react2['default'].createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' })
                ),
                _react2['default'].createElement(
                    'body',
                    null,
                    _react2['default'].createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: this.props.page } }),
                    _react2['default'].createElement('script', { src: this.props.bundle })
                )
            );
        }
    }]);

    return App;
})(_react.Component);

exports['default'] = (0, _reactCssModules2['default'])(App, styles);
module.exports = exports['default'];