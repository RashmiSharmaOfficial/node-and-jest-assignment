var dns = require("dns");
const {hostname} = require("os");
var readline = require("readline-sync")

web1 = readline.question("Website link1 ")
dns.lookup(web1, (err, address, family) => {
    console.log('address', address);
    console.log('family', family);
    console.log('error', err);
})

web2 = readline.question("Website link2 ")
dns.resolve4(web2, (err, addresss) => {
    if(err) throw err;
    console.log(`all the ip address of ${web2}`, JSON.stringify(addresss));

    addresss.forEach((a) => {
        dns.reverse(a, (err, hostname) => {
            if(err) throw err;

            console.log(`ip address ${a} and its hostname ${hostname}`);
        })
    })
})