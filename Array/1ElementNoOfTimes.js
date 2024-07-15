let arr = [12, 23, 43, 54, 12, 12, 23, 43, 12, 12];
let arr2 = arr.slice();

let findItem = 12;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (findItem == arr[i]) {
    count++
  }
}

console.log(`Element ${findItem} occur at ${count} times`);