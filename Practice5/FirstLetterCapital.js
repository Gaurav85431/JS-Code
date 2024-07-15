let str = "hello";

if (str.length === 0) {
  console.log("Min 1 length");
  return str;
}
let firstCapital = str[0].toUpperCase() + str.slice(1);
console.log(firstCapital);



