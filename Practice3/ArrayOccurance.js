let arr = [21, 432, 34, 54, 23, 23, 32, 432, 3, 5];
let occur = {};
for (let itm of arr) {
  if (occur[itm]) {
    occur[itm]++;
  }
  else {
    occur[itm] = 1;
  }
}
console.log("Occurance is ", occur)


// 2nd way
let ocr = {}
for (let i = 0; i < arr.length; i++) {
  let itm = arr[i];
  if (ocr[itm]) {
    ocr[itm]++;
  }
  else {
    ocr[itm] = 1;
  }
}
console.log("occurance is ", ocr)