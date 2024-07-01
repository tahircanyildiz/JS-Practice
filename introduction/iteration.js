//foreach
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>"; 
}

// map işlemi
const numbers2 = numbers.map(myFunction1);

document.getElementById("demo1").innerHTML = numbers2;

function myFunction1(value) {
  return value * 2;
}

//flatmap işlemi
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap((x) => x * 2);
document.getElementById("demo2").innerHTML = newArr;

//filter
const over18 = numbers.filter(myFunction2);

document.getElementById("demo3").innerHTML = over18;

function myFunction2(value) {
  return value > 18;
}

//reduce işlemi
let sum = numbers.reduce(myFunction3);
document.getElementById("demo4").innerHTML = "The sum is " + sum;

function myFunction3(total, value) {
  return total + value;
}

//every işlemi
let allOver18 = numbers.every(myFunction4);

document.getElementById("demo5").innerHTML = "All over 18 is " + allOver18;

function myFunction4(value) {
  return value > 18;
}

//some işlemi
let someOver18 = numbers.some(myFunction5);

document.getElementById("demo6").innerHTML = "Some over 18 is " + someOver18;

function myFunction5(value, index, array) {
  return value > 18;
}

//from işlemi
const myArr2 = Array.from("TAHİR");
document.getElementById("demo7").innerHTML = myArr2;

//keys metodu
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

document.getElementById("demo8").innerHTML = text;

//entries işlemi
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo9").innerHTML += x + "<br>";
}

//with işlemi
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

document.getElementById("demo10").innerHTML = myMonths;

//spread işlemi
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
document.getElementById("demo11").innerHTML = year; 