let str = "hello how are you";
let strArr = str.split(' ');
let cap = []
for (let itm of strArr) {
  itm = itm.charAt(0).toUpperCase() + itm.slice(1)
  cap.push(itm)
}
console.log('Each word ka first capital ', cap.join(' '))
