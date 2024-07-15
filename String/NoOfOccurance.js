let x = "Hello World";
let count = {};
//  object.key ya object[key]
for (let a of x) {
  if (/[a-zA-Z]/.test(a)) {  //regex syntax = /[]/
    count[a] = (count[a] || 0) + 1   //count obj ke a key me pehle se hai to wo incrn by 1 else 1 assign
  }
}  //test() btata hai ki ek specific method kisi regular expression me available hai ya nahi.
console.log("count is ", count);


// 2nd way 
let str = "hello world";
let counter = {}
for (let char of str) {  // string ka character me

  if (counter[char]) {   // ager counter me wo char hai to 
    counter[char] + 1
  }
  else {                // agar counter me wo char na hai to 
    counter[char] = 1;
  }
}
console.log("counter ", counter)