var os = require("os");

console.log('Architecture ', os.arch());
console.log('Number of cpus ', JSON.stringify(os.cpus()));
console.log('free memory ', os.freemem());
console.log('home directory ', os.homedir());
console.log('network interfaces ', JSON.stringify(os.networkInterfaces()));
console.log('platform ', os.platform());
console.log('release ', os.release());
console.log('temp directory ', os.tmpdir());
console.log('total memory', os.totalmem());
console.log('type ', os.type());
console.log('uptime ', os.uptime());