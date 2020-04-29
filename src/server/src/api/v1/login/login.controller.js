let loginController = {}
const Login = require('./login.model')

loginController.login = (req, res) => {
    // console.log("---------------------dd---------")
    if (!req.body.email || !req.body.password) {
        // console.log("incomplete", req.body.email)
        // console.log("incomplete", req.body.password)
        return res.status(400).send("Incomplete Argument")
    }
    // console.log("in login--")
    var email = req.body.email
    // console.log("--email", email)
   
    Login.findOne({ email: email }, { email: 1, password: 1 }, (err, user) => {
        if (err) {
            res.status(400).send(err)
        } else {
            if (user) {
               if(req.body.password===user.password){
                   // console.log("admin Login Success")
                   res.status(200).send({
                       msg : "Login Succesful",
                       code:200
                   })
               }else{
                res.status(200).send({
                    msg: "wrong username/password",
                    code:400
                })   
               }
            } else {
                // console.log("Inside Else");
                res.status(200).send({
                    msg: "wrong username/password",
                    code:400
                })
            }
        }


    })
}
loginController.addAdmin = (req, res) => {

    const u = new Login()

    u.name = req.body.name
    u.email = req.body.email
    u.password=req.body.password

    u.save((err, result) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {    
            res.status(200).send({
                msg : "New Admin Created",
                code:200
            })
                console.log("Saved")
                // res.status(200).send("New Event Created")
        }
    });
}

module.exports = loginController;