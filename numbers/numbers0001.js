// console.log() == l()
var l = function(some){ console.log(some)};

// return true
let b = (0.1 + 0.2 == 0.30000000000000004);
console.log(b)

let mathSin = Math.sin(3.5);
console.log(mathSin);
let cirR = 3.03;
let circumference = 2 * Math.PI * cirR;
console.log(circumference);

l(cirR);


l(parseFloat("1.01"));
l(parseInt("22",8));
l(parseInt("0101",10));


