let arr = [12, 23, 65, 43, 56, 64];
let subArr = arr.slice(1, 4);
let subArr2 = arr.slice(3, 5);
console.log("1st and 2nd sub array ", subArr, " ", subArr2)


// subarray 2nd way
let SubAr = [];
let ArrLstIndx = 44;
if (ArrLstIndx < arr.length) {

  for (let i = 0; i < ArrLstIndx; i++) {
    SubAr.push(arr[i])
    console.log(arr[i])
  }
  console.log("Sub array is ", SubAr)
}
else {
  console.log("More than aray length")
}


// 3rd way
let index = [1, 3, 4];
let MySubArray = index.map((ind) => arr[ind]);
console.log("3rd way sub array  ", MySubArray);