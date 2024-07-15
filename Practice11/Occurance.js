let str = "hello gaurav";
let occur = {};
let strArr = str.split('');
for (let itm of strArr) {
  if (occur[itm]) {
    occur[itm]++;
  }
  else {
    occur[itm] = 1;
  }
}
console.log("Occurance is ", occur)