'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _ServerSocketManager = require('./ServerSocketManager');

var _ServerSocketManager2 = _interopRequireDefault(_ServerSocketManager);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _multerGridfsStorage = require('multer-gridfs-storage');

var _multerGridfsStorage2 = _interopRequireDefault(_multerGridfsStorage);

var _gridfsStream = require('gridfs-stream');

var _gridfsStream2 = _interopRequireDefault(_gridfsStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Login from '../src/containers';
// PARSE HTML BODY

//import posts from './routes/posts'
var app = (0, _express2.default)(); // HTTP REQUEST LOGGER

var port = 3000;

/* db 선언 부*/
var db = _mongoose2.default.connection;
db.on('error', console.error);
db.once('open', function () {
    console.log('Connected to mongodb server');
});
// mongoose.connect('mongodb://username:password@host:port/database=');
_mongoose2.default.connect('mongodb://localhost/Collaboration');

/* use session */
app.use((0, _expressSession2.default)({
    secret: 'CodeLab1$1$234',
    resave: false,
    saveUninitialized: true
}));
_gridfsStream2.default.mongo = _mongoose2.default.mongo;
var gfs = (0, _gridfsStream2.default)(db.db);

// app.use(morgan('dev'));
app.use(_bodyParser2.default.json());

app.use('/', _express2.default.static(__dirname + '/../public'));

app.use('/api', _routes2.default);

app.get('/foo/:filename', function (req, res) {
    console.log("you got food");
    console.log(req.filename);
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}); // 에러 처리

app.use(function (req, res, next) {
    //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
//Open Server
//function(param1, function()...)  파라미터로 들어가는 function 은 callback  함수로, 순서로 시작, function() 대신 ()=> 형태로 씀.
var server = app.listen(port, function () {
    console.log('Express listening on port', port);
    new _ServerSocketManager2.default(server);
});
var storage = (0, _multerGridfsStorage2.default)({
    gfs: gfs,
    filename: function filename(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.originalname);
    },

    root: 'mesh' //root name for collection to store files into
});

var upload = (0, _multer2.default)({ //multer settings for single upload
    storage: storage
}).single('sendfile');

app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log("can't upload your mesh file.");
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        res.json({ error_code: 0, err_desc: null });
    });
});

app.get('/file/:filename', function (req, res) {
    gfs.collection('mesh'); //set collection name to lookup into
    /** First check if file exists */
    gfs.files.find({ filename: req.params.filename }).toArray(function (err, files) {
        if (!files || files.length === 0) {
            console.log("Can't find file");
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        /** create read stream */
        var readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: "mesh"
        });
        /** set the proper content type */
        res.set('Content-Type', files[0].contentType);
        /** return response */
        return readstream.pipe(res);
    });
});

/* support client-side routing */
app.get('*', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, './../public/index.html'));
});