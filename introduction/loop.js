outerLoop: 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        if (j === 3) {
            continue outerLoop; // İç döngüden çık ve dış döngüyü sonlandır
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
console.log("\n");

outerLoop2: 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        if (j === 3) {
            break outerLoop2; // İç döngüden çık ve dış döngüyü sonlandır
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
var a=12;
var b="fsdfsdf";


const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach(function(x){console.log(x)});