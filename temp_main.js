import express from 'express';
import path from 'path';
//import posts from './routes/posts'
import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY
import mongoose from 'mongoose';
import session from 'express-session';
import api from './routes';
import ServerSocketManager from './ServerSocketManager';
import multiparty from 'multiparty';
import io from 'socket.io'
//import Login from '../src/containers';

const app = express();
let port = 3000;

/* db 선언 부*/
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
// mongoose.connect('mongodb://username:password@host:port/database=');
mongoose.connect('mongodb://localhost/codelab');

/* use session */
app.use(session({
    secret: 'CodeLab1$1$234',
    resave: false,
    saveUninitialized: true
}));

app.use(morgan('dev'));
app.use(bodyParser.json());

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


app.use('/', express.static(__dirname + '/../public'));

app.use('/api', api);

//app.use('/login', Login);

/* support client-side routing */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); // 에러 처리


//Open Server
//function(param1, function()...)  파라미터로 들어가는 function 은 callback  함수로, 순서로 시작, function() 대신 ()=> 형태로 씀.

const server = app.listen(port, function(){
  console.log('Express listening on port', port);
  new ServerSocketManager(server);
});
