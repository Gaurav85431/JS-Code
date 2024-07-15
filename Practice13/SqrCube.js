let num = 32;
let numSqr = num * num;
let numSqr2 = Math.pow(num, 2);
let numSqr3 = num ** 2;
console.log(`${num} :${numSqr} :${numSqr2}: ${numSqr3}`)

let numCube = num * num * num;
let numCube2 = num ** 3;
let numCube3 = Math.pow(num, 3);
console.log(`${num}: ${numCube} :${numCube2} :${numCube3}`);


let SqRoot = Math.sqrt(numSqr);
let CbRoot = Math.cbrt(numCube);
console.log(`${numCube}:${CbRoot}  :: ${numSqr}:${SqRoot}`)