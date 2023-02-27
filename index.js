// Define a function that accepts two numbers and returns their sum
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Call the addNumbers function and store the result in a variable
const sum = addNumbers(4, 6);

// Log the sum to the console
console.log(`The sum of 4 and 6 is ${sum}`);

// Define an object representing a person
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "running", "cooking"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

// Log the person object to the console
console.log(person);

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use a loop to iterate over the numbers array and log each number to the console
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Define a function that accepts an array of numbers and returns their sum
function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Call the sumNumbers function and log the result to the console
console.log(`The sum of [1, 2, 3, 4, 5] is ${sumNumbers(numbers)}`);
