let str = "hello gaurav how are you";
let strWord = str.split(' ');
let CapitalLtr = [];
for (let word of strWord) {
  word = word.charAt(0).toUpperCase() + word.slice(1);
  CapitalLtr.push(word)
}
let CapitalStr = CapitalLtr.join(' ');
console.log(" Capital String is ", CapitalStr)