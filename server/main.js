import express from 'express';
import path from 'path';
//import posts from './routes/posts'
import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY
import mongoose from 'mongoose';
import session from 'express-session';
import api from './routes';
import ServerSocketManager from './ServerSocketManager';
<<<<<<< HEAD
import io from 'socket.io';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';
import Grid from 'gridfs-stream';

//import Login from '../src/containers';
=======
//import Login from '../src/containers';

>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
const app = express();
let port = 3000;

/* db 선언 부*/
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
// mongoose.connect('mongodb://username:password@host:port/database=');
<<<<<<< HEAD
mongoose.connect('mongodb://localhost/Collaboration');
=======
mongoose.connect('mongodb://localhost/codelab');
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57

/* use session */
app.use(session({
    secret: 'CodeLab1$1$234',
    resave: false,
    saveUninitialized: true
}));
<<<<<<< HEAD
Grid.mongo = mongoose.mongo;
let gfs = Grid(db.db);

// app.use(morgan('dev'));
app.use(bodyParser.json());

=======

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

>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
app.use('/', express.static(__dirname + '/../public'));

app.use('/api', api);

<<<<<<< HEAD
app.get('/foo/:filename', function(req, res){
  console.log("you got food");
  console.log(req.filename);
=======
//app.use('/login', Login);

/* support client-side routing */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); // 에러 처리

<<<<<<< HEAD
app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
});
=======

>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
//Open Server
//function(param1, function()...)  파라미터로 들어가는 function 은 callback  함수로, 순서로 시작, function() 대신 ()=> 형태로 씀.
const server = app.listen(port, function(){
  console.log('Express listening on port', port);
<<<<<<< HEAD
  new ServerSocketManager(server);
});
let storage = GridFsStorage({
        gfs : gfs,
        filename: function (req, file, cb) {
            let datetimestamp = Date.now();
            cb(null, file.originalname);
        },

        root: 'mesh' //root name for collection to store files into
    });

let upload = multer({ //multer settings for single upload
    storage: storage
}).single('sendfile');

app.post('/upload', function(req,res){
  upload(req,res,function(err){
    if(err){
      console.log("can't upload your mesh file.");
      res.json({error_code:1,err_desc:err});
      return;
    }
    res.json({error_code:0,err_desc:null});
  });
});

app.get('/file/:filename', function(req, res){
    gfs.collection('mesh'); //set collection name to lookup into
    /** First check if file exists */
    gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
        if(!files || files.length === 0){
            console.log("Can't find file")
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        /** create read stream */
        let readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: "mesh"
        });
        /** set the proper content type */
        res.set('Content-Type', files[0].contentType)
        /** return response */
        return readstream.pipe(res);
    });
});

/* support client-side routing */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
=======

  new ServerSocketManager(server)
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57
});
