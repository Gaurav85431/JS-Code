let str = "Hello";
console.log("Cap ", str.toUpperCase());
console.log("Sml ", str.toLowerCase());


let strAr = str.split('')
let res = ""
for (let char of strAr) {
  if (char >= 'a' && char <= 'z') {

    char = String.fromCharCode(char.charCodeAt(0) - 32);
  }
  res = res + char;
}
console.log("Capital is ", res)


let smll = "";
for (let i = 0; i < strAr.length; i++) {
  let char = strAr[i];
  if (char >= 'A' & char <= 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32);
  }
  smll = smll + char;
}
console.log("Small is ", smll)