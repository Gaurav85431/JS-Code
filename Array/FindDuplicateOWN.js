// Find Duplicate Element of array and keep it in new array

// 1st way-------(REMOVE DUplicate Value from array)
let ar = [10, 12, 21, 12, 10, 15];
let UniqueElement = new Set(ar);
console.log("Removed duplicate ", UniqueElement);  //in object
console.log("In array duplicate remove ", Array.from(UniqueElement));






// 2nd way Duplicate value ka count pata karo:-

let arr2 = [1, 2, 3, 4, 5, 6, 7, 5, 4, 4, 2, 54, 4, 5, 63, 43, 4, 3, 5];
let frequencyMap = new Map(); //Jab hum new Map() likhte hain, to hum ek naya, khaali Map object banate hain. Iska matlab hai ki ye ek aisi jagah create karta hai jahan hum key-value pairs store kar sakte hain.

// JavaScript mein, Map ek aisa object hai jo key-value pairs ko store karta hai. Isme har key kisi bhi type ki ho sakti hai (string, number, object, etc.), aur values bhi kisi bhi type ki ho sakti hain.

for (let itm of arr2) {
  if (frequencyMap.has(itm)) {
    frequencyMap.set(itm, frequencyMap.get(itm) + 1);
  } else {
    frequencyMap.set(itm, 1);
  }
}
// console.log(frequencyMap)//ye object ke form me output dega
for (let [key, value] of frequencyMap) {
  console.log(`${key} occurs ${value} times`);
}








// 3rd way --> Duplicate value ko 1 array me rakho
let arr = [1, 2, 3, 4, 5, 6, 7, 5, 4, 4, 2, 54, 4, 5, 63, 43, 4, 3, 5];
let UniqueSet = new Set();
let DuplicateSet = new Set();

for (let itm of arr) {
  if (UniqueSet.has(itm)) {
    DuplicateSet.add(itm)
  }
  else {
    UniqueSet.add(itm)
  }
}
console.log("duplicate set ", DuplicateSet);
console.log("Unique set ", UniqueSet);

let UniqueArray = Array.from(UniqueSet);
// let DuplicateArray = Array.from(DuplicateSet);  // ya 
let DuplicateArray = [...DuplicateSet]
console.log("Unique Array is ", UniqueArray)
console.log("Duplicate Array is ", DuplicateArray)



// stage
// sorting  -> insertion,bubble, selection, heap, 6sorts
