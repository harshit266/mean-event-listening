const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const event = new Schema({

    name: {
        type: String,
    },
    age :{
        type :Number
    },
    event:{
        type:String
    },
    event_type:{
        type:String
    }


}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var Event  = mongoose.model('event', event)
module.exports = Event;