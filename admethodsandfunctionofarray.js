// forEach loops

let arr1 = [5, 2, 6, 1, 9, 0];
arr1.forEach((arr1) => {
  console.log(arr1 * arr1);
});

let array = (arr) => {
  console.log(arr ** 2);
};
arr.forEach(array);

// create a function using the function keyword that takes a string as argument and returns the vowels of a string.
const str = "Apna College";
const string = (str) => {
  let vowels = "";
  const vowel = "aeiouAEIOU";
  for (const element of str) {
    if (vowel.includes(element)) {
      vowels += element;
    }
  }
  return vowels;
};
console.log(string(str));

// create a function using the function keyword that takes an array of numbers as argument and returns the sum of squares of even numbers.
const numbers = [1, 2, 3, 4, 5, 6];
const sumOfSquaresOfEven = (numbers) => {
  let sum = 0;
  for (const num of numbers) {
    if (num % 2 === 0) {
      sum += num * num;
    }
  }
  return sum;
};
console.log(sumOfSquaresOfEven(numbers));

// create a function using the function keyword that takes a string as argument and returns the string in reverse order.
const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
console.log(reverseString("Apna College"));

// create a function using the function keyword that takes an array of numbers as argument and returns the largest number in the array.
const findLargestNumber = (arr) => {
  let largest = arr[0];
  for (const num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
};
console.log(findLargestNumber([3, 5, 7, 2, 8, 1]));

// create a function using the function keyword that takes an array of strings as argument and returns the longest string in the array.
const findLongestString = (arr) => {
  let longest = arr[0];
  for (const str of arr) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
};
console.log(findLongestString(["apple", "banana", "cherry", "date"]));

// Map method
let arr2 = [5, 2, 6, 1, 9, 0];
let newarr2 = arr2.map((array) => {
  return array + 1;
});
console.log(newarr2);

// Filter method
let arr3 = [5, 2, 6, 1, 9, 0];
let newarr3 = arr3.filter((val) => {
  return val % 3 === 0;
});
console.log(newarr3);

// Reduce method
const arr4 = [5, 2, 6, 1, 9, 20];
const initialValue = 0;
const sum = arr4.reduce(
  (result, value) => (result > value ? result : value),
  initialValue
);
console.log(sum);
