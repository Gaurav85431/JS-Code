let str = 'hello';
let CapStr = str.toUpperCase();
let SmlStr = str.toLowerCase();

console.log("Capital String is ", CapStr);
console.log("Small string is ", SmlStr)


let strAr = str.split('');
let res = ''
for (let i = 0; i < strAr.length; i++) {
  let char = strAr[i];
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32);
  }
  res = res + char;
}
console.log("Capital is ", res)




let firstCap = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log("first cap is ", firstCap)

let firstchar = str.charAt(0);


console.log("fchar ", firstchar)
let FirstCp = firstchar + str.slice(1).toLowerCase();
console.log("first capital is ", FirstCp)