let str = 'hello gaurav how are you';
let strArr = str.split(' ');
let words = ''
for (let itm of strArr) {
  console.log("--- ", itm)
  let itms = itm.split('')
  for (let i = itms.length - 1; i >= 0; i--) {
    // console.log("--", itms[i])
    words = words + itms[i];
  }
}
console.log("Word in reverse ", words)

////////////////////////////////////
let sr = "hello";
let st = sr.split('');
let res = ''
for (let i = st.length - 1; i >= 0; i--) {
  res = res + st[i]
}
console.log("REv ", res)


let RevWord = [];
let strArrr = str.split(' ');
for (let i = strArrr.length - 1; i >= 0; i--) {
  RevWord.push(strArrr[i]);
}
let RevWOrdString = RevWord.join(' ');
console.log("Reverse WOrd of array, ", RevWOrdString)