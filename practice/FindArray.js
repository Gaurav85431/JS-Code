let arr = [2, 32, 2, 43, 5, 45, 56];
let search = 2;

let findByIndex = arr.indexOf(search);
console.log("Index is ", findByIndex);



let findByItem = arr.includes(search);
console.log("Founded ", findByItem)//ture
if (findByItem)
  console.log("Found");
else
  console.log("not found")