// array ka sbse min, sbse max no. find karo

let arr = [12, 98, 6, 5, 89, 654, 6];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(`Minimum value of array ${min}`);


/** check */
let minVal = arr.sort((a, b) => a - b); //sort() by default  string pr kam krta hai, no k liye a-b
console.log("sorted  ", minVal)
console.log("Minimum val ---------- ", minVal[0])
console.log("Max val ------------ ", minVal[arr.length - 1]);

// another way
let num = [12, 34, 54, 65, 32, 2, 322];
let MinValue = Math.min(...num);
let MaxValue = Math.max(...num);
console.log("Min and Max value is ", MinValue, " ", MaxValue)


let ary = [12, 87, 65, 99, 37, 97];
let max = ary[0];
for (let i = 0; i < ary.length; i++) {
  if (max < ary[i]) {
    max = ary[i]
  }
}
console.log("Max value of array  is  ", max)



// ----  ulta loop chala ke

let ary2 = [12, 87, 65, 99, 37, 97];
let max2 = ary2[ary2.length - 1];
for (let i = ary2.length - 1; i > 0; i--) {
  if (max < ary2[i]) {
    max = ary2[i]
  }
}
console.log("Max value of array  is  ", max)

