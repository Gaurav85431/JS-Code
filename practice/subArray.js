let arr = [23, 43, 5, 65, 54, 23, 54, 6, 4, 54, 43, 24, 2];
let subArray = arr.slice(1, 5);
let subArray2 = arr.slice(6, 34);
console.log("sub array 1 and 2 ", subArray, "    ", subArray2)


// subarray 2nd way
let SubAr = []
for (let i = 0; i < 4; i++) {
  SubAr.push(arr[i])
  console.log(arr[i])
}
console.log("Sub array is ", SubAr)


// subarray 2nd way
let SubAr2 = []
let ArrLstIndx = 44;
if (ArrLstIndx < arr.length) {

  for (let i = 0; i < ArrLstIndx; i++) {
    SubAr2.push(arr[i])
    console.log(arr[i])
  }
  console.log("Sub array is ", SubAr2)
}
else {
  console.log("More than aray length")
}



// 2nd way
let index = [1, 3, 3, 5, 42, , 'g', 2, 6];//duplicate and not index also check
let subArr = index.map((itm) => arr[itm]); //kispe map karna hai. i.e. index per 
console.log("Sub Array is ", subArr);

let i = [1, 32, 2];
let subAr = i.map((itm) => arr[itm]);
console.log("Sub Array is ", subAr); // [ 43, undefined, 5 ]

let ind = [1, , 2, 3];
let subAry = ind.map((itm) => arr[itm]);
console.log("Sub Array is ", subAry);// [ 43, <1 empty item>, 5, 65 ]

let indx = [1, 'g', 2];
let subArry = indx.map((itm) => arr[itm]);
console.log("Sub Array is ", subArry); // [ 43, undefined, 5 ]

let indxx = [1, 'A' - 60, 2];
let subAray = indxx.map((itm) => arr[itm]);
console.log("SUb array is ", subAray)  //[ 43, undefined, 5 ]

let indexx = [1, 4 - 2, 3];
let subArrr = indexx.map((itm) => arr[itm]);
console.log("SUb array  is ", subArrr) // [ 43, 5, 65 ]
