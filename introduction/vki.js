let kilo=Number(prompt("Kilonuzu giriniz: "));
let boy=Number(prompt("Boyunuzu giriniz: "));

let vki=kilo/(boy**2);
let roundedNumber = vki.toFixed(1);
alert(roundedNumber);