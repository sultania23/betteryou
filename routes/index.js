var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/addnewad',function (req,res,next) {
    res.render('addnewad');
});
router.post('/',function (req,res) {


        //res.writeHead(200, {"Content-Type": "application/json"});
        //res.send(req.body.cat);
        //var url = firebase.database().ref('images').push(req.files);
        var data = {
            cat: req.body.cat,
            subcat: req.body.subcat,
            url: req.body.image,
            title:req.body.title,
            tags:req.body.tags,
            time:req.body.time
        };
       // console.log(data);
        //
        res.render('editor-content.ejs',data);

});




module.exports = router;
