let str = "hellogaurav how are you hi guyz how are you i am fine an d whats about you what are you doin hii guyz";
let strAr = str.split(' ').join('').split('');
// console.log("-- ===   ", strAr)
let occur = {};
for (let itm of strAr) {
  if (occur[itm]) {
    occur[itm]++
  }
  else {
    occur[itm] = 1;
  }
}
console.log("Occurance is ", occur)