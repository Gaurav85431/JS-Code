let arr = [3, 43, 23, 42, 35, 54, 534, 42, 42, 35, 4, 46, 35, 4, 223, 24, 254, 25, 2446, 346];
let index = 5;
let SearchItm = 43;
let Find = arr.indexOf(SearchItm);
if (Find !== -1) {

  console.log(`${SearchItm} is found at ${Find} index `)

  let SearchVal = arr[index]
  console.log(`${index} pr ${SearchVal} hai`);

}
else {
  console.log('No found ')
}