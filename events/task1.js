const EventEmitter = require('events')
const fs = require("fs")
 

const emitter = new EventEmitter

const eventscount = fs.existsSync('count.json')? JSON.parse(fs.readFileSync('count.json')): {
    "user-login": 0,
    "user-purchase":0,
    "profile-updated":0,
    "user-logout":0,
}


// on
emitter.on("user-login",(username) =>{
    eventscount["user-login"]++,
    console.log(`${username} login!`)
})
emitter.on("user-purchase",(username,item) =>{
    eventscount['user-purchase']++,
    console.log(`${username}  purchase ${item}!`)
})
emitter.on("profile-updated",(username,field) =>{
    eventscount["profile-updated"]++,
    console.log(`${username} updated there ${field}!`)
})
emitter.on("user-logout",(username) =>{
    eventscount['user-logout']++,
    console.log(`${username} logged out!`)
})
//   Summary saved
emitter.on("summary",() =>{
    fs.writeFileSync("count.json", JSON.stringify(eventscount , null, 2))
    console.log("summary saved")
    console.log(eventscount)
})

//    emitter
emitter.emit("user-login", "Abrar")
emitter.emit("user-purchase", "Abrar","laptop")
emitter.emit("profile-updated", "Abrar","email")
emitter.emit("user-logout", "Abrar")



//   read the summary
emitter.emit("summary")