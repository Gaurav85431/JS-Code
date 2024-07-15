let char = ['a', 'd', 'g', 'y', 'e', 'v', 'c'];
for (let i = 0; i < char.length; i++) {
  for (let j = 0; j < char.length - i - 1; j++) {
    if (char[j] > char[j + 1]) {
      let temp = char[j];
      char[j] = char[j + 1];
      char[j + 1] = temp;
    }
  }
}
console.log("Ascending order sort is ", char)

let chars = ['a', 'd', 'g', 'y', 'e', 'v', 'c'];
for (let i = 0; i < chars.length; i++) {
  for (let j = 0; j < chars.length - i - 1; j++) {
    if (chars[j] < chars[j + 1]) {
      let temp = chars[j];
      chars[j] = chars[1 + j];
      chars[j + 1] = temp;
    }
  }
}
console.log("Descending order sort is ", chars)