let arr = [12, 43, 54, 65, 57, 75, 57, 3];
let searchEle = 54;
let Found = arr.indexOf(searchEle);
if (Found != -1) {
  console.log(`${searchEle} is found at ${Found} index`)

}
else {
  console.log("Not found")
}
