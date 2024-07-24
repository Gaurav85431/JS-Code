let num = 157;
let ld, rev = 0;
while (num > 0) {
  ld = num % 10;
  rev = rev * 10 + ld;
  num = Math.floor(num / 10)
}
console.log("Reverse is ", rev)



// Array Reverse
let arr = [23, 23, 34, 5, 45, 56, 34, 67, 6, 8]
let Rev = []
for (let i = 0; i < arr.length; i++) {
  Rev.unshift(arr[i])
}
console.log("Reverse is ", Rev)