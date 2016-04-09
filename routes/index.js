var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    //res.render('input')
    res.sendFile(process.cwd()+"/views/input.html")
    console.log('hello heroku');
});

module.exports = router;
