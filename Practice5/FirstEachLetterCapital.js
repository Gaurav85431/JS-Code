let str = "hello gaurav how are your";
let strArr = str.split(' ');
console.log(strArr);
let cap, capital = [];
for (let itm of strArr) {
  for (let i = 0; i < itm.length; i++) {
    cap = itm[0].toUpperCase() + itm.slice(1);
  }
  capital.push(cap);
}
console.log("Capital is ", capital)
console.log("Capital String is ", capital.join(' '))



// 2nd way-
let word = str.split(' ');
for (let i = 0; i < word.length; i++) {
  word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
}
let EachWordCapital = word.join(' ')
console.log("Each ka first letter capital is ", EachWordCapital)