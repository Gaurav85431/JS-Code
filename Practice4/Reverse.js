let arr = [12, 32, 43, 54, 4, 323, 23, 31, 56];
let Reverse = arr.slice().reverse();
console.log("Reverse is ", Reverse)



let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i])
}
console.log(rev)

let reverse = [];
for (let i = arr.length; i > 0; i--) {
  reverse.push(arr[i - 1])
}
console.log(reverse)