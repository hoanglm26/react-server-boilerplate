/**
 * Created by khaip on 12/17/2015.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var Router = _express2['default'].Router();

Router.get('/123', function (req, res) {
  res.send("You are a winner");
});

exports['default'] = Router;
module.exports = exports['default'];