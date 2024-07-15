let num = [1, 23, 43, 54, 6, 34, 56, 53];
let rev = num.slice().reverse();
console.log("reverse is ", rev)


// Manually reverse array--

let revarr = []
for (let i = num.length; i > 0; i--) {   //i>=0 karenge to i-1 i.e. 0-1 i.e. -1 per undefined hoga.
  console.log(num[i - 1])// print elements of array in rev order

  revarr.push(num[i - 1])
}
console.log("Array in reverse order is ", revarr);

