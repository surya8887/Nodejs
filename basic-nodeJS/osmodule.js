const os = require('os');
// Get the operating system platform
console.log('Operating System Platform:', os.platform());

// Get the CPU information
console.log("CPU Information: ", os.cpus());

// Get the CPU architecture
console.log('CPU Architecture:', os.arch());

// Get the total memory in bytes
console.log('Total Memory (bytes):', os.totalmem());


