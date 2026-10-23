// Q15. Fix the variable scope issue. The developer wants to print the message after the if
// block, but the code produces an error. Identify the error, correct the code, and explain
// why the original code fails.
// if (true) {
//  let message = "Order placed successfully";
// }
// console.log(message);


// Answer: Error: message is not defined. The let variable is limited to the if block.
// Corrected code:
// let message = "Order placed successfully";
// if (true) {
// message = "Order placed successfully";
// }
// console.log(message);
// Output: Order placed successfully