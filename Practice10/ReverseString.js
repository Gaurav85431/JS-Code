let str = "hello"
let strAr = str.split('');
let rev = [];
for (let i = strAr.length - 1; i >= 0; i--) {
  rev.push(strAr[i])
}
console.log(rev.join(''))