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

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("I am a software engineer");
    res.end();
  }
  if (req.url === "/about") {
    res.write(
      "Hi, I'm Abrar Ali, a passionate React.js Developer dedicated to building fast, interactive, and user-friendly web applications. With a strong foundation in JavaScript and modern UI libraries, I specialize in turning complex problems into elegant, high-performance code. My goal is to create digital experiences that are not only functional but also visually engaging",
    );
    res.end();
  }
  if (req.url === "/contact") {
    res.write("Contact us");
    res.end();
  }
});

const Port = 5000;
server.listen(Port, () => {
  console.log(`listening a port ${Port}`);
});
