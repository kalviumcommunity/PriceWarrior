const mongoose = require('mongoose')

const Schema = mongoose.Schema

const  userSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true
    },


})

module.exports = mongoose.model('UserData', userSchema)
