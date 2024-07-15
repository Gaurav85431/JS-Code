let str = "helloo how are your guy!!!!"
let strArr = str.split(' ');
for (let i = 0; i < strArr.length; i++) {
  strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase();
}
let strArrString = strArr.join(' ');
console.log("String of each word capital ", strArrString);