const path = require("path")

console.log(__dirname)
console.log(__filename)


const filepath = path.join("folder", "student", "data.txt")
console.log(filepath)


const parsedata = path.parse(filepath)

const resolvedata = path.resolve(filepath)
const extname  = path.extname(filepath) 
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)
// const sep = path.sep(filepath)

console.log({parsedata, resolvedata,extname,basename,dirname, separator:path.sep })