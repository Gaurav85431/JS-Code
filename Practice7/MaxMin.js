let arr = [12, 32, 53, 45, 56, 76, 87, 7, 6, 54];
let max, min;
max = arr[0];//12
min = arr[0]
for (let i = 0; i < arr.length; i++) {

  if (max < arr[i]) {
    max = arr[i]
  }
  if (min > arr[i]) {
    min = arr[i]
  }
}
console.log(`Max and min is ${max} and ${min} `)