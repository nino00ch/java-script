// Exercice Objects 1
// Exercice Objects
// Exercises

// Exercises: Level 1
// 1. Create an empty object called dog
// 2. Print the the dog object on the console
// 3. Add name, legs, color, age and bark properties for the dog object. The bark
// property is a method which return woof woof
// 4. Get name, legs, color, age and bark value from the dog object
// 5. Set new properties the dog object: breed, getDogInfo
class dog {
  constructor(name1, legs1, color1, age1) {
    this.name = name1;
    this.legs = legs1;
    this.color = color1;
    this.age = age1;
  }
  getDogInfo() {
    return `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}`;
  }
}

let dog1 = new dog("Buddy", 4, "Brown", 3);
let dog2 = new dog("Max", 4, "Black", 2);
let dog3 = new dog("Luna", 4, "White", 1);
console.log(dog1);
console.log(dog2);
console.log(dog);
// Exercises: Level 2
// 1. Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let maxSkillsUser = "";
let maxSkills = 0;

for (let user in users) {
  if (users[user].skills && users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    maxSkillsUser = user;
  }
}
console.log(maxSkillsUser);

// 2. Count logged in users,
let count = 0;
for (let user in users) {
  if (users[user].isLoggedIn) {
    count++;
  }
}
console.log({ loggedIn_users: count });

//count users having greater than equal to 50 points from
// the following object.
let countPoint = 0;
for (let user in users) {
  if (users[user].points >= 50) {
    countPoint++;
  }
}
console.log({ countPoint });

// EX: Level 3
// 1. Create an object literal called personAccount. It has firstName, lastName,
// incomes, expenses properties and it has totalIncome, totalExpense,
// accountInfo,addIncome, addExpense and accountBalance methods. Incomes
// is a set of incomes and its description and expenses is a set of incomes and
// its description.

const personAccount = {
    firstName: "",
    lastName: "",
    incomes: [],
    expenses: [],
  
    // Method to calculate total income
    get totalIncome() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
  
    // Method to calculate total expenses
    get totalExpense() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
  
    // Method to return account information
    accountInfo() {
      return `${this.firstName} ${this.lastName}'s Account:\nTotal Income: ${this.totalIncome}\nTotal Expenses: ${this.totalExpense}`;
    },
  
    // Method to add income
    addIncome(description, amount) {
      this.incomes.push({ description, amount });
    },
  
    // Method to add expense
    addExpense(description, amount) {
      this.expenses.push({ description, amount });
    },
  
    // Method to calculate account balance
    accountBalance() {
      return this.totalIncome - this.totalExpense;
    }
  };
  
  // Example usage:
  personAccount.firstName = "John";
  personAccount.lastName = "Doe";
  personAccount.addIncome("Salary", 3000);
  personAccount.addExpense("Rent", 1000);
  personAccount.addExpense("Groceries", 200);
  console.log(personAccount.accountInfo());
  console.log("Current Balance:", personAccount.accountBalance());
  

// imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to be added to the collection.
// If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 2 }],
    likes: ["fg12cy"],
  },
];

const signUp = (user, users) => {
  // register user
  let trouv = false;
  for (let index = 0; index < users.length; index++) {
    if (users[index].email === user.email) {
      trouv = true;
      return "user already exist";
    }
  }
  if (trouv === false) {
    users.push(user);
    return "user created successfully";
  }
};

function signIn(user, users) {
  // login user
  let trouv = false;
  for (let index = 0; index < users.length; index++) {
    if (
      users[index].email === user.email &&
      users[index].password === user.password
    ) {
      trouv = true;
      return "user logged in successfully";
    }
  }
  if (trouv === false) {
    return "user not found";
  }
}
console.log(signIn({ email: "ea_kelai@esi.dz", password: "123456" }, users));
console.log(signIn({ email: "thomas@thomas.com", password: "123333" }, users));

function RatingProduct(userId, rate, productId, products) {
  // rate product
  let trouv = false;
  let trouvP = false;
  for (let index = 0; index < products.length; index++) {
    if (products[index]._id === productId) {
      trouvP = true;
      for (let i = 0; i < products[index].ratings.length; i++) {
        if (products[index].ratings[i].userId === userId) {
          trouv = true;
          products[index].ratings[i].rate = rate;
          return "rating updated successfully";
        }
      }
      if (trouv === false) {
        products[index].ratings.push({ userId: userId, rate: rate });
        return "product rated successfully ";
      }
    }
  }
}

console.log(RatingProduct("fg12cy", 5, "aegfal", products));
console.log(products);
// log(ratingProduct("fg12cy", 4.5, "hedfcg", products));

// test signUp
const alex = {
  _id: "ab12ex",
  username: "Alex",
  email: "alex@alex.com",
  password: "123123",
  createdAt: "08/01/2020 9:00 AM",
  isLoggedIn: false,
};

const newUser = {
  _id: "aaaaa",
  username: "Youcef",
  email: "youcef@thomas.com",
  password: "123333",
  createdAt: "08/01/2020 10:00 AM",
  isLoggedIn: false,
};

console.log(signUp(alex, users));
console.log(signUp(newUser, users));
console.log(users);


// imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to be added to the collection.
// If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application
// Exercice Objects 6
// 1. The products array has three elements and each of them has six properties.
// 2. a. Create a function called rateProduct which rates the product
// 3. b. Create a function called averageRating which calculate the average rating
// of a product

// 4. Create a function called likeProduct. This function will helps to like to the
// product if it is not liked and remove like if it was liked.
