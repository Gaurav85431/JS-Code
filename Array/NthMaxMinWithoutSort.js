const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const n = 3;

if (n > numbers.length) {
  console.log(null);
} else {
  let maxValues = [];

  for (let i = 0; i < n; i++) {
    let max = -Infinity; // let max = -Infinity; ka matlab hai ki max ko aisi value se initialize karna jo kisi bhi number se chhoti ho. Iska fayda yeh hai ki array ka pehla element max se bada hoga, aur fir hum usse compare karke maximum value nikal sakte hain.
    let maxIndex = -1;

    for (let j = 0; j < numbers.length; j++) {
      if (!maxValues.includes(numbers[j]) && numbers[j] > max) {
        max = numbers[j];
        maxIndex = j;
      }
    }

    if (maxIndex !== -1) {
      maxValues.push(max);
    }
  }

  console.log(maxValues[n - 1]);
}
