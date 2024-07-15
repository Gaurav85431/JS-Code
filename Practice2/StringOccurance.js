// let strar = "hello gaurav how are you";
let str = "hello gaurav how are you";
// yahan per split na lagayen
let strar = str.split('')
// yani ki str aur strar pr result de rhah hai 
console.log(strar)

let occur = {};
for (let itm of strar) {

  if (occur[itm]) {
    occur[itm] = occur[itm] + 1;
  }
  else {
    occur[itm] = 1
  }
}
console.log(occur)