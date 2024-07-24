let num = 14;
let Sqr = num * num;
let Sqr2 = num ** 2;
let Sqr3 = Math.pow(num, 2);

let Sqrt = Math.sqrt(Sqr)
let Sqrt2 = Math.sqrt(Sqr2)
let Sqrt3 = Math.sqrt(Sqr3)

console.log(`${num}: ${Sqr} - ${Sqr2} - ${Sqr3} ::: ${Sqrt} - ${Sqrt2} - ${Sqrt3}`)

let Cube = num * num * num;
let Cube2 = num ** 3;
let Cube3 = Math.pow(num, 3)

let Cbrt = Math.cbrt(Cube);
let Cbrt2 = Math.cbrt(Cube2);
let Cbrt3 = Math.cbrt(Cube3);
console.log(`${num}: ${Cube}- ${Cube2} - ${Cube3} ::: ${Cbrt} - ${Cbrt2} - ${Cbrt3}`)