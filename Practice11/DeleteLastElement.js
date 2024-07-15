let arr = [32, 12, 42, 4, 2, 23, 2, 32, 3, 23, 4];
let arry = arr.slice();
console.log("Delete last is ", arry.pop());

console.log("Delete First is ", arry.shift());



// 2nd 
arr.length = arr.length - 1;
console.log("--LAST ELEMENT DELETE--", arr);

// 3rd 
arr.splice(arr.length - 1, 1);
console.log("LAst element delete ", arr)