var dns = require('dns');
dns.resolve('www.baidu.com','A',function(err,address){
    console.log(address);
});

dns.lookup('www.microsoft.com',4,function(err,address){
    console.log(address);
});

dns.reverse('23.200.143.77',function(err,domains){
    console.log(domains);
});

var os = require('os');
console.log(os.tmpdir());
console.log(os.hostname());

console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.cpus());
console.log(os.EOL);//换行符

