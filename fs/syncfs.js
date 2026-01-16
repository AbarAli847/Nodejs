// // write file syntax:fs.writeFileSync(filename, data , option)
// UTF-8 text ko computer friendly format me badal kar safely save aur share karne ka tareeqa hai

const fs = require("fs");
const path = require("path");

const filename = "data.txt";
const filepath = path.join(__dirname, filename);

// _________________________________________________
//! create the file through Sync
// const writefile = fs.writeFileSync(
//   filepath,
//   "Hi, I'm Abrar Ali Engineeer 12",
//   "utf-8"
// );
// console.log(writefile);

// __________________________________________________
//!  Read tha file
//!  syntax: fs.readfilesync(filepath,option)

// const readfile = fs.readFileSync(filepath,'utf-8')
//  console.log(readfile)

// _________________________________________________

//!    updated the data
// const appendfile = fs.appendFileSync(
//   filepath,
//   "\nHi, I'm Abrar Ali Engineeer and software Engineer",
//   "utf-8"
// );
// console.log(appendfile)

// _________________________________________________
    //!  delete the file by path

    // const deletedata = fs.unlinkSync(filepath)
    // console.log(deletedata)

    // _____________________________________________________

    // Rename file from one  name to another
    //! Syntax: fs.renameSync (oldpath,newpath)

      const newUpdatedfilename = "UpdatedText.txt"
      const newfilepath = path.join(__dirname,newUpdatedfilename)

      const renamefile = fs.renameSync(filename,newfilepath)
      console.log(renamefile);