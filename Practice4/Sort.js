let arr = [12, 34, 23, 34, 235, 335, 2, 23, 4, 24, 243223, 24];
let DSort = arr.slice().sort((a, b) => b - a)
let ASort = arr.slice().sort((a, b) => a - b)

console.log(`Ascending and descending sort is [${ASort}] and ${DSort}`)
console.log(ASort)



let arr2 = arr.slice();
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2.length - i - 1; j++) {
    if (arr2[j] > arr2[j + 1]) {
      let temp = arr2[j];
      arr2[j] = arr2[j + 1];
      arr2[j + 1] = temp;
    }
  }
}
console.log("Ascending order sort ", arr2)



let arr3 = arr.slice();
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length - i - 1; j++) {
    if (arr3[j] < arr3[j + 1]) {
      let temp = arr3[j];
      arr3[j] = arr3[j + 1];
      arr3[j + 1] = temp;
    }
  }
}
console.log("Descending order sorted is ", arr3)






let chars = ['e', 't', 'p', 'k', 'g', 'w'];
let AscSortChar = chars.slice().sort();
let DescSortChar = chars.slice().sort().reverse();
console.log(`Asc and Desc sorted is [${AscSortChar}]   and [${DescSortChar}]`)

let charr = chars.slice();
for (let i = 0; i < charr; i++) {
  for (let j = 0; j < charr.length - i - 1; j++) {
    if (charr[j] > charr[j + 1]) {
      let temp = charr[j];
      charr[j] = charr[j + 1];
      charr[j + 1] = temp;
    }
  }
}
console.log("Asc ", charr);

let charrs = chars.slice();
for (let i = 0; i < charrs.length; i++) {
  for (let j = 0; j < charr.length - i - 1; j++) {
    if (charrs[j] < charrs[j + 1]) {
      let temp = charrs[j + 1];
      charrs[j + 1] = charrs[j];
      charrs[j] = temp;
    }
  }
}
console.log("Desc ", charrs)