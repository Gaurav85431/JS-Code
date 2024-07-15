let arr = [32, 12, 42, 4, 2, 23, 2, 32, 3, 23, 4];
let time = {};
let c;

// forEach se
arr.forEach((itm) => {
  if (time[itm]) {
    time[itm]++;
  }
  else {
    time[itm] = 1
  }
})
console.log(" kon elemnet kitna bar aya ", time)

// forOf se
let occurance = {};
for (let val of arr) {
  if (occurance[val]) {
    occurance[val]++;
  }
  else {
    occurance[val] = 1;
  }
}
console.log("OCcurance of element is ", occurance)

// for looop se
let occur = {};
for (let i = 0; i < arr.length; i++) {
  let val = arr[i];
  if (occur[val] == arr[i]) {
    occur[val]++
  }
  else {
    occur[val] = 1
  }
}
console.log("occur ", occur)