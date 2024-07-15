// Delete element of array:-

// 1st way
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);  // Removes 1 element at index 2
console.log(arr);

// 2nd way
let arr2 = [1, 2, 3, 4, 5];
arrRemove = arr2.filter(e => e !== 3);  // Removes all occurrences of 3
// arrRemove = arr2.filter(e => e > 3);  // Removes all occurrences of 3
console.log(arrRemove);

// 3rd way
let arr3 = [1, 2, 3, 4, 5];
delete arr3[2];  // Removes the element at index 2 but leaves a hole
console.log(arr3); 
