let arr = [12, 23, 34, 54, 45, 56, 67, 87, 894, 54, 45, 56, 67, 87, 894, 54, 45, 56, 67, 87, 894, 54, 45, 56, 67, 87, 894, 54, 45, 56, 67, 87, 894, 54, 45, 56, 67, 87, 894, 54, 45, 56, 67, 87, 89]
let occ = {}
for (let itm of arr) {
  if (occ[itm]) {
    occ[itm]++
  }
  else {
    occ[itm] = 1
  }
}
console.log("Occurance is ", occ)


let num = 23, c = 0;
for (let itm of arr) {
  if (itm === num) {
    c++
  }
}
console.log(`${num} is occur at ${c} times`)