let arr = [12, 43, 32, 35, 64, 54, 34, 46, 57, 8, 98, 78, 67, 65, 35];
let nth = 4 //nth index
if (nth <= arr.length) {


  let Asc = arr.slice().sort((a, b) => a - b);
  let Dsc = arr.slice().sort((a, b) => b - a);
  console.log("Nth Max is ", Asc[nth - 1]);
  console.log("Nth Min is ", Dsc[nth - 1]);

}
else {
  console.log("Exceed array")
}