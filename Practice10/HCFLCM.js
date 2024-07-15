let a = 43, b = 42, c = 45;
let n1 = a, n2 = b, n3 = c;
while (b != 0) {
  let temp = b;
  b = a % b;
  a = temp;
}

console.log("HCF is ", a)
lcm = (n1 * n2) / a;
console.log("LCM is ", lcm)

// from array;
let arr = [12, 33, 48]; // h=12,l=24
let aa = arr[0]  //12
for (let i = 1; i < arr.length; i++) {
  let bb = arr[i] //33  12  0
  while (bb) {
    [aa, bb] = [aa, aa % bb]
  }
}
console.log("HCF      is ", aa)


// let arr = [1, 2, 4, 6, 8]; // h=12,l=24
// let h = 0;
// for (let i = 0; i < arr.length; i++) {
//   while (arr[i + 1] !== 0) {
//     let temp = arr[i + 1];
//     arr[i + 1] = arr[i] % arr[i + 1];
//     arr[i] = temp;
//     h = arr[i]
//   }
//   console.log("3894")
// }
// console.log("HCF      is ", h)



// ---------------------------------------------------------