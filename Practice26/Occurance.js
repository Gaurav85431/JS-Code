let arr = [23, 4, 453, 5, 43, 54, 46, 65, 57, 75, 655435, 53, 78, 54, 6, 75, 76, 5, 46, 64, 65, 46, 46, 46, 5, 45, 68, 79, 80, 86, 56, 46, 56]
let occur = {}
for (let itm of arr) {
  if (occur[itm]) {
    occur[itm]++
  }
  else {
    occur[itm] = 1;
  }
}
console.log("OCcurance is ", occur)