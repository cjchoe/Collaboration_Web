import express from 'express';
import multiparty from 'multiparty';
import fs from 'fs';

const router = express.Router();


router.get('/', (req, res) => {
    let list = {
        babp: "dsf"
    };
    res.json(list);
});

router.post('/upload', (req, res) => {
    console.log("upload post");
    // res.send("got data");
    const form = new multiparty.Form();
    form.on('field', (name, value) => {
        console.log('normal filed / name = ', name, ', value = ', value);
    });

    form.on('part', (part) => {
        let filename;
        let size

        //First Stream?
        if (part.filename) {
            filename = part.filename;
            size = part.byteCount;

            console.log("part : ", part);
            console.log("file name : ", filename);
            console.log("file size : ", size);
        } else {
            part.resume();
        }

        console.log("Write Streaming File : ", filename);
        let writeStream = fs.createWriteStream('./public/' + filename);
        writeStream.filename = filename;
        part.pipe(writeStream);

        // part.on('data', (chunk) => {
        //     console.log("read", chunk.length, 'bytes');
        // });

        part.on('end', () => {
            console.log(filename, "part reading complete");
            writeStream.end();
        });

    });

    form.on('progress', (byteRead, byteExcepted) => {
        console.log("Form on Progress Function : ", (byteRead / byteExcepted) * 100.0, "%");
    });

    form.on('close', () => {
        console.log("upload complete");
        res.status(200).send('Upload Complete')
    });

    form.parse(req);
})

export default router;
