let arr = [12, 23, 34, 54, 56, 76, 78, 89, 90];
let Rev = arr.slice().reverse();
console.log("Reverse is ", Rev);




let arrr = [12, 23, 34, 79, 54, 56, 52, 78, 75];
let RevArr = []
for (let i = arrr.length - 1; i >= 0; i--) {
  RevArr.push(arrr[i]);
}
console.log("Reverse array is ", RevArr);


let RevAr = []
for (let itm of arrr) {
  RevAr.unshift(itm);
}
console.log("Rev array is ", RevAr)