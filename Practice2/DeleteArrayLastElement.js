// -----------------------------LAST ELEMENT DELETE---------------------------------------------------
// Last Element delete
let num = [12, 23, 43, 54, 6, 56, 76, 5];
let arr = num.slice();
arr.length = arr.length - 1;
console.log("After Last element deleted ", arr)


// Dlete last 
let arr2 = num.slice();
let delEle = delete arr2[arr2.length - 1];
console.log("Delted is ", delEle)
arr2.pop(); //otherrwise <empty item> show karta
console.log("After last element deleted 2nd ", arr2);



// delete last 3rd
let arr3 = num.slice();
let delItm = arr3.pop();
console.log("Deletd ", delItm, " itm from array is ", arr3)

// ----------------------------------------FIRST ELEMENT DELETE -------------------------------------------
// Delete FIRST 
let arr4 = num.slice();
let FirstEleDel = arr4.shift();
console.log(FirstEleDel, "  is deleted now array is ", arr4)


// ----------------------------------------DELETE ANY ELEMENT----------------------------------------------
let arr5 = num.slice();
let delItem = arr5.splice(1, 2);
console.log(delItem, " is deleted now array is  ", arr5)

// ----------------------------------------Delete se----------------------------------------------------
let arr6 = num.slice();
delete arr6[3];
arr6.splice(3, 1); // otherwise  [ 12, 23, 43, <1 empty item>, 6, 56, 76, 5 ]
console.log('2nd index wala deleted ke bad ', arr6)