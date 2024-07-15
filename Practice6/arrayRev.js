let arr = [23, 4, 35, 46, 57, 577, 57, 4];
let revArr = []
for (let i = arr.length - 1; i >= 0; i--) {
  revArr.push(arr[i])
}
console.log(revArr)

let reverses = arr.slice().reverse();
console.log(reverses)


