// Arrays in JavaScript

let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry

// Modifying elements
fruits[1] = "Blueberry";
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]

// Array methods
fruits.push("Date"); // Add to the end
console.log(fruits); // ["Apple", "Blueberry", "Cherry", "Date"]

fruits.pop("Date"); // Remove from the end
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]

fruits.unshift("Apricot"); // Add to the beginning
console.log(fruits); // ["Apricot", "Apple", "Blueberry", "Cherry"]

fruits.shift(); // Remove from the beginning
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
console.log(fruits.indexOf("Cherry")); // Find index of an element

console.log(fruits.length); // Length of the array

fruits.splice(1, 1); // Remove 1 element at index 1
console.log(fruits); // ["Apple", "Cherry"]

fruits.splice(1, 0, "Blueberry"); // Add "Blueberry" at index 1
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]

// Looping  over through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Note: Uncomment the console.log statements to see the output in the console.

///calculate sum of 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 5 is: ", sum);


//function to calculate factorial of a number
function factorial(n) {
   if (n === 0 || n === 1){
      return 1;
   } else {
      return n*factorial(n-1);
   }
}
console.log("factorial of 5 is:", factorial(5));



/// print even numbers from 1 to 10
for (let i=1; i<=10; i++) {
if (i % 2 === 0) {     // for even numbers
   console.log(i);
}
}

/// print odd numbers from 1 to 10
for (let i=1; i<=10; i++) {   
if (i % 2 !== 0) {     // for odd numbers
   console.log(i);
}  
}



/// create a function to check even number

function isEven(num) {
   return num % 2 === 0;
}
console.log("Is 4 even? ", isEven(4)); // true
console.log("Is 7 even? ", isEven(7)); // false


/// create a function to check prime number

function isPrime(num) {
   if (num <= 1) {
      return false;
   }
   for (let i=2; i<=Math.sqrt(num); i++) {
      if (num % i === 0) {
         return false;
      }
   }
   return true;
}
console.log("Is 7 prime? ", isPrime(7)); // true
console.log("Is 10 prime? ", isPrime(10)); // false


// create a game where you start with any random game number . ask the user to keep guessing the game number until the user enters correct number

let gamenumber = 25; // random game number
let usernum = prompt("Guess the game number between 1 to 100:");

while (usernum != gamenumber) {
    usernum = prompt("Wrong guess! Try again:");
}

console.log("Congratulations! You guessed the correct number.");





