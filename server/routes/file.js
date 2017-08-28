import express from 'express';
import multiparty from 'multiparty';
import fs from 'fs';
import Grid from 'gridfs-stream';
import mongoose from 'mongoose';

const router = express.Router();

const db = mongoose.connection;
let conn;
Grid.mongo = mongoose.mongo;
conn = mongoose.connection;

router.get('/', (req, res) => {
    let list = {
        babp: "dsf"
    };
    res.json(list);
});

router.post('/upload', (req, res) => {
    // if(!req.is("multipart/form-data"))
    //   return next();
    if(!req.body)
      req.body={};

    let files = {};
    let streams = [];
    let streams_response = 0;
    var busboy = new (require("busboy"))({headers: req.headers});
    let gfs = Grid(conn.db);

    busboy.on("file", function(fieldname, file, filename, encoding, mimetype){
				var writeStream = gfs.createWriteStream({filename:filename});
				file.pipe(writeStream);
				streams.push([writeStream,fieldname]);
				streams_response++;
			});
			//Parses fields in the normal req.body way.
			busboy.on("field",function(fieldname, val, fieldnameTruncated, valTruncated){
				req.body[fieldname] = val;
			});
			busboy.on('finish',function(){
				req.body.files = files;
				streams.forEach(function(e,i){
					e[0].on("close",function(file){
						files[e[1]] = {_id:file._id,filename:file.filename};
						streams_response--;
						if(streams_response === 0){
							next();
						}
					});
				});
			});
			req.pipe(busboy);
})


export default router;
