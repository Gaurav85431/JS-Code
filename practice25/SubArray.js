let arr = [23, 34, 35, 4, 54, 64, 65, 64, 54, 543, 53, 54, 543, 54, , 5, 64, 65, 65, 65, 65,];
let subArr1 = arr.slice(0, 4);
let subArr2 = arr.slice(4, 3);// es case me [] aayeaga.
let subArr3 = arr.slice(2, 7);
let subArr4 = arr.slice(3,);
console.log("Subarray is ");
console.log("1st ", subArr1);
console.log("2nd ", subArr2);
console.log("3rd ", subArr3);
console.log("4th ", subArr4)



let index = [1, 3, 4, 6, 7, 5, 15, 6];
let SubArr = index.map((itm) => {
  return arr[itm];
})
console.log("Sub array is ", SubArr);