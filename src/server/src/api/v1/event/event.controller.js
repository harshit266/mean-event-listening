let eventController = {}
const Event = require('./event.model')

eventController.addEvent = (req, res) => {

    const u = new Event()

    u.name = req.body.name
    u.age = req.body.age
    u.event=req.body.event
    u.event_type = req.body.type

    u.save((err, result) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {    
                console.log("Saved")
                // res.status(200).send("New Event Created")
        }
    });
}

eventController.viewEvent = (req, res) => {

    
    Event.find({}, (err, Client) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
            if (Client) {
                return res.status(200).send(Client)
            } else {
                res.status(400).send("Doesn't exist")
            }

        }
    })
}

module.exports = eventController;