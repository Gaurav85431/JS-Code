let str = "hello gaurav how are you";
let strAr = str.split(' ');
let FCap = []
for (let word of strAr) {
  word = word.charAt(0).toUpperCase() + word.slice(1);
  FCap.push(word)
}
let FCapString = FCap.join(' ');
console.log("first capital ", FCapString)



let res = "";
for (let word of strAr) {
  word = word.charAt(0).toUpperCase() + word.slice(1);
  res = res + " " + word;
}
console.log("First capital is ,,", res)