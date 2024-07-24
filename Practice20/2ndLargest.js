let arr = [12, 23, 34, 54, 67, 68, 78];
let first = -Infinity, second = -Infinity;
for (let itm of arr) {
  if (itm > first) {
    second = first;
    first = itm;
  }
  else if (second < itm && itm < first) {
    second = itm;
  }
}
console.log("Second Largest ", second)



// //  Noida s59
// 3 month trainne
// after
//  project management(tools ko)
//  client requirement like(jira)
//  project launch, project realted.,,,,,,,,,, market research
// project

//  dev role = 3month(unpaid) + 15K / month; 