let num = [10, 20, 30, 40, 50];
console.log("Original Array is ", num)

console.log("Reverse array")

//  1st way
for (let i = num.length; i > 0; i--) {
  console.log(num[i - 1])
}

// 2nd way
let newArr = num.slice().reverse();  // num.slice() creates a new array with the same elements Then reverse it.
console.log("New array in reverse ", newArr)


// 3rd way     ----- Reverse Original Array
let RevArry = num.reverse();
console.log("reverse is ", RevArry);


// 4th way reverse array and store in new array
let arrr = [1, 2, 3, 4, 5]; let revArrr = [];

for (let i = arrr.length - 1; i >= 0; i--) {
  revArrr.push(arrr[i]);
}
console.log("New Rev Array ", revArrr);

// 5th way reverse
let ary = [12, 13, 43];
console.log("rev 5th way")
for (let i = ary.length - 1; i >= 0; i--) {
  console.log(ary[i])
}

// 6th way by unshift() method
let arr = [12, 23, 43, 54, 65, 76, 8, 78, 79];
let REVARR = []
for (let itm of arr) {

  REVARR.unshift(itm);
}
console.log("REv array is ", REVARR)