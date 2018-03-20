var express = require('express');
var router = express.Router();

router.post('/',function (req,res) {


//res.writeHead(200, {"Content-Type": "application/json"});
//res.send(req.body.cat);
//var url = firebase.database().ref('images').push(req.files);
var data = req.body.data;
console.log(data);
//
res.send('saved');
res.end();

});
module.exports = router;
