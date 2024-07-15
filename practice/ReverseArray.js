// ------- manual
let arr = [12, 32, 43, 5, 4];
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i])
}
console.log(rev)
console.log(rev[2])


// ------- auto 
let rev2 = arr.slice().reverse();
console.log(rev2)