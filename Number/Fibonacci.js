// Fibonacci Series
let a = 0, c;
let b = 1;
let term = 5;

console.log("fibonacci serier")

for (let i = 0; i < term; i++) {
  console.log(" ", a); //0 
  c = a + b; //0+1
  a = b;  // a=1
  b = c;  // b=c=0+1
}

// -----------------------------------------------------------------------------------------------------------
// Fibonacci Series ko ek array me store kar  Rahen hai fir us array ko print kara denge;

// 0,1,1,2,3,5,8,13.................   it will also store in array
let f = 0;
let s = 1;
let terms = 10;
let arr = [];
for (let i = 0; i < terms; i++) {
  console.log(" ", f);
  arr.push(f);
  let c = f + s;
  f = s;
  s = c;
}

console.log("Arry me fibonacci  is  ", arr);