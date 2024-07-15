let arr = [12, 4, 5, 4646, 45, 2324, 3535];
let arr2 = [32, 53, 2, 134, 35, 3524];
let MergeArrByString = arr + arr2;//❌  //Array convert into string and then concatenate it.
console.log(MergeArrByString)


let merge = arr.concat(arr2);
console.log(merge);


let mergee = [...arr, ...arr2];
console.log(mergee)