let str = "hello";
let strArr = str.split('');
let AscSort = strArr.slice().sort();
let DscSort = strArr.slice().sort((a, b) => {
  return b.localeCompare(a);
})
console.log("Asc ", AscSort.join(''));
console.log("Dsc ", DscSort.join(''))

for (let i = 0; i < strArr.length; i++) {
  for (let j = 0; j < strArr.length - i - 1; j++) {
    if (strArr[j] < strArr[j + 1]) {
      let temp = strArr[j];
      strArr[j] = strArr[j + 1];
      strArr[j + 1] = temp;
    }
  }
}
console.log("Descending Sort ", strArr.join(''));


for (let i = 0; i < strArr.length; i++) {
  for (let j = 0; j < strArr.length - i - 1; j++) {
    if (strArr[j] > strArr[j + 1]) {
      let temp = strArr[j];
      strArr[j] = strArr[j + 1];
      strArr[j + 1] = temp;
    }
  }
}
console.log("Ascending Order is ", strArr.join(''))