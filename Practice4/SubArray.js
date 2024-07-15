let arr = [2, 23, 23, 1, 34, 64, 35, 3, 42, 22, 23, 2, 4, 2, 42];
let subarray = arr.slice(1, 4);
console.log("subarray is ", subarray)


let index = [1, 3, 5, 6, 9];
let subarr = [];
index.forEach((itm) => {
  subarr.push(arr[itm])

});
console.log(subarr)



let SubAr = [];
for (let i = 0; i < 4; i++) {
  SubAr.push(arr[i])
}
console.log(SubAr)