"use strict";
// starting: npm i -g typescript
// then tsc init
// to compile / run the code with node:
// 1: tsc
// 2: node index.js
let nama; // Type inference
nama = "fata";
console.log(nama);
let tes;
tes = 100;
console.log(tes);
let trufals;
trufals = true;
console.log(trufals);
let array = [
    "tes",
    "tes2",
    "tes3",
    "tes4",
    "tes5",
    "tes6",
    "tes7",
    "tes8",
];
array = ["halo"];
console.log(array);
let tuples = ["fata", false]; // fixed array
tuples = ["tes", true];
tuples.push("halo"); // kekurangan tuples ga kebal kalau di push => can be prevented if you use const
console.log(tuples);
let stringTes;
stringTes = ["fata", "asd", "asd", "asd"];
console.log(stringTes);
let collection;
collection = ["fata", 1, 2, 3, 4, 5, 6];
console.log(collection);
let object;
object = {
    name: "tes",
    age: 100,
    boolean: true,
    obj: {
        name: "tes",
    },
};
let profile;
profile = [
    // boolean doesn't have to be inserted because it optional
    {
        name: "tes",
        age: 100,
        obj: {
            name: "tes",
        },
    },
    {
        name: "tes",
        age: 100,
        boolean: true,
    },
    {
        name: "tes",
        age: 100,
        obj: {
            name: "tes",
        },
    },
];
console.log(object);
console.log(profile);
let terserah;
terserah = 1; // ===> notable mention to not use this because the data can be inserted with any type of data
console.log(terserah);
let gatau; // ===> unknown type data
gatau = "askdjak";
if (typeof gatau === "string") {
    // ==> conditional for the unknown type data
    console.log(gatau.length);
}
function printId(id) {
    if (typeof id === "string") {
        return id.length; // condition because number doesn't have length
    }
    else {
        return id + 5;
    }
}
console.log(printId("halo"));
function sayHello(name, age) {
    // ==> parameter in function have to define their type
    return `Hi namaku ${name} dan umurku ${age} tahun`;
}
// console.log(sayHello(123, "afas")); // ==> this won't work because the inputted data doesn't match with the data that sayhello actually want
console.log(sayHello("fata", 12)); // ==> match it with the data that function actually want
function sayHi(message) {
    // added validation that the function must be return string
    return {
        name: "halo",
        age: 100,
        message,
    };
}
// function sayHi(message:string): string { // added validation that the function must be return string
//     return "halo"
// }
console.log(sayHi("halo"));
let alphabets = ["A", "B", "C"];
// alphabets = "abc" ==> this can't be used because for each only want array
alphabets.forEach((e) => {
    console.log(e);
});
function greeter(person) {
    console.log(person);
    return `Hai ${person.name} umurmu ${person.age} yah`;
}
let person = {
    // the data in that exist / needed in interface is must be inputed but you also able to add property to to it / inheritance
    name: "fata",
    age: 15,
    tes: 1,
};
console.log(greeter(person));
// ==> notable mention => type can't be extended
class Base {
    greet() {
        console.log("Hello, world!");
    }
}
class Derived extends Base {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const d = new Derived();
d.greet();
d.greet("reader");
class AnimalHouse {
    constructor(animal) {
        this.resident = animal;
    }
    displayResidentInfo() {
        console.log(`Resident Info: Date of Birth - ${this.resident.dateOfBirth}`);
    }
}
class DogHouse extends AnimalHouse {
    constructor(dog) {
        super(dog);
    }
    displayResidentInfo() {
        console.log(`Resident Info: Breed - ${this.resident.breed}, Date of Birth - ${this.resident.dateOfBirth}`);
    }
}
// Create an instance of Dog
const myDog = {
    dateOfBirth: new Date("2020-05-15"),
    breed: "Golden Retriever",
};
// Create an instance of DogHouse
const myDogHouse = new DogHouse(myDog);
// Output the information
myDogHouse.displayResidentInfo();
const id = (x) => x;
console.log(id(282329238238932823)); // ==> simple generic example
let users = {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
        {
            id: 1,
            email: "george.bluth@reqres.in",
            first_name: "George",
            last_name: "Bluth",
            avatar: "https://reqres.in/img/faces/1-image.jpg",
        },
        {
            id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg",
        },
        {
            id: 3,
            email: "emma.wong@reqres.in",
            first_name: "Emma",
            last_name: "Wong",
            avatar: "https://reqres.in/img/faces/3-image.jpg",
        },
        {
            id: 4,
            email: "eve.holt@reqres.in",
            first_name: "Eve",
            last_name: "Holt",
            avatar: "https://reqres.in/img/faces/4-image.jpg",
        },
        {
            id: 5,
            email: "charles.morris@reqres.in",
            first_name: "Charles",
            last_name: "Morris",
            avatar: "https://reqres.in/img/faces/5-image.jpg",
        },
        {
            id: 6,
            email: "tracey.ramos@reqres.in",
            first_name: "Tracey",
            last_name: "Ramos",
            avatar: "https://reqres.in/img/faces/6-image.jpg",
        },
    ],
};
console.log(users);
// ==> Generic Constraint
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let personGeneric = merge({ name: 'John' }, { age: 25 });
console.log(personGeneric);
