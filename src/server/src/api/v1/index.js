const loginRouter = require ( './login/login.routes')
const eventRouter = require ( './event/event.routes')


x= (app)=>{
    console.log("initiallizing routes")
    app.use('',loginRouter)
    app.use('',eventRouter)  

 
}
module.exports =x;
