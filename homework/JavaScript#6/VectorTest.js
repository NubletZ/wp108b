const Vec = require('./vector')

var v1 = new Vec(1,2,3);
var v2 = new Vec(1,1,1);
console.log('v1.add(v2) = ', v1.add(v2));
console.log('v1.sub(v2) = ', v1.sub(v2));
console.log('v1.dot(v2) = ', v1.dot(v2));
console.log('v1.neg() = ', v1.neg());