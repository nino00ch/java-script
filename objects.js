
/* ES6 features */
//classes
class Car {
  constructor(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.matricule = Math.random();
  }

  getFullInfo() {
    return `full name :  ${this.name} ${this.year} ${this.color}`;
  }
}

// class Transport {
//   constructor(type) {
//     this.type = type;
//   }
// }

// class Car extends Transport {
//   constructor(name1, year1, color1, type) {
//     super(type);
//     this.name = name1;
//     this.year = year1;
//     this.color = color1;
//   }
// }
// let carEx = new Car("BMW", 2021, "black", "urbain");
// console.log(carEx);

// class componentOne extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       year: "",
//       color: "",
//       matricule: "",
//       fullName: "",
//       isEdit: false
//     };
//   }

// Instentier une class :
let car1 = new Car("BMW", 2021, "black");
let car2 = new Car("Audi", 2020, "white");
let car3 = new Car("Mercedes", 2019, "red");
let car4 = new Car("Toyota", 2018, "blue");

// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(car4);

// console.log(car1.getFullInfo());

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getFullInfo() {
    return `Name: ${this.name} Age: ${this.age}`;
  }
}

let student1 = new Student("Sikhaled", 20);
let student2 = new Student("Souhail", 21);
// console.log(student1);
// console.log(student1.getFullInfo());

// //creation of objects
// let myCar1 = new Car("Ford", 2014, "Gray");
// let myCar2 = new Car("Audi", 2019, "Green");
// console.log(myCar1, myCar2);

const rectangle = {
  length: 20,
  width: 20,
};
// console.log(rectangle);

// console.log(rectangle.length); //20
// console.log(rectangle.width); //20

rectangle.width = 30;
rectangle.length = 25;

// console.log(rectangle);
// rectangle["length"] = 27;
// console.log(rectangle["length"]);
// console.log(rectangle);

// //Object.entries and Object.values
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

for (let i in person) {
  // console.log(i);
  console.log(person[i]);
}
let entries = Object.entries(person); //[["firstName", "John"], ["lastName", "Doe"], ["age", 50], ["eyeColor", "blue"]]
console.log(entries);

console.log(Object.values(person)); // [ 'John', 'Doe', 50, 'blue' ]
console.log(Object.keys(person)); //[ 'firstName', 'lastName', 'age', 'eyeColor' ]

