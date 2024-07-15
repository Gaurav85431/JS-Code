let num = [21, 342, 23, 12, 324, 23, 12, 1];
// let asc = num.slice().reverse();// sort() use na ki reverse; for sort in ascending

let asc = num.slice().sort((a, b) => a - b)
console.log("asc ", asc)

let des = num.slice().sort((a, b) => b - a);
console.log("des  ", des)

// ------------------  asc
let num2 = [21, 342, 23, 12, 324, 23, 12, 1];
for (let i = 0; i < num2.length; i++) {
  for (let j = 0; j < num2.length - i - 1; j++) {
    if (num2[j] > num2[j + 1]) {
      let temp = num2[j];
      num2[j] = num2[j + 1];
      num2[j + 1] = temp
    }
  }
}
console.log("asc manul", num2)

// ---------------------  dsc
let newArr = num     // same memory location of num and newArr. Changes reflect to newArr and num
let newArr2 = num.slice() // Different memory locn of num and newArr2. Changes reflect to only one in which we prform changes.
console.log(newArr, "*****", newArr2)

let numx = num.slice();
console.log("numx  ", numx)

// Descending Manually
for (let i = 0; i < numx.length; i++) {
  for (let j = 0; j < numx.length - i - 1; j++) {
    if (numx[j] < numx[j + 1]) {
      let temp = numx[j];
      numx[j] = numx[j + 1];
      numx[j + 1] = temp
    }
  }
}
console.log('Descending array is ', numx)