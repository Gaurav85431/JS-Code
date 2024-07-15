let arr = [32, 4, 2, 1, 4, 53, 54, 6, 7, 57, 4, 3, 4, 2];
let AscSortArr = arr.slice().sort((a, b) => a - b);
let DscSortArr = arr.slice().sort((a, b) => b - a);
let NthIndex = 51;
if (NthIndex > arr.length) {
  console.log("Nth index is large than the array size")
}
else {
  console.log("Nth max and min ", AscSortArr[NthIndex - 1], " ", DscSortArr[NthIndex - 1]);
  console.log(AscSortArr);
  console.log(DscSortArr)
}