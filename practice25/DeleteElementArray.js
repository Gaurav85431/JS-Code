let arr = [12, 32, 4, 54, 45, 56, 7, 6, 879, 96, 5, 65, 45, 34, 46, 678]
delete arr[0];
console.log(arr)


arr.pop();
console.log("-last deleted  ", arr)

arr.shift();
console.log("-first deleted ", arr)

arr.splice(4, 1);
console.log("4th index wala deleted ", arr);

arr.splice(4, 2, [23, 34]);
console.log("4th index pr 2 value add ", arr)

arr.splice(2, 2, 43, 34, 3535, 335, 35);
console.log("2nd index pr 2 delete aur 5 add ", arr)