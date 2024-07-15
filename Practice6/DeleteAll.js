let arr = [32, 23, 34, 23, 123, 32, 4, 134, 341, 42, 14142, 24];
console.log(arr)
for (let i = arr.length - 1; i >= 0; i--) {
  delete arr[i]
}
console.log(arr);