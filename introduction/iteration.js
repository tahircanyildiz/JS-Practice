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



// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo").innerHTML = cars; 

//MAP deneme
const map = new Map();
// Eleman ekleme
map.set('name', 'John');
map.set('age', 25);
map.set('country', 'USA');
// Elemanları okuma
console.log(map.get('name')); // Output: John
console.log(map.get('age')); // Output: 25
// Eleman kontrolü
console.log(map.has('country')); // Output: true
console.log(map.has('city')); // Output: false
// Eleman sayısı
console.log(map.size); // Output: 3
// Eleman silme
map.delete('age');
console.log(map.size); // Output: 2
// Tüm elemanları silme
map.clear();
console.log(map.size); // Output: 0


// Anahtarlar üzerinde gezinme
for (const key of map.keys()) {
  console.log(key);
}
// Output: name, age, country

// Değerler üzerinde gezinme
for (const value of map.values()) {
  console.log(value);
}
// Output: Jane, 30, Canada

// Anahtar-değer çiftleri üzerinde gezinme
for (const [key, value] of map.entries()) {
  console.log(`${key}: ${value}`);
}
// Output: name: Jane, age: 30, country: Canada

//Javascript iterators
const array = [1, 2, 3];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


//Iterator oluşturma
const myIterable = {
  [Symbol.iterator]() {
      let step = 0;
      const iterator = {
          next() {
              step++;
              if (step === 1) {
                  return { value: 'First', done: false };
              } else if (step === 2) {
                  return { value: 'Second', done: false };
              } else {
                  return { value: undefined, done: true };
              }
          }
      };
      return iterator;
  }
};
for (const value of myIterable) {console.log(value);}
// Output:
// First
// Second


//Sets oluşturma
// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
let tmp = "";
letters.forEach (function(value) {
  tmp += value;
})