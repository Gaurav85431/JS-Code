let str = "Hello, Gaurav how are you?";
// let strArr = str.split(' ').join(' ') //=> No change.
let strArr = str.split(' ')
for (let i = 0; i < strArr.length; i++) {

  strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase();

}
let FirstCapital = strArr.join(' ');
console.log(FirstCapital)