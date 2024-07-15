let arr = [2, 4, 53, 6, 64, 4, 6, 46, 64, 3, 43, 3, 446, 4, 657, 75, 46, 654, 5, 53];
let occurs = {};
for (let i = 0; i < arr.length; i++) {
  if (occurs[i] === arr[i]) {
    occurs[i]++
  }
  else {
    occurs = 1;
  }
}
console.log("Occurance is ", occurs)

let occur = {}
for (let itm of arr) {
  if (occur[itm]) {
    occur[itm]++;
  }
  else {
    occur[itm] = 1;
  }
}
console.log("Occurance is ", occur)