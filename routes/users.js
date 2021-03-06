'use strict'

var express = require('express');
var router = express.Router();
const db = require('../db')

var sign = 0;
let userArr = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login')
});

router.post('/', (req, res, next) => {
    let profile = {
        name: req.body.name,
        phone:  req.body.phone,
        company: req.body.company,
        email: req.body.email,
        department: req.body.department,
        position: req.body.position
    }

    userArr.push(profile)

    res.render('input', {
        name: profile.name
    })

    //let newUser = new db.userModel({
    //    name: profile.name,
    //    phoneNum: profile.phoneNum,
    //    company: profile.company,
    //    email: profile.email,
    //    department: profile.department,
    //    address: profile.address,
    //})
    //
    //newUser.save(error => {
    //    if(error) {
    //        console.log(err)
    //    } else {
    //        res.render('trade', {
    //            name: profile.name
    //        })
    //    }
    //})
})

router.get('/insertSignal', (req, res, next) => {
    sign = 1;
    console.log(sign)
    res.send("Sign Inserted")
})

router.post('/insertSignal', (req, res, next) => {
    sign = req.body.sign
    console.log("inserted: " + sign)
    res.send("Sign Inserted")
})

router.post('/checkSignal', (req, res, next) => {
    let name = req.body.name

    console.log(userArr)

    if(sign == 1){
        console.log("sign checked")
        for(let i=0; i<userArr.length; ++i){
            if(userArr[i].name !== name){
                res.json({ index: i })
            }
        }
    }
})

router.get('/card/:index', (req, res, next) => {
    let index = req.params.index

    console.log("index: " + index)
    console.log()
    res.render("result", {
        result: userArr[index]
    })
})

module.exports = router;
