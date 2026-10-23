// Q14. Rest parameters and spread syntax: Predict both outputs and explain the difference
// between the two function calls.
// function addNumbers(...numbers) {
//  return numbers.length;
// }
// const values = [10, 20, 30, 40];
// console.log(addNumbers(values));
// console.log(addNumbers(...values));

// Answer:
// 1
// 4
// In addNumbers(values), the entire array is passed as one argument. In addNumbers(...values), spread
// syntax expands the array into four separate arguments.
