let str = "hello gaurav how are you! Failed to load resource Hmmm… can't reach this pagechatgpt.com took too long to respond Checking the connection Checking the proxy and the firewall"

let strAr = str.split(' ');
for (let i = 0; i < strAr.length; i++) {
  for (let j = 0; j < strAr.length - i - 1; j++) {
    if (strAr[j] > strAr[j + 1]) {
      let temp = strAr[j];
      strAr[j] = strAr[j + 1];
      strAr[j + 1] = temp;
    }
  }
}
console.log("Word in Ascending Sort ", strAr)



// capital pehle aayega.

for (let i = 0; i < strAr.length; i++) {
  for (let j = 0; j < strAr.length - i - 1; j++) {
    if (strAr[j] < strAr[j + 1]) {
      let temp = strAr[j];
      strAr[j] = strAr[j + 1];
      strAr[j + 1] = temp;
    }
  }
}
console.log("Word in Descending Order ", strAr);
