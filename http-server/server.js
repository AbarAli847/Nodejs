// const http = require("http")

// const Server = http.createServer((req,res)=>{
//    if(req.url === "/"){
//       res.write('I am abrar ali engineer')
//       res.end();
//    }
// })



// const Port = 3000
// Server.listen(Port,() =>{
//     console.log(`listening a Port ${Port}`)
// })


const http= require("http")


const server =  http.createServer((req,res) =>{
    if(req.url==="/"){
        res.write("I am a software engineer")
        res.end();
    }
})

const Port = 5000
server.listen(Port,() =>{
    console.log(`listening a port ${Port}`)
}) 