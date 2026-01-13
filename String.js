let str = "Hello World!";
//// Basic String Methods

console.log(str.length); // Length of the string

console.log(str.toUpperCase()); // Convert to uppercase
console.log(str.toLowerCase()); // Convert to lowercase

console.log(str.indexOf("World")); // Find index of substring

console.log(str.slice(0, 5)); // Extract substring

console.log(str.replace("World", "JavaScript")); // Replace substring

console.log(str.split(", ")); // Split string into array

console.log(str.trim()); // Remove whitespace from both ends

console.log(str.charAt(7)); // Get character at index 7

console.log(str.includes("Hello")); // Check if substring exists

console.log(str.startsWith("Hello")); // Check if string starts with substring

console.log(str.endsWith("!")); // Check if string ends with substring

console.log(str.repeat(2)); // Repeat the string 2 times

console.log(str.concat(" Welcome to JavaScript.")); // Concatenate strings

// Template Literals
// String Interpolation
let name = "Alice";
let age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);