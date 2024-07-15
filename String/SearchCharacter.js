// string character in Search 

let str = "Hello Gaurav";
let searchItm = 'e';

let find = str.indexOf(searchItm);
if (find != -1) {
  console.log(searchItm, " is at ", find)
}
else {
  console.log("Not found")
}

// String Seach using Regex:
// 1 way match()-> return array of search
let str2 = "Hello, World! this is gaurav";
let pattern = /Hello/;  //Hello find krega na ki hello;  H & h different
let matches = str2.match(pattern);
console.log("Match ", matches)

// 2nd way test()-> return ture if matched
let str3 = "Hello, World! this is gaurav";
let ptrn = /Hello/;
let testMatch = ptrn.test(str3)
console.log("Test() se Match  ->    ", testMatch)



// 3rd way search()-> Give Index of that element
let str4 = "Hello, World! this is gaurav";
let patrn = /World/;
let indexSearch = str4.search(patrn);
console.log("Pattern is at index ", indexSearch);


