// Define a function that accepts two numbers and returns their difference
function subtractNumbers(num1, num2) {
  return num1 - num2;
}

// Call the subtractNumbers function and store the result in a variable
const difference = subtractNumbers(10, 3);

// Log the difference to the console
console.log(`The difference between 10 and 3 is ${difference}`);

// Define an object representing a person
const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  hobbies: ["traveling", "photography", "yoga"],
  address: {
    street: "456 Elm St",
    city: "Somewhere",
    state: "NY",
    zip: "67890",
  },
};

// Log the person object to the console
console.log(person);

// Define an array of numbers
const numbers = [5, 10, 15, 20];

// Use a loop to iterate over the numbers array and log each number to the console
for (let i = 0; i < numbers.length; i++) {
  console.log(`Number ${i + 1} in the array is ${numbers[i]}`);
}

// Define a function that accepts an array of numbers and returns their product
function multiplyNumbers(numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
}

// Call the multiplyNumbers function and log the result to the console
console.log(`The product of [5, 10, 15, 20] is ${multiplyNumbers(numbers)}`);
