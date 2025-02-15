// hw1
const square = (aNum, bNum) => {
    const result = aNum * bNum;
    console.log(result);
    return result;
};

square();

// hw2
const roundSquare = radius => Math.PI * radius * radius;

// hw3
const squareCilinder = (radius, height) => 2 * Math.PI * radius * height;

console.log(squareCilinder(10, 40));

// hw4
// const foobar = array => {
//     for (const item of array) {
//         console.log(item);
//     }
// };

// hw5
// const foobar = text => document.write(`<p>${text}</p>`);
//
// foobar('okten');
// foobar('okten1');
// foobar('okten2');
// foobar('okten3');

// hw6
// const foobar = text => document.write(`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
// `);
//
// foobar('cvcvcv');

// hw7
// const foobar = (text, counter) => {
//     document.write('<ul>');
//     for (let i = 0; i < counter; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// };
//
// foobar('okten', 100);

// hw8
// const foobar = (text, counter) => {
//     document.write('<ul>');
//     for (let i = 0; i < counter; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// };
//
// foobar('okten', 100);

// hw9
const foobar = users => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
};

foobar([
    {id:1,name:'kokos', age:123},
    {id:2,name:'kokos', age:123},
    {id:3,name:'kokos', age:123},
    {id:4,name:'kokos', age:123},
    {id:5,name:'kokos', age:123},
]);

// hw10
const arrayMinValue = numbers => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
};

console.log(arrayMinValue([99, 11, -123, 22, 33, 44]));

// hw11
const sum = arr => {
    let basket = 0;
    for (const item of arr) {
        basket += item;
    }
    return basket;
};

console.log(sum([1, 2, 10]));

// hw12
const swap = (arr, i1, i2) => {
    if (i1 >= 0 && i1 < arr.length && i2 >= 0 && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;

        return arr;
    }
    return -Infinity;
};

console.log(swap([11, 22, 33, 44], 2, 3));  // [11, 22, 44, 33]
console.log(swap([11, 22, 33, 44], -1, 3)); // -Infinity

// hw13
const exchange = (sumUAN, currencyValues, exchangeCurrency) => {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }

    return sumUAN / chosenCurrency.value;
};

console.log(exchange(10000, [{currency:'USD', value:25}, {currency:'EUR', value:42}], 'USD'));
