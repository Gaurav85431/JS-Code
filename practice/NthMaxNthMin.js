let arr = [12, 32, 34, 35, 231, 64, 42, 532, 423];
let nthNo = 14;

if (nthNo <= arr.length) {

  let AscArry = arr.slice().sort((a, b) => a - b);
  let DscArry = arr.slice().sort((a, b) => b - a);
  // console.log(AscArry, "==", DscArry)

  console.log("Nth max ", AscArry[nthNo - 1]);
  console.log("Nth min ", DscArry[nthNo - 1]);
}
else {
  console.log("Utna element nhi hia kam do")
}