let arr = [32, 23, 4, 35, 354, 65, 7, 489, 865, 645, 54, 43];
let subArr = arr.slice(0, 5);
console.log("SUbarray is ", subArr)



let index = [3, 2, 5, 2, 3, 1];
let SubArrr = index.map((itm) => {   // map()  new array return krta hai.
  return arr[itm]
})
console.log(SubArrr)



let mySubArr = [];
for (let i = 0; i < 5; i++) {
  mySubArr.push(arr[i])
}
console.log(mySubArr)