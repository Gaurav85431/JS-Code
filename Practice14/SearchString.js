let str = "hello Gaurav";
let search = "h";
let index = 5;
let findIndex = str.indexOf(search);
let findStr = str[index - 1];
if (findIndex !== -1) {

  console.log(`${str} me ${search} -- ${findIndex} index per hai. Aur ${index} per ye ${findStr} string hai`)
}
else
  console.log("Not found char in string")