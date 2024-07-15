let arr = [4, 54, 46, 67, 87, 56, 56, 45, 34, 23, 2, 12, 12, 32, 5, 64, 75, 86, 5];
delete arr[0];
console.log(arr);


let arr2 = [54, 46, 67, 87, 56, 56, 45, 34, 23, 2, 12, 12, 32, 5,]
// arr2.splice(2, 1)
// arr2.splice(2, 1, 23, 23);
arr2.splice(2, 1, [23, 23]);
console.log(arr2)