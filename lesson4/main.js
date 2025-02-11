// hw1
function square(aNum, bNum) {
    const result = aNum * bNum;
    console.log(result);
    return result;
}
square()

// hw2
function roundSquare(radius) {
    return Math.PI * radius * radius;
}

// hw3
function squareCilinder(radius, height) {
    return 2 * Math.PI * radius * height
}
console.log(squareCilinder(10, 40));

// hw4
function foobar(array) {
    for (const item of array) {
        console.log(item);
    }
}

// hw5
function foobar(text) {
    document.write(`<p>${text}</p>`);
}
foobar('okten');
foobar('okten1');
foobar('okten2');
foobar('okten3');

// hw6
// function foobar(text) {
//     document.write(`
//                     <ul>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                     </ul>
//                     `)
// }
//
// foobar('cvcvcv');

// hw7
// function foobar(text, counter) {
//     document.write('<ul>');
//     for (let i = 0; i < counter; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
//
// }
//
// foobar('okten', 100);

// hw8
// function foobar(arrayOfPrimitives) {
//     document.write(`<ul>`);
//     for (const item of arrayOfPrimitives) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// foobar([123, 33, 'cvcvcv', true]);

// hw9
// function foobar(users) {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// }
//
// foobar([
//     {id:1,name:'kokos', age:123},
//     {id:2,name:'kokos', age:123},
//     {id:3,name:'kokos', age:123},
//     {id:4,name:'kokos', age:123},
//     {id:5,name:'kokos', age:123},
// ])

// hw10
// function arrayMinValue(numbers) {
//     let min = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         let number = numbers [i];
//         if (number < min) {
//             min = number
//         }
//     }
//     return min;
// }
//
// console.log(arrayMinValue([99, 11, -123, 22, 33, 44]))

// hw11
// function sum(arr) {
//     let basket = 0;
//     for (const item of arr) {
//         basket = basket + item;
//     }
//     return basket;
// }
//
// console.log(sum([1, 2, 10]));

// hw12
// function swap(arr, i1, i2) {
//     if (i1 < arr.length && i2 < arr.length) {
//         let temp = arr[11];
//         arr[i1] = arr[i2];
//         arr[i2] = temp;
//
//         return arr;
//     }
//     return -Infinity;
// }
//
// console.log(swap([11, 22, 33, 44], 2, 3));

// hw13
// function exchange(sumUAN, currencyValues, exchangeCurrency) {
//     let chosenCurrency;
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             chosenCurrency =item;
//         }
//     }
//
//     let result = sumUAN/chosenCurrency.value
//     return result;
// }
//
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))
