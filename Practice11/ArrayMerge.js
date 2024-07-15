let arr = [22, 244, 89, 35, 35, 32, 35, 8, 46, 5456, 75, 6, 5, 74, 654, 35]
let arr1 = arr.slice(0, 5);
let arr2 = arr.slice(5, 11);
let arr3 = arr.slice(11);

console.log("SUB array is ", arr1, " and ", arr3, " and ", arr2)



console.log("Merge is ");
let merge = [...arr1, ...arr2];
console.log(merge)

