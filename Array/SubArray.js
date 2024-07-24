let arr = [12, 23, 43, 54, 56, 54, 43];

let subArray1 = arr.slice(0, 4);
let subArray2 = arr.slice(2); //2 se last tak
let subArr2 = arr.slice(4, 3);// es case me [] aayeaga.

console.log("Sub arrays ", subArray1, "  ", subArray2);


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




// 2nd way-----
let array = [1, 2, 3, 4, 5];
let subArray = array.filter(num => num > 2);
console.log("2nd way", subArray); // Output: [3, 4, 5]



// 3rd way-----
let arry = [1, 2, 3, 4, 5];
let subArry = [];
arry.forEach(num => {// ye arry pr iterate krke num>2 wala value ko subArry[] me de dega
  if (num > 2) {
    subArry.push(num);
  }
});
console.log("3rd way", subArry); // Output: [3, 4, 5]



// 4th way----------
let aray = [1, 2, 3, 4, 5];
let indices = [1, 3, 4]; // indices i.e. 1st, 3rd,5th index to include in the subarray
let subAray = indices.map(index => aray[index]);
console.log("4 way", subAray); // Output: [2, 4, 5]



// 5th way---------
let array1 = [1, 2, 3, 4, 5];
let subArrays1 = array1.reduce((acc, num) => {
  if (num > 2) {
    acc.push(num);
  }
  return acc;
}, []);
console.log("5 way", subArrays1); // Output: [3, 4, 5]



// 6th way---------
let array3 = [1, 2, 3, 4, 5, 12, 14, 15, 8, 6, 10];
let subArray3 = array3.map(num => num).filter(num => num > 5);
console.log("6 way", subArray3);


// INTERVIEW QUESTION--------
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
let subArry1 = indx.map((itm) => arr[itm]);
console.log("Sub Array is ", subArry1); // [ 43, undefined, 5 ]

let indxx = [1, 'A' - 60, 2];
let subAray2 = indxx.map((itm) => arr[itm]);
console.log("SUb array is ", subAray2)  //[ 43, undefined, 5 ]

let indexx = [1, 4 - 2, 3];
let subArrr = indexx.map((itm) => arr[itm]);
console.log("SUb array  is ", subArrr) // [ 43, 5, 65 ]
