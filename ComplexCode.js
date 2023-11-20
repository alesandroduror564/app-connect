/* 
Filename: ComplexCode.js
Content: Complex Code Example
*/

// Define a class named Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to print the person's details
  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Define a class named Employee that extends Person
class Employee extends Person {
  constructor(name, age, id, department) {
    super(name, age);
    this.id = id;
    this.department = department;
  }

  // Method to print the employee's details
  printDetails() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, ID: ${this.id}, Department: ${this.department}`
    );
  }
}

// Create an instance of Employee class
const employee = new Employee("John Doe", 30, "E123", "IT");

// Print employee's details
employee.printDetails();



// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to sort an array of numbers in ascending order
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Function to calculate the factorial of a number
function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}

// Function to check if a given string is a palindrome
function checkPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Generate a random number between 1 and 100 (inclusive)
const randomNumber = getRandomNumber(1, 100);

console.log(`Generated Random Number: ${randomNumber}`);

// Generate an array of random numbers
const randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(getRandomNumber(1, 100));
}

console.log("Random Array:", randomArray);

// Sort the random array in ascending order
const sortedArray = sortArray(randomArray);

console.log("Sorted Array:", sortedArray);

// Calculate factorial of randomNumber
const factorial = calculateFactorial(randomNumber);

console.log(`Factorial of ${randomNumber}: ${factorial}`);

// Check if a given string is a palindrome
const str = "madam";
const isPalindrome = checkPalindrome(str);

console.log(`"${str}" is a palindrome? ${isPalindrome}`);