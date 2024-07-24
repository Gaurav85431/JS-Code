let arr = [12, 23, 45, 67];
const Largest = (arr) => {
  if (arr.length < 2) {
    console.log("Min 2 value need")
  }
  let f = -Infinity;
  let s = -Infinity;
  for (let itm of arr) {
    if (itm > f) {
      s = f;
      f = itm;
    }
    else if (itm > s && itm !== f) {
      s = itm;
    }
  }
  let SLar = s !== -Infinity ? s : "NO 2nd largest ";
  console.log("The 2nd Largest is ", SLar);
}
Largest(arr);






// ---------------------------  2nd
let ary = [12, 32, 43, 5, 76, 56, 54, 34, 56, 45];
let f = -Infinity, s = -Infinity;

for (let itm of ary) {
  if (itm > f) {
    s = f;
    f = itm;
  } else if (itm > s && itm < f) {
    s = itm;
  }
}

console.log("2nd largest is ", s);





// 3rd // remove max value from array then find max
let arrr = [12, 32, 43, 5, 76, 56, 54, 34, 56, 45];
let max = arrr[0];

for (let i = 1; i < arrr.length; i++) {
  if (arrr[i] > max) {
    max = arrr[i];
  }
}

let index = arrr.indexOf(max);
if (index !== -1) {
  arrr.splice(index, 1);
}

let max2 = arrr[0];
for (let i = 1; i < arrr.length; i++) {
  if (arrr[i] > max2) {
    max2 = arrr[i];
  }
}

console.log("2nd largest is ", max2);
