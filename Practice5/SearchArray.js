let arr = [12, 32, 43, 54, 79, 4, 45, 3, 3, 4, 23, 23];
// serach
// Element 
let element = 12;
let found = arr.indexOf(element);
if (found !== -1) {
  console.log(`${element} founded at ${found} index`);
}
else {
  console.log("element not found")
}

// Search at index some index value
let index = [1, 3, 3, 5, 7];
let ary = []
let val = index.map((itm) => {
  // return arr[itm]
  ary.push(arr[itm])
})
console.log(ary)

// str  search
let str = "hello gaurav";
let strArr = str.split('');
console.log(strArr);
let searchEle = 'e';
let founded = str.indexOf(searchEle);
if (founded !== -1) {
  console.log(`${searchEle} is found at ${founded} index`)
}
