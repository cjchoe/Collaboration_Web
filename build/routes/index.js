'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _account = require('./account');

var _account2 = _interopRequireDefault(_account);

var _memo = require('./memo');

var _memo2 = _interopRequireDefault(_memo);

<<<<<<< HEAD
var _file = require('./file');

var _file2 = _interopRequireDefault(_file);

=======
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.use('/account', _account2.default);
router.use('/memo', _memo2.default);
<<<<<<< HEAD
router.use('/file', _file2.default);
=======
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57

exports.default = router;