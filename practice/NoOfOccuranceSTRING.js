let str = 'hello world';
let occurance = {};

for (let char of str) {
  if (occurance[char]) {
    occurance[char] = occurance[char] + 1;
  }
  else {
    occurance[char] = 1;
  }
}
console.log("Occurance is ", occurance)


// for se
let str2 = "hello, gaurav";
let occur = {};
let val;
for (let i = 0; i < str2.length; i++) {
  val = str2[i];

  // if (occur[val] == str2[i]) {  //(Wrong)
  if (occur[val] !== undefined) {

    occur[val] = occur[val] + 1;
  }
  else {
    occur[val] = 1
  }
}
console.log("Occurance by for loop is ", occur);