var os=require('os');
console.log("platform="+os.platform);
console.log("userInfo="+os.userInfo);
console.log("free mem="+os.freemem);
console.log("hostdir="+os.homedir);

var path=require('path');
var str="C:\Users\Brijesh\Desktop\brijesh\Mar-12\prog1.html";
console.log("dirname="+path.dirname(str));
console.log("extension="+path.extname(str));
console.log("basename="+path.basename(str));