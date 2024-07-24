let str = "hello gaurav how are you";
let stR = str.split(' ').join('');

let occur = {};
let stRArr = stR.split('');
for (let char of stRArr) {
  if (occur[char]) {
    occur[char]++
  }
  else {
    occur[char] = 1;
  }
}
console.log("String Occurance is ", occur)



let Str = "hello gaurav how are you ek minute to ghar ja tu pata nhi mujhe ye samajh nhi aata mere sath kahe koi club nhi aata muska fir v se muh nhi lagata kyon ki kyon ki one bottle bodka daru mera roj ka na koi mujhko roke na koi mujhko toke";
let StrAr = Str.split(' ')
let char = {};
for (let word of StrAr) {

  if (char[word]) {
    char[word]++
  }
  else {
    char[word] = 1;
  }
}
console.log("Occurance is ", char)