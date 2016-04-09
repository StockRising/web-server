'use strict'

const config = require('../config')
const Mongoose = require('mongoose').connect(config.dbURI)

Mongoose.connection.on('error', error => {
    console.log("MongoDB Error: ", error)
})

const cardUser = new Mongoose.Schema({
    name: String,
    phoneNum: String,
    company: String,
    email: String,
    department: String,
    address: String,
})

let userModel = Mongoose.model('cardUser', cardUser)

module.exports = {
    Mongoose,
    userModel,
}
