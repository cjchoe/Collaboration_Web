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
_mongoose2.default.connect('mongodb://localhost/codelab');

/* use session */
app.use((0, _expressSession2.default)({
  secret: 'CodeLab1$1$234',
  resave: false,
  saveUninitialized: true
}));

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());

// app.post('/foweij')
// app.use('/', function(req, res){
//   return res.send("asdfasdf")
// })
// app.use('/hello',(req,res)=>{
//   res.render(__dirname+'../public/index.html');
// });

/*
app.get('/hello', (req, res) => {
  //res.send('<h1>Can you hear me?<h1>');
  res.send(__dirname + '../public/index.html');
});*/

//app.use('/posts', posts);

app.use('/', _express2.default.static(__dirname + '/../public'));

app.use('/api', _routes2.default);

//app.use('/login', Login);

/* support client-side routing */
app.get('*', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, './../public/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); // 에러 처리


//Open Server
//function(param1, function()...)  파라미터로 들어가는 function 은 callback  함수로, 순서로 시작, function() 대신 ()=> 형태로 씀.
var server = app.listen(port, function () {
  console.log('Express listening on port', port);

  new _ServerSocketManager2.default(server);
});