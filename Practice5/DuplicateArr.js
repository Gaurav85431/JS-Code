let arr = [12, 32, 43, 54, 65, 76, 87, 89, 123, 43, 23, 1, 54, 21, 32, 1, 2, 12];
let Duplicate = new Set();
let Unique = new Set();

for (let itm of arr) {
  if (Unique.has(itm)) {
    Duplicate.add(itm);
  }
  else {
    Unique.add(itm);
  }
}
console.log('Unique and Duplicate is ', Unique, " ", Duplicate);
console.log('Unique and Duplicate Array is ', Array.from(Unique), " ", Array.from(Duplicate));
