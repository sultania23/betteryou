var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var firebase = require('firebase');
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload',upload.single('image'),function (req,res) {
    var data ={
        title: req.body.title,
        tags: req.body.tags,
        cat: req.body.cat,
        subcat: req.body.subcat,
        time: req.body.time,
    };


    if (!req.file) {
        res.send("not files");
    }
    else {
        var file = req.file;
        var image_ref = firebase.database().ref('/images').push(req.file);

        if(image_ref)
        {
            data.url =  image_ref;
        }
        res.render('editor-content',data);
    }
});


module.exports = router;
