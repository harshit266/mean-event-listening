const express = require('express')
const loginController =require('./login.controller')

const router =express.Router();

// router.post('/about-edit',function(req,res){
//     loginController.loginEdit(req,res)
// })

router.post('/login',function(req,res){
    loginController.login(req,res)
})

// router.post('/editActiveAbout',function(req,res){
//     loginController.editActiveAbout(req,res)
// })


module.exports= router;