// basic function
const sum = function(a, b) {
    return a + b;
};
console.log(sum(1, 2)); // Output: 3

//arrow function
const sum2 = (a, b) => a + b;
console.log(sum2(1, 2)); // Output: 3

//tek parametre
const square = x => x * x;
console.log(square(4)); // Output: 16

//parametresiz
const sayHello = () => console.log('Hello!');
sayHello(); // Output: Hello!

const addAndDouble = (a, b) => {
    const sum = a + b;
    return sum * 2;
};
console.log(addAndDouble(2, 3)); // Output: 10



/*
Sözdizimi: Arrow functions, daha kısa ve okunabilir bir sözdizimi sunar.
Parametreler: Tek bir parametre için parantezler isteğe bağlıdır.
this Bağlamı: Arrow functions, tanımlandığı bağlamdaki this değerini kullanır.
arguments Nesnesi: Arrow functions, kendi arguments nesnesine sahip değildir.
*/

const groupBy = (array, keyFn) => {
    return array.reduce((result, item) => {
      const key = keyFn(item);
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
      return result;
    }, {});
  };
  
  const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' },
    { name: 'cherry', color: 'red' },
    { name: 'lemon', color: 'yellow' },
  ];
  
  const groupedByColor = groupBy(fruits, fruit => fruit.color);
  console.log(groupedByColor);
  