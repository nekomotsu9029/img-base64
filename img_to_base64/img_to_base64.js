var fs = require('fs');

var imageAsBase64 = fs.readFileSync('./out.png', 'base64');

console.log(imageAsBase64)