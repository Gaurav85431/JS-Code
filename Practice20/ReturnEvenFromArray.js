let arr = [12, 23, 43, 5, 45, 5, 34, 5, 56, 77, 56];


let Evn = arr.filter((itm) => itm % 2 === 0);
console.log("Even array is ", Evn)


let Even = []
for (let itm of arr) {
  if (itm % 2 === 0) {
    Even.push(itm)
  }
}
console.log("Even Array is ", Even)