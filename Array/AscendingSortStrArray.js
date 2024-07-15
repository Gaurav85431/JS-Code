let data = ['a', 'e', 'b', 't', 'x', 'f', 'w', 'g', 's', 'p'];

// Ascending order
let ascending = data.slice().sort();// yadi slice() na use kare to ye original array ko hi sort karega
console.log("Array in ascending order:", ascending);

/*    Array me ya bina array ke print hoga data
// console.log(`data is ${data}`)  //data is a,e,b,t,x,f,w,g,s,p
console.log("data is (without template literals) ", data)  // data is [a,e,b,t,x,f,w,g,s,p]
console.log(`data is [${data}]`)   // data is [a,e,b,t,x,f,w,g,s,p]
*/



// Descending order
let descending = data.slice().sort().reverse();
console.log("Array in descending order:", descending);




// Ascending order  manually---------  bubble sort
// let chars = ['d', 'a', 'c', 'b', 'e'];
let chars = [1, 5, 4, 6, 3];

for (let i = 0; i < chars.length; i++) { // Outer loop for passes
  for (let j = 0; j < chars.length - i - 1; j++) { // -i-1 bcz ki j 2nd last tk chle, j+1 last tak
    if (chars[j] > chars[j + 1]) { // Compare adjacent elements
      // Swap chars[j] and chars[j + 1]
      let temp = chars[j];
      chars[j] = chars[j + 1];
      chars[j + 1] = temp;
    }
  }
}
console.log("Ascending Order manually ", chars); // Output: ['a', 'b', 'c', 'd', 'e']



// Descending Oder me sort
let myArray = ['a', 'e', 'o', 'u', 'i'];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray.length - i - 1; j++) {
    if (myArray[j] < myArray[j + 1]) {
      let temp = myArray[j + 1];
      myArray[j + 1] = myArray[j];
      myArray[j] = temp;
    }
  }
}
console.log("Descending array  manually", myArray)






// Original array me change na ho new array me chage so i.e. descending ho jaye. 
let myArr = ['a', 'e', 'o', 'u', 'i'];

// Create a copy of myArr in newArr
let newArr = myArr.slice();

// Bubble sort in descending order
for (let i = 0; i < newArr.length; i++) {
  for (let j = 0; j < newArr.length - i - 1; j++) {
    if (newArr[j] < newArr[j + 1]) {
      let temp = newArr[j + 1];
      newArr[j + 1] = newArr[j];
      newArr[j] = temp;
    }
  }
}
console.log("Original array:", myArr);
console.log("Sorted array in descending order:", newArr); 
