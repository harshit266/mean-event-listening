const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const login = new Schema({

    email: {
        type: String,
        unique:true
        
    },
    name :{
        type :String
    },
    password:{
        type:String
    }


}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var Login  = mongoose.model('login', login)
module.exports = Login;