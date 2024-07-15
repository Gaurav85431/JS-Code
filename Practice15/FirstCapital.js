let str = "hello";
let firstCap = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log("FIrst cap is ", firstCap)



let fChar = str.charAt(0);
if (fChar >= 'a' && fChar <= 'z') {
  fChar = fChar.toUpperCase();
}
let res = fChar + str.slice(1);
console.log("First cap  is  ", res)