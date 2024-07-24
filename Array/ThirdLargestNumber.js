let arr = [13, 23, 34, 5, 45, 56, 76, 76, 78, 89, 45, 89, 54, 78]
let DscSort = arr.slice().sort((a, b) => b - a);
let DesUnique = new Set(DscSort);
let DesUniqueSort = Array.from(DesUnique);
console.log("3rd Largest ", DesUniqueSort[2]);
console.log("2nd Largest ", DesUniqueSort[1]);
console.log("1st Largest ", DesUniqueSort[0]);


// 2nd way
let arr2 = [13, 23, 34, 5, 45, 56, 76, 76, 78, 89, 45, 89, 54, 78]
let f = -Infinity, s = -Infinity, t = -Infinity;
for (let itm of arr2) {

  if (itm > f) {
    t = s;
    s = f;
    f = itm;
  }
  else if (itm > s && itm < f) {
    t = s;
    s = itm;
  }
  else if (itm > t && itm < s) {
    t = itm;
  }
}
console.log("Third largest is ", t)