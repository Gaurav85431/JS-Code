let arr = [12, 4, 43, 23, 32, 32, 32, 32, 4];
let search = 23;
// let find= arr.includes(23);
let find = arr.indexOf(23)
if (find) {
  console.log(`${search} found at ${find}`)
}
else {
  console.log("Not found")
}