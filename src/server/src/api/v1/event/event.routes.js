const express = require('express')
const eventController =require('./event.controller')

const router =express.Router();

router.post('/addEvent',function(req,res){
    // console.log("yha to aagya ")
    eventController.addEvent(req,res)
})
router.get('/viewEvent',function(req,res){
    // console.log("yha to aagya ")
    eventController.viewEvent(req,res)
})



module.exports= router;