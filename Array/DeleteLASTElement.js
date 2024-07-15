//  Delete Last Element From Array:-

// 1st way:-
let arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr);



// 2nd way--
let arr2 = [1, 2, 3, 4, 5];
// arr2.splice(-1, 1); //splice se last index wala element ko remove karne ke liye -1 likhte hia.
arr2.splice(arr2.length - 1, 1);
console.log(arr2);


// 3rd way--
let arr3 = [1, 2, 3, 4, 5];
arr3.length = arr3.length - 1;
console.log(arr3);

// Delete first
let y = [12, 15, 48, 9, 59]
console.log('delete  first ', y.shift());
console.log(" array with deleted 1st element ", y)

let x = [12, 15, 48, 9, 59]
for (let i = 0; i < x.length - 1; i++) { //-1 bcz age x[i+1] kr rhe hai
  x[i] = x[i + 1]
}
x.pop(); //last element bcha hai usko remove kar denge
console.log(`remove fisrt ${x}`)
console.log(Array.from(x))