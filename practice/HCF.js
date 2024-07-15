let a = 12, b = 32;
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
console.log("hcf ", a);


/*
  b=32  !=0
  t=32;
  b=12%32=12
  a=32

  b=12  !=0
  t=12;
  b=32%12=8;
  a=12

  b=8 !=0;
  t=b=>8;
  b=a%b= 12%8=4;
  a=t=>8

  b=4    !=0
  t=4;
  b=8%4=0
  a=t=>4;

  b=0

*/