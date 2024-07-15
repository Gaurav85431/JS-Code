let str = 'hello';
if (str.length != -1) {
  let res = str[0].toUpperCase() + str.slice(1);
  console.log("res is ", res)

  let Lower = str[0].toLowerCase() + str.slice(1);
  console.log("res in lower case is ", Lower)

}
else {
  console.log("Enter string first")
}