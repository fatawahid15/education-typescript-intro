// starting: npm i -g typescript
// then tsc init
// to compile / run the code with node:
// 1: tsc
// 2: node index.js

let nama: string; // Type inference
nama = "fata";
console.log(nama);

let tes: number;
tes = 100;
console.log(tes);

let trufals: boolean;
trufals = true;
console.log(trufals);

let array: string[] | number[] = [
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

let tuples: [string, boolean] = ["fata", false]; // fixed array

tuples = ["tes", true];

tuples.push("halo"); // kekurangan tuples ga kebal kalau di push => can be prevented if you use const

console.log(tuples);

type StringWithString = [string, ...string[]];

let stringTes: StringWithString;

stringTes = ["fata", "asd", "asd", "asd"];

console.log(stringTes);

type NumberWithTitle = [string, ...number[]]; // => menandakan number itu bisa banyak
let collection: NumberWithTitle;

collection = ["fata", 1, 2, 3, 4, 5, 6];

console.log(collection);

type ObjectTes = {
  name: string;
  age: number;
  boolean?: boolean; // ==> optional data
  obj?: {
    name: string;
  };
};

let object: ObjectTes;

object = {
  name: "tes",
  age: 100,
  boolean: true,
  obj: {
    name: "tes",
  },
};

let profile: ObjectTes[];

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

let terserah: any;

terserah = 1; // ===> notable mention to not use this because the data can be inserted with any type of data

console.log(terserah);

let gatau: unknown; // ===> unknown type data

gatau = "askdjak";
if (typeof gatau === "string") {
  // ==> conditional for the unknown type data
  console.log(gatau.length);
}

// <===> Union

// union isn't unknown because there's an actual option for the data

type Id = number | string;
function printId(id: Id) {
  if (typeof id === "string") {
    return id.length; // condition because number doesn't have length
  } else {
    return id + 5;
  }
}

console.log(printId("halo"));

function sayHello(name: string, age: number) {
  // ==> parameter in function have to define their type
  return `Hi namaku ${name} dan umurku ${age} tahun`;
}

// console.log(sayHello(123, "afas")); // ==> this won't work because the inputted data doesn't match with the data that sayhello actually want

console.log(sayHello("fata", 12)); // ==> match it with the data that function actually want

function sayHi(message: string): object {
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

interface Person {
  // ==< the usage of interface quite like a parent the child
  name: string;
  age: number;
}

function greeter(person: Person): string {
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
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d = new Derived();
d.greet();
d.greet("reader");

interface Animal {
  dateOfBirth: Date; // Better to use Date type
}

interface Dog extends Animal {
  breed: string; // Specify breed as a string
}

class AnimalHouse {
  resident: Animal;

  constructor(animal: Animal) {
    this.resident = animal;
  }

  displayResidentInfo(): void {
    console.log(`Resident Info: Date of Birth - ${this.resident.dateOfBirth}`);
  }
}

class DogHouse extends AnimalHouse {
  declare resident: Dog;

  constructor(dog: Dog) {
    super(dog);
  }

  displayResidentInfo(): void {
    console.log(
      `Resident Info: Breed - ${this.resident.breed}, Date of Birth - ${this.resident.dateOfBirth}`
    );
  }
}

// Create an instance of Dog
const myDog: Dog = {
  dateOfBirth: new Date("2020-05-15"),
  breed: "Golden Retriever",
};

// Create an instance of DogHouse
const myDogHouse = new DogHouse(myDog);

// Output the information
myDogHouse.displayResidentInfo();

const id = <T>(x: T): T => x

console.log(id<number>(282329238238932823)); // ==> simple generic example


// ================================= GENERIC

// type UserData = {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: User[]
// };

type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

type GenericData<Type> = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Type[]
}

let users: GenericData<User> = {
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

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}

let personGeneric = merge(
    { name: 'John' },
    { age: 25 }
);

console.log(personGeneric);