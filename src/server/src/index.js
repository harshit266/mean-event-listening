const express = require('express')
const routes = require('./api/v1')
const http =require('http')
const bodyParser = require('body-parser')
const initializedb = require('./db')
const cors = require("cors");
let app = express()

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use(cors());


initializedb( cb => {
   
    app.get('/',(req,res)=>{
        
        res.status(200).send("Welcome to new project")
    }
    )
    
    routes(app);
    app.listen(4000 ,()=>{
        console.log("server running on port "+ 4000)
    })
})