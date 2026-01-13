// data types in JavaScript
let name = "Jeetendra Ahirwar"; // string
let students = {
  name: "Jeetendra Ahirwar",
  age: 22,
  hobbies: ["coding", "reading", "gaming"],
  isGraduated: false,
};
console.log(students);
console.log(typeof students);
console.log(name);

let x =  Symbol("hello");
console.log(typeof x);

// Operators in JavaScript
// Arithmetic Operators

let a = 10;
let b = 5;
let c = "10";
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation


// Comparison Operators

console.log(a == c); // Equality
console.log(a === c); // Strict Equality
console.log(a != b); // Inequality
console.log(a !== c); // Strict Inequality   
console.log(a > b); // Greater Than
console.log(a < b); // Less Than
console.log(a >= b); // Greater Than or Equal To
console.log(a <= b); // Less Than or Equal To         

// Logical Operators
console.log(a > b && a === 10); // Logical AND
console.log(a < b || a === 10); // Logical OR
console.log(!(a === b)); // Logical NOT 

// Assignment Operators
let a = 10;
let b = 5;

a += b; // a = a + b
console.log(a);

a -= b;  // a = a - b
console.log(a);

a *= b;  // a = a * b
console.log(a);

a /= b;  // a = a / b
console.log(a);

a %= b;  // a = a % b
console.log(a);

// Increment and Decrement Operators
let a = 10;
let b = 5;
console.log(++a); // Pre-increment
console.log(a++); // Post-increment
console.log(--a); // Pre-decrement
console.log(a--); // Post-decrement

console.log(++b); // Pre-increment
console.log(b++); // Post-increment
console.log(--b); // Pre-decrement
console.log(b--); // Post-decrement
 
// ternary operator
let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); 

// End of Operators in JavaScript
