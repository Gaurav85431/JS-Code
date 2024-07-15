let num = [12, 23, 34, 45, 32];

// nth max i.e. nth postiion per max ya min no.

let nth = 5;    //4th index;; Array ke length jitna value lenge user aur jo sa value diya usko -1 kar denge taki wo index ka value nikal jaye

if (nth <= num.length)             //if nth index original array ke length se kam ya equal ho
{

  // When ascending array me nth position ka value
  let Res = num.slice().sort((a, b) => a - b);
  console.log("nth max ", Res[nth - 1])  // 1st index => 0th

  // Descending array me nth position ka value
  let Des = num.slice().sort((a, b) => b - a);
  console.log("Nth min ", Des[nth - 1]);
}
else {
  console.log("Not Found in array")
}
