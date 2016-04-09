'use strict'

var express = require('express');
var router = express.Router();
var userArr = require('./users').userArr

/* GET card listing. */
router.get('/', function(req, res, next) {
    let name = req.body.name


    if(sign == 1){
        console.log("sign checked")
        for(let i=0; i<userArr.length; ++i){
            console.log(userArr[i])
            console.log(userArr[i].name !== name)
            if(userArr[i].name !== name){
                res.render('result', userArr[i])
                break
            }
        }
    }
  //res.render('result', {
  //  name: 'hojun',
  //  company: "Samsung SDS",
  //  position: "L1",
  //  department: "CX Team",
  //  phone: "0102225555",
  //  email: "hoho@samsung.com"
  //})
});

module.exports = router;
