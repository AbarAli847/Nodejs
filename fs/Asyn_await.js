const fs = require("fs/promises");

const path = require("path");

const filename = "Await.txt";
const filepath = path.join(__dirname, filename);

// __________________________________________________________________

//! write file through Asyn/Await by using promises


const writeFile  = async ()=>{
    try {
      await fs.writeFile(filepath,"Abrar Ali Engineer",'utf-8')
         console.log("your file has created Successfully!")
    } catch (error) {
          console.error(error)
    }
}

writeFile();


// __________________________________________________________________

//! read file through Asyn/Await by using promises

const readfileexample = async () => {
    try {
     const res = await fs.readFile(filepath,'utf-8')
            console.log(res)
    } catch (error) {
         console.error(error)
    }
}

readfileexample();


// _____________________________________________________________________
//! update  file through Asyn/Await by using promises

// const updatefile = async () => {
//     try {
//        await fs.appendFile(filepath,"\nI'm Software Engineer",'utf-8')
//     console.log('data has Updated!')
//     } catch (error) {
//          console.error(error)
//     }
// }

// updatefile();

// ______________________________________________________________________

//! delete file through Asyn/Await by using promises
   
// const deletefile = () => {
//     try {
//         fs.unlink(filepath)
//         console.log('file successfully deleted')        
//     } catch (error) {
//           console.error("error deleting file:",error.message);
          
//     }
// }
// deletefile();