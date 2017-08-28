'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multiparty = require('multiparty');

var _multiparty2 = _interopRequireDefault(_multiparty);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _gridfsStream = require('gridfs-stream');

var _gridfsStream2 = _interopRequireDefault(_gridfsStream);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var db = _mongoose2.default.connection;
var conn = void 0;
_gridfsStream2.default.mongo = _mongoose2.default.mongo;
conn = _mongoose2.default.connection;

router.get('/', function (req, res) {
	var list = {
		babp: "dsf"
	};
	res.json(list);
});

router.post('/upload', function (req, res) {
	// if(!req.is("multipart/form-data"))
	//   return next();
	if (!req.body) req.body = {};

	var files = {};
	var streams = [];
	var streams_response = 0;
	var busboy = new (require("busboy"))({ headers: req.headers });
	var gfs = (0, _gridfsStream2.default)(conn.db);

	busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
		var writeStream = gfs.createWriteStream({ filename: filename });
		file.pipe(writeStream);
		streams.push([writeStream, fieldname]);
		streams_response++;
	});
	//Parses fields in the normal req.body way.
	busboy.on("field", function (fieldname, val, fieldnameTruncated, valTruncated) {
		req.body[fieldname] = val;
	});
	busboy.on('finish', function () {
		req.body.files = files;
		streams.forEach(function (e, i) {
			e[0].on("close", function (file) {
				files[e[1]] = { _id: file._id, filename: file.filename };
				streams_response--;
				if (streams_response === 0) {
					next();
				}
			});
		});
	});
	req.pipe(busboy);
});

exports.default = router;