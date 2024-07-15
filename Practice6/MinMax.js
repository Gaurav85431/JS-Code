let arr = [21, 32, 434, 32, 2, 3, 4, 64, 57, 956];
let ArraySort = arr.slice().sort((a, b) => a - b);
let MinVal = ArraySort[0];
let MaxVal = ArraySort[arr.length - 1];
console.log(`Min and Max value is ${MinVal} and ${MaxVal}`);





// Nth max and min
let myArr = arr.slice();
let NthNum = 8;
let ascSortArray = myArr.slice().sort((a, b) => a - b);
let dscSortArray = myArr.slice().sort((a, b) => b - a);
console.log(` Max and min at ${ascSortArray[NthNum]}  and   ${dscSortArray[NthNum]} `);


// 

