let arr = [12, 4, 3, 34, 5, 234, 54];

// Sort method string ko sort karta hia.


// Descending me sort karne ke liye  -->    (b-a)
let sortNum = arr.sort((a, b) => b - a);
console.log("Sorted array ", sortNum);


// Ascending me sort karne ke liye   -->    (a-b)  a se b tk
let AscendingSort = arr.sort((a, b) => a - b);
console.log("Ascending sort ", AscendingSort);



// manually- (ascending)
let arrr = [12, 32, 34, 32, 1, 32, 1, 2, 23, 24, 45, 6567, 5, 54,]
for (let i = 0; i < arrr.length; i++) {
  for (let j = 0; j < arrr.length - i - 1; j++) {
    if (arrr[j] > arrr[j + 1]) {
      let temp = arrr[j];
      arrr[j] = arrr[j + 1];
      arrr[j + 1] = temp;
    }
  }
}
console.log("Ascending array manually is ", arrr);

// descending:-
let arrr2 = [12, 32, 34, 32, 1, 32, 1, 2, 23, 24, 45, 6567, 5, 54,]
for (let i = 0; i < arrr2.length; i++) {
  for (let j = 0; j < arrr2.length - i - 1; j++) {
    if (arrr2[j] < arrr2[j + 1]) {
      let temp = arrr2[j];
      arrr2[j] = arrr2[j + 1];
      arrr2[j + 1] = temp;
    }
  }
}
console.log("Descending array manually is ", arrr2);