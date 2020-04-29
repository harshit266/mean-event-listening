const express = require('express')
const loginController =require('./login.controller')

const router =express.Router();


router.post('/login',function(req,res){
    loginController.login(req,res)
})
router.post('/addAdmin',function(req,res){
    loginController.addAdmin(req,res)
})


module.exports= router;