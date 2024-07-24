let arr = [32, 32, 4345, 65, 56, 7, 67, 67, 56, 45, 45, 34, 23, 34, 45, 56, 56];
let SubArr = arr.slice(0, 5);
console.log("subarray is ", SubArr)


let index = [0, 4, 3, 2, 6, 3];
let SAr = index.map((itm) => {
  return arr[itm]
})
console.log("Sub ARRAY is ", SAr)


let SubAR = []
for (let i = 0; i < 5; i++) {
  SubAR.push(arr[i])
}
console.log("Sub array is -- ", SubAR)


let EvenSubAr = [];
for (let i = 0; i < 10; i += 2) {
  EvenSubAr.push(arr[i]);
}
console.log("Even SubArray is ", EvenSubAr)


let SubArrayEVEN = arr.filter((itm) => {
  if (itm % 2 === 0) {
    return itm;
  }
})
console.log("Even no wala sub array is ", SubArrayEVEN)