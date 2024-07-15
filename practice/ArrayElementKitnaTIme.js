let arr = [12, 32, 43, 32, 12, 32, 34, 2343, 5, 23];
let findItem = 32;
let count = 0;


for (let i = 0; i < arr.length; i++) {
  if (arr[i] === findItem) {
    count++;
  }
}
console.log(findItem, 'is  ', count, ' times');