let str = "hello gaurav how are you";
let mySet = new Set(str);
console.log("Remove duplicate char ", mySet)
let arr = Array.from(mySet);
console.log("Remove duplicate arrrr ", arr)


let MyStr = str.split(' ').join('');
let mySetWithoutSpace = new Set(MyStr);
console.log("Remove duplicate (Space also remove)", mySetWithoutSpace)
let ar = Array.from(mySetWithoutSpace);
console.log("Remove duplicate array (Space Also remove) ", ar)



// another way
let myStr = "asfdlkj afdslkjeowji gra";
let duplicate = {};
let DuplicateArray = []
for (let char of myStr) {
  if (!duplicate[char]) {
    duplicate[char] = true;
  }
}
console.log("Unique is ", duplicate)
DuplicateArray = Array.from(duplicate);
console.log("Unique array is ", DuplicateArray)