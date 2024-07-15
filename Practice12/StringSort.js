let str = "hello gaurav how are you";
let strArr = str.split(' ').join('');
let Asort = str.split('').sort().join('');
console.log(Asort)



let DSort = str.split(' ').sort((a, b) => b.localeCompare(a)).join('');
console.log("desc ", DSort)


let strr = str.split(' ').join('');
let DSortArr = strr.split('').sort((a, b) => b.localeCompare(a));
console.log("Descending ", DSortArr)
let DSortStr = DSortArr.join('');
console.log("Descending sort is ", DSortStr)
