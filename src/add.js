const add = (param1, param2) => {
  // Check if both parameters are numbers
  if (typeof param1 === "number" && typeof param2 === "number") {
    // Both are numbers, so add them
    return param1 + param2;
  }

  // Check if both parameters are strings
  if (typeof param1 === "string" && typeof param2 === "string") {
    // Both are strings, so concatenate them
    return param1 + param2;
  }

  // If parameters are of different data types, convert both to strings and concatenate them
  return String(param1) + String(param2);
};

const unitTestExampleOne = () => {
  // Test adding two numbers
  console.log("Test 1: Adding two numbers (2 and 3)");
  console.log(add(2, 3) === 5 ? "Passed" : "Failed");
};

const unitTestExampleTwo = () => {
  // Test adding two non-numeric strings
  console.log('Test 2: Adding two non-numeric strings ("Hello " and "world")');
  console.log(add("Hello ", "world") === "Hello world" ? "Passed" : "Failed");
};

const unitTestExampleThree = () => {
  // Test adding a number and a string
  console.log('Test 3: Adding a number and a string (5 and " apples")');
  console.log(add(5, " apples") === "5 apples" ? "Passed" : "Failed");
};

unitTestExampleOne();
unitTestExampleTwo();
unitTestExampleThree();
