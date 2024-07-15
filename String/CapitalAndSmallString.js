let str = "Hello Gaurv";

console.log("Capital is ", str.toUpperCase());
console.log("Small is ", str.toLowerCase());



// without function:-   Small
let result = "";
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char >= 'A' && char <= 'Z') //capital character
  {
    char = String.fromCharCode(char.charCodeAt(0) + 32);
  }
  /*
  Yeh if condition check karti hai ki char uppercase letter hai ya nahi.
'A' ka ASCII value 65 hai aur 'Z' ka 90.
char >= 'A' && char <= 'Z' ka matlab hai ki character A se Z ke beech me hai, yani uppercase letter hai.
Agar char uppercase letter hai, toh charCodeAt(0) function se uska ASCII value liya jaata hai.
32 ko add karke, uska corresponding lowercase letter milta hai kyunki ASCII table me A aur a ke beech difference 32 ka hai.
String.fromCharCode function se, ASCII value ko phir se character me convert kiya jaata hai.*/



  result = result + char;
}
console.log("Small is  using without function ", result);





// Capital without function:-

let strg = "KALabcdef ghijk";  // input string
let Capital = "";
for (let i = 0; i < strg.length; i++) {
  let char = strg[i];
  if (char >= 'a' && char <= 'z') { // lowercase character check
    char = String.fromCharCode(char.charCodeAt(0) - 32); // uppercase conversion
  }
  Capital = Capital + char;
}
console.log("Capital without function ", Capital);


///////////////////////////
let strAr = str.split('');
let res = "";
for (let char of strAr) {
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32)
  }
  res = res + char;
}
console.log("Capital is ", res)