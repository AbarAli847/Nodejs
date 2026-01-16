const os = require("os")

//   user ki information get karne ke lia 
console.log("platform", os.platform())
console.log("user", os.userInfo())


//  2. return tha CPU architecture
 console.log("Architecture", os.arch())

//  3. get the free memory 
//    return the free memory in our system
console.log('free Memory', os.freemem(),"bytes")

//  4. get the total system memory

console.log("total Memory", os.totalmem(),"bytes")

// 5.get the system uptime
console.log("sytem Uptime",os.uptime(),"Seconds")

// 6. get the home directory
console.log("Home",os.homedir())

// 7.get the  host name 
console.log("hostname",os.hostname())

// 8.get the cpu information
console.log("CPU",os.cpus())
