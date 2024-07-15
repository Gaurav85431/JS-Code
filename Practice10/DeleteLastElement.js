let arr = [23, 4, 35, 4, 646, 75, 5, 75, 758, 8, 68, 7, 656, 46, 65];
console.log("Last Delete is ", arr.pop());

console.log("First Element delete is ", delete arr[0]);





// Last delete -(length reduce)
let arrr = arr.slice();
arrr.length = arrr.length - 1;
console.log("Array ka length 1 kam ", arrr)//first element hata


// Splice() method se
let arrr2 = arr.slice();
let remove = arrr2.splice(arr.length - 1, 1);
console.log("Array ka ", arrr2)


//  delete first
let arrr3 = arr.slice();
let DelFirst = arrr3.shift();
console.log("First ele del ", arrr3)

// delete last 
let arrr4 = arr.slice();
let DelLast = arrr4.pop();
console.log("Delete Last is ", DelLast)


// Last Element delete ------
let MyArr = arr.slice();
for (let i = 0; i < MyArr.length; i++) {
  MyArr[i] = MyArr[i + 1]
}
MyArr.pop();
console.log(MyArr)