// // hw1
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// const user = new User(1, 'mark', 'markov', 'marov.gmail.com', '+380995087860')
// console.log(user)
//
// let users = [
//     new User(1, 'mark', 'markov', 'marov.gmail.com', '+380995087860'),
//     new User(2, 'dima', 'dimkov', 'dimkov.gmail.com', '+380995087861'),
//     new User(3, 'maks', 'maksov', 'maksov.gmail.com', '+380995087862'),
//     new User(4, 'sasha', 'sashkov', 'sashkov.gmail.com', '+380995087863'),
//     new User(5, 'roma', 'romkov', 'romkov.gmail.com', '+380995087864'),
//     new User(6, 'nik', 'nokkov', 'nokkov.gmail.com', '+380995087865'),
//     new User(7, 'egor', 'egorkov', 'egorkov.gmail.com', '+380995087866'),
//     new User(8, 'oleg', 'olekov', 'olekov.gmail.com', '+380995087867'),
//     new User(9, 'den', 'denkov', 'denkov.gmail.com', '+380995087868'),
//     new User(10, 'pasha', 'markov', 'markov.gmail.com', '+380995087869'),
// ]
//
// console.log(users)
//
// // hw2
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'mark', 'markov', 'marov.gmail.com', '+380995087860'),
    new User(2, 'dima', 'dimkov', 'dimkov.gmail.com', '+380995087861'),
    new User(3, 'maks', 'maksov', 'maksov.gmail.com', '+380995087862'),
    new User(4, 'sasha', 'sashkov', 'sashkov.gmail.com', '+380995087863'),
    new User(5, 'roma', 'romkov', 'romkov.gmail.com', '+380995087864'),
    new User(6, 'nik', 'nokkov', 'nokkov.gmail.com', '+380995087865'),
    new User(7, 'egor', 'egorkov', 'egorkov.gmail.com', '+380995087866'),
    new User(8, 'oleg', 'olekov', 'olekov.gmail.com', '+380995087867'),
    new User(9, 'den', 'denkov', 'denkov.gmail.com', '+380995087868'),
    new User(10, 'mark', 'markov', 'markov.gmail.com', '+380995087869'),
]

const filterUsers = users.filter((user) => user.id % 2 === 0)
console.log(filterUsers)
//
// // hw3
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(1, 'mark', 'markov', 'marov.gmail.com', '+380995087860'),
//     new User(4, 'dima', 'dimkov', 'dimkov.gmail.com', '+380995087861'),
//     new User(3, 'maks', 'maksov', 'maksov.gmail.com', '+380995087862'),
//     new User(2, 'sasha', 'sashkov', 'sashkov.gmail.com', '+380995087863'),
//     new User(5, 'roma', 'romkov', 'romkov.gmail.com', '+380995087864'),
//     new User(8, 'nik', 'nokkov', 'nokkov.gmail.com', '+380995087865'),
//     new User(7, 'egor', 'egorkov', 'egorkov.gmail.com', '+380995087866'),
//     new User(6, 'oleg', 'olekov', 'olekov.gmail.com', '+380995087867'),
//     new User(9, 'den', 'denkov', 'denkov.gmail.com', '+380995087868'),
//     new User(10, 'pasha', 'markov', 'markov.gmail.com', '+380995087869'),
// ]
//
// function sorter(user1, user2){
//     return user1.id-user2.id;
// }
//
// console.log(users.sort(sorter))
//
// // hw4
// function Client(id, name, surname, email, phone, ...products) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = products;
// }
//
// function Product(title, price) {
//     this.title = title;
//     this.prise = price;
// }
//
// const client = new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('tv', 25000), new Product('phone', 30000) );
//
// let clients = [
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('tv', 25000), new Product('phone', 30000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('tv', 30000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('phone', 20000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('tv', 25000), new Product('phone', 30000), new Product('radio', 5000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('radio', 5000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('tv', 25000), new Product('phone', 30000), new Product('radio', 5000), new Product('microwave', 2000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('microwave', 2000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('phone', 40000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('radio', 5000), new Product('microwave', 2000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('phone', 30000), new Product('radio', 5000))
// ];
//
//
// console.log(clients.order)
//
// // hw5
// function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// function Product(title, price) {
//     this.title = title;
//     this.prise = price;
// }
//
// const client = new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('tv', 25000), new Product('phone', 30000) );
//
// let clients = [
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('tv', 25000), new Product('phone', 30000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('tv', 30000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('phone', 20000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('tv', 25000), new Product('phone', 30000), new Product('radio', 5000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('radio', 5000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('tv', 25000), new Product('phone', 30000), new Product('radio', 5000), new Product('microwave', 2000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('microwave', 2000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('phone', 40000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('radio', 5000), new Product('microwave', 2000)),
//     new Client(1, 'dana', 'danova', 'dana.@gmail.com', '+380957878080', new Product('phone', 30000), new Product('radio', 5000))
// ];
//
// const sort = clients.sort((a, b) => a.order.length - b.order.length);
//
// console.log(sort);
//
// // hw6
// function Car(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engineVolume = engineVolume
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     }
//     this.increaseMaxSpeed = function (speedToAdd) {
//         if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
//     };
//     this.changeYear = function (year) {
//         if(year>1815) this.year = year;
//     };
//     this.addDriver = function (driver) {
//         if (driver) this.driver = driver;
//     };
// }
//
// const car = new Car ('jetta', 'china', 2019, 228, 2 );
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2000);
// car.addDriver({});
// console.log(car);
//
// // hw7
// class Car {
//
//
//     constructor(model, producer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     }
//     increaseMaxSpeed  (speedToAdd) {
//         if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
//     };
//     changeYear = function (year) {
//         if(year>1815) this.year = year;
//     };
//     addDriver = function (driver) {
//         if (driver) this.driver = driver;
//     };
// }
//
// const car = new Car ('jetta', 'china', 2019, 228, 2 );
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2000);
// car.addDriver({});
// console.log(car);
//
// // hw8
class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {

    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

// const cinderellas = [
//     new Cinderella('asd1', 20, 34),
//     new Cinderella('asd2', 25, 35),
//     new Cinderella('asd3', 26, 36),
//     new Cinderella('asd4', 28, 37),
//     new Cinderella('asd5', 21, 38),
//     new Cinderella('asd6', 23, 39),
//     new Cinderella('asd6', 26, 39),
//     new Cinderella('asd6', 27, 39),
//     new Cinderella('asd6', 24, 39),
//     new Cinderella('asd6', 22, 39),
// ];
//
// const prince = new Prince('sasa', 123123, 37);
//
//
// // for (const cinderella of cinderellas) {
// //     if (cinderella.footSize === prince.slipper) {
// //         prince.wife = cinderella;
// //     }
// // }
//
// const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
//
// prince.wife = cinderellaMain;

// if (cinderellaMain) {
//     prince.wife = cinderellaMain;
//     console.log(`${prince.wife.name} is the prince's wife!`);
// } else {
//     console.log('Not found.');
// }

// hw9
// Array.prototype.myForEach = function (callback) {
//     const yourArray = this;
//     for (const item of yourArray) {
//         callback(item);
//     }
// };
//
// [11, 22, 33].myForEach((x) => console.log(x));
//
// Array.prototype.myFilter = function (predicate) {
//     const arr = [];
//     for (const item of this) {
//         if (predicate(item)) {
//             arr.push(item);
//         }
//     }
//
//     return arr;
// };
//
// let users = [
//     {name: 'mark', age: 30, status: false},
//     {name: 'dima', age: 32, status: true},
//     {name: 'maks', age: 28, status: true},
//     {name: 'sasha', age: 29, status: false},
//     {name: 'roma', age: 33, status: true},
//     {name: 'nik', age: 31, status: false},
//     {name: 'egor', age: 29, status: false},
//     {name: 'oleg', age: 27, status: true},
//     {name: 'den', age: 37, status: true},
//     {name: 'pasha', age: 33, status: false},
// ];
//
// const result = users.myFilter((user) => user.status);
//
// console.log(result);
