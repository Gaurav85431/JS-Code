let str = "hello gaurav how are you";
let strAr = str.split(' ').join('').split('');
let unique = new Set(strAr);
let uniqueArr = Array.from(unique);
let uniqueArrStr = uniqueArr.join('');
console.log('Remove Duplicate ', uniqueArrStr);


// Ye apne se banaye check ki ye shi hai ya nhi
let duplicate = new Set();
let unq = new Set();
for (let itm of strAr) {
  if (unq.has(itm)) {
    duplicate.add(itm);
  }
  else {
    unq.add(itm)
  }
}
console.log("Duplicate is ", duplicate);
console.log("Unique or removed duplicate ", unq)