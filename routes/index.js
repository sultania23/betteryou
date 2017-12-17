var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var firebase = require('firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload',upload.any(),function (req,res) {

    if (!req.files) {
        console.log("no files found here");
        res.send("not files");
    }
    else
    {
        //res.writeHead(200, {"Content-Type": "application/json"});
        //res.send(req.body.cat);
        var url = firebase.database().ref('images').push(req.files);
        var data = {
            cat: req.body.cat,
            subcat: req.body.subcat,
            url: url
        }
        //
        res.render('editor-content.ejs',data);
    }
});
module.exports = router;
