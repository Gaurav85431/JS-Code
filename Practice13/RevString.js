let str = "hello";
let rev = str.split('').reverse().join('');
console.log("Rev string is ", rev)


let Rev = [];
for (let i = str.length - 1; i >= 0; i--) {
  Rev.push(str[i]);
}
console.log("rev str is ", Rev.join(''));


