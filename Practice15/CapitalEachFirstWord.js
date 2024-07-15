let str = "hello gaurav how are you";
let strArr = str.split(' ');
let Cap = []
for (let word of strArr) {
  word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  Cap.push(word)

}
let CapStr = Cap.join(' ')
console.log("Each word capital ", CapStr)