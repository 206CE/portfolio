\n

const string = "Hello, World!";
string[0] = "h"; // This will not change the string

console.log(string);

Template literals:
const name = "Alice";
const greeting = `Hello, ${name}!`;

string.charCodeAt(0); // Returns the Unicode value of the character at index 0
string.fromCharCode(104); // Returns the character for the Unicode value 104, which is 'h'

string.indexOf("World"); // Returns the index of the first occurrence of "World"
string.includes("World"); // Returns true if "World" is found in the string
string.slice(0, 5); // Returns "Hello"
string.toUpperCase(); // Returns "HELLO, WORLD!"
string.toLowerCase(); // Returns "hello, world!"
string.replace("World", "JavaScript"); // Returns "Hello, JavaScript!"
string.repeat(3)
string.trim(); // Removes whitespace from both ends of the string
string.trimStart(); // Removes whitespace from the start of the string
string.trimEnd(); // Removes whitespace from the end of the string
window.prompt("Enter your name:"); // Displays a dialog box prompting the user to enter a value
window.alert("This is an alert!"); // Displays an alert dialog box with a message
window.confirm("Are you sure?"); // Displays a dialog box with OK and Cancel buttons

undefinedVariable; // This will throw a ReferenceError if the variable is not defined NaN; // Represents a value that is not a number
null; // Represents the intentional absence of any object value
Infinity; // Represents positive infinity
- Infinity; // Represents negative infinity

switch (dayOfWeek) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    break;
}

function addNumbers(x, y, z) {
 return x + y + z;
}

console.log(addNumbers(1, 2, 3)); // Outputs: 6

const calculateTotal = (amount, taxRate = 0.05) => {
  return amount + (amount * taxRate);
}

console.log(calculateTotal(100)); // Outputs: 105

const multiplyNumbers = (x, y) => {
  return x * y;
}

const developers = ["Jesica", "John", "Alice"];

developers.length; // Returns the number of elements in the array
developers.push("Bob"); // Adds "Bob" to the end of the array
developers.pop(); // Removes the last element from the array
developers.shift(); // Removes the first element from the array
developers.unshift("Charlie"); // Adds "Charlie" to the beginning of the array
developers.indexOf("Alice"); // Returns the index of "Alice" in the array
developers.splice(1, 2); // Removes 2 elements starting from index 1
developers.includes("John"); // Returns true if "John" is found in the array
developers.concat(["Eve", "Frank"]); // Combines two arrays
developers.slice(1, 3); // Returns a new array with elements from index 1 to index 3 (exclusive)
developers.split(","); // Splits a string into an array based on the comma delimiter
developers.reverse(); // Reverses the order of elements in the array
developers.join(", "); // Joins the elements of the array into a string with ", " as the separator

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.name = "Bob"; // Changes the name property to "Bob"
person["age"] = 31; // Changes the age property to 31
delete person.city; // Deletes the city property
person.hasOwnProperty("name"); // Returns true if the object has a property named "name"
console.log("name" in person); // Returns true if the object has a property named "name"

new Object(); // Creates a new empty object

console.log(person.name?) // Optional chaining to safely access the name property

const {name, age} = person; // Destructuring assignment to extract properties from the object

const jsonString = JSON.stringify(person); // Converts the object to a JSON string
const parsedObject = JSON.parse(jsonString); // Parses the JSON string back into an object

for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs numbers from 0 to 4
}

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number); // Outputs each number in the array
}

const fruit = { name: "Apple", color: "Red", price: 1.5 };

for (const prop in fruit) {
  console.log(`${prop}: ${fruit[prop]}`);
}

let i = 5;

while (i > 0) {
  console.log(i); // Outputs numbers from 5 to 1
  i--;
}

do {
  console.log("This will run at least once");
} while (false); // This will not run again since the condition is false