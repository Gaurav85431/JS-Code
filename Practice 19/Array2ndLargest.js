let arr = [12, 32, 4, 54, 56, 67];
if (arr.length < 1) {
  console.log("No such itm found")
}
else {

  let first = -Infinity;
  let second = -Infinity;
  for (let itm of arr) {
    if (itm > first) {
      second = first;
      first = itm;
    }
    else if (itm > second && itm !== first) {
      second = itm;
    }
  }
  let SecLarge = (second !== -Infinity) ? second : "No 2nd largest found"

  console.log("2nd largest ", SecLarge)

}


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
let Max = arrr[0];
for (let i = 0; i < arrr.length; i++) {
  if (Max < arrr[i]) {
    Max = arrr[i]
  }
}
let DelMax = delete arrr[arrr.indexOf(Max)];

let Max2 = arrr[0];
for (let i = 0; i < arrr.length; i++) {
  if (Max2 < arrr[i]) {
    Max2 = arrr[i]
  }
}
console.log("2nd largest is ", Max2)