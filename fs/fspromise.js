const fs = require("fs");

const path = require("path");

const filename = "promises.txt";
const filepath = path.join(__dirname, filename);

// ___________________________________________________________________
//?  read directory through promises

// const file = __dirname

// fs.promises
//   .readdir(file)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// _________________________________________________________________
//?    create the file through prmises
//!  syntsx: fs.promises.writeFile(path,Data,Option).then().catch()

// fs.promises
//   .writeFile(filepath, "Abrar Ali engineer", "utf-8")
//   .then(() => console.log("yor file hasbeen created"))
//   .catch((err) => console.log(err));

//   ______________________________________________________________________

//? read the file data throgh promises
//! syntax: fs.readFile(path,Option).then(data).catch(arr)

// fs.promises
//   .readFile(filepath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((arr) => console.log(arr));


// ___________________________________________________________________________

    //    update the file data through promises

    //    fs.promises
    //    .appendFile(filepath,'\nI am a software engineer','utf-8')
    //    .then(()=>console.log("your data has been updated"))
    //    .catch((arr)=> console.log("error occured".arr))