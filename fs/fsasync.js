const fs = require("fs");
const { console } = require("inspector");

const path = require("path");

const filename = "Async.txt";
const filepath = path.join(__dirname, filename);

//  _____________________________________________*
//   create the file through Async
//!  syntax:  fs.writefile(path,data,option,callback)

   fs.writeFile(filepath,"I'm abrar Ali Enginner",'utf-8',(err)=>{
      if(err)
        console.error(err);
        else console.log('your file hasbeen created')
   })

//   _________________________________________________*
//   read the fiel through Async
//!  syntax: fs.readfile(path,option,callback)
//?   callback:  A function with parameters(arr,data)

// fs.readFile(filepath,'utf-8',(err,data)=>{
//    if(err)
//     console.error(err);
//    else console.log(data)
// })

// ______________________________________________________*
//  update the file through Async
//!  syntax: fs.appendFile(path , data , Option , callback)

// fs.appendFile(filepath, "\nI'm a software engineer", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log("your data hasbeen updated");
// });


// _________________________________________________________*
//   Delete the file through Async
//!   Syntax: fs.unlink(path, callback)

//   fs.unlink(filepath,(err)=>{
//     if(err)
//        console.error(err)    
//     else console.log("your file hasbeen successfully deleted")
    
//   })
