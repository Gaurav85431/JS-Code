let arr = [12, 23, 34, 34, 43, 354, 876, 55643, 54, , 45, 534, 45, 45, 534, 534, 35, 79, 785873, 68735, 345, 35, 534, 543, 53, 53, 53, 53, 53, 345, 543, 53, 53, 534]

let nth = 5;
if (nth > arr.length) {
  console.log("Exceed from array index")
}
else {
  let Asc = arr.slice().sort((a, b) => a - b);
  let Dsc = arr.slice().sort((a, b) => b - a);

  let nthMax = Asc[nth - 1];
  let nthMin = Dsc[nth - 1];
  console.log("Nth min ", nthMin)
  console.log("Nth max ", nthMax); for (let j = 0; j < strAr.length - i - 1; j++) {
    if (strAr[j] > strAr[j + 1]) {
      let temp = strAr[j];
      strAr[j] = strAr[j + 1];
      strAr[j + 1] = temp;
    }
  }

}