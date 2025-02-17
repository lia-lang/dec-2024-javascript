// hw1
let s1 = 'hello world';
console.log(s1.length);
let s2 = 'lorem ipsum';
console.log(s2.length);
let s3 = 'javascript is cool';
console.log(s3.length);

// const strings = [s1, s2, s3];
// for (const s of strings) {
//     console.log(s.length);
// }

// hw2
// let s = 'hello world';
// const s1 = s.toUpperCase();
// console.log(s1);
//
// let s2 = 'lorem ipsum';
// const s3 = s2.toUpperCase();
// console.log(s3);
//
// let s4 = 'javascript is cool';
// const s5 = s4.toUpperCase();
// console.log(s5);

// hw3
// let s = 'HELLO WORLD';
// const s1 = s.toLowerCase();
// console.log(s1);

// let s2 = 'LOREM IPSUM';
// const s3 = s2.toLowerCase();
// console.log(s3);
//
// let s4 = 'JAVASCRIPT IS COOL';
// const s5 = s4.toLowerCase();
// console.log(s5);
//
// // hw4
// let str = ' dirty string   ';
// const s = str.trim();
// console.log(s);

// hw5
// function stringToArray(str) {
//     if (str) {
//         const split = str.split (' ');
//         return split;
//     }
//     return [''];
// }
//
// console.log(stringToArray('Ревуть воли як ясла повні'));

// hw6
const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const strings = numbers.map(number=> number + '');
console.log(strings);

// hw7
// function sortNums(arrayOfNums, directions) {
//     if (direction === 'ascending') return arrayOfNums.sort((a, b) => a - b);
//     if (direction === 'descending') return arrayOfNums.sort((a, b) => b - a);
// }

// hw8
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const map1 = coursesAndDurationArray
    .sort((a,b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id = index + 1;
        return value;
    });

console.log(map1)

// hw9
const suits = [ 'spade', 'diamond','heart', 'club']
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

const cards =[];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }else {
            card.color = 'black'
        }
        cards.push(card)
    }
}

console.log(cards);


console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));

// hw10
// const suits = [ 'spade', 'diamond','heart', 'club']
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
//
// const cards =[];
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         }else {
//             card.color = 'black'
//         }
//         cards.push(card)
//     }
// }
//
// console.log(cards);
//
// const reduce = cards.reduce((accum, card) => {
//     switch (card.cardSuit) {
//         case 'spade':
//             accum.spades.push(card);
//             break;
//         case 'diamond':
//             accum.diamonds.push(card);
//             break;
//         case 'club':
//             accum.clubs.push(card);
//             break;
//         case 'heart':
//             accum.hearts.push(card);
//             break;
//     }
//
//     return accum;
// }, {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// });
//
// console.log(reduce);

// hw11
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course => {
    return course.modules.includes('sass')
}));

console.log(coursesArray.filter(course => {
    return course.modules.includes('docker')
}));
