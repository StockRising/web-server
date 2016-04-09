var express = require('express');
var router = express.Router();
const db = require('../db')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
    let profile = {
        name: req.body.name,
        phoneNum:  req.body.phone,
        company: req.body.company,
        email: req.body.email,
        department: req.body.department,
        address: req.body.address
    }

    let newUser = new db.userModel({
        name: profile.name,
        phoneNum: profile.phoneNum,
        company: profile.company,
        email: profile.email,
        department: profile.department,
        address: profile.address,
    })

    newUser.save(error => {
        if(error) {
            reject(error)
        } else {
            resolve(newUser)
        }
    })

    res.end("Success")
})

module.exports = router;
