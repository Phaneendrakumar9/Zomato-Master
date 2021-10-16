"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeMailgun = initializeMailgun;

var _mailgunJs = _interopRequireDefault(require("mailgun-js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

_dotenv["default"].config({
  path: require("path").resolve(__dirname, "../.env")
});

function initializeMailgun() {
  return (0, _mailgunJs["default"])({
    apiKey: process.env.MAILGUN__API__KEY,
    domain: process.env.MAILGUN__DOMAIN
  });
}