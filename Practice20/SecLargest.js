let arr = [12, 23, 43, 54, 67, 78, 89];
let f = -Infinity, s = -Infinity;
for (let itm of arr) {
  console.log(itm)
  if (itm > f) {
    s = f;
    f = itm;
  }
  else if (itm < f && itm > s) {
    s = itm;
  }
}
console.log("2nd Largest is ", s)

/*
2, 23, 43, 54, 67, 78, 89,18,15,80
12
(89>f){
  s=78
  f=89;  
}
else if(80<89 && 80>78){
  s=80
}

*/