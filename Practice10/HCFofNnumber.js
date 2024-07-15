// let arr = [12, 12, 32, 56, 88];
// let arr = [12, 8, 2, 4]
/**
let arr = [2, 4, 8]
let a = arr[0];
for (let i = 1; i < arr.length; i++) {
  b = arr[i];
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
}
console.log(`HCF is ${a}`);

/*
let product = arr[0];
let out = 1;
for (let i = 1; i < arr.length; i++) {
  out = product * arr[i]
}
let lcm = out / a;
console.log("LCM is ", lcm)*/




/*
let arr = [2, 4, 8];
let a = arr[0];

// Calculate HCF
for (let i = 1; i < arr.length; i++) {
  let b = arr[i];
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
}
console.log(`HCF is ${a}`);

// Function to calculate HCF of two numbers
function calculateHCF(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

// Calculate LCM
let lcm = arr[0];
for (let i = 1; i < arr.length; i++) {
  lcm = (lcm * arr[i]) / calculateHCF(lcm, arr[i]);
}
console.log(`LCM is ${lcm}`);
*/





