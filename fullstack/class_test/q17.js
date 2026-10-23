// Q17. Fix the object method. Explain why the expected username may not be printed.
// Rewrite the method correctly and state one situation where using an arrow function is
// appropriate.
// const user = {
//  userName: "Rahul",
//  showName: () => {
//  console.log(this.userName);
//  }
// };
// user.showName();


// Answer: An arrow function does not get its own this; it inherits this from the surrounding scope, so it
// does not refer to the user object here. Correct method:
// const user = {
// userName: "Rahul",
// showName() {
// console.log(this.userName);
// }
// };
// user.showName();
// Output: Rahul. Arrow functions are suitable for callbacks when you want to preserve the surrounding
// this, such as a callback inside a method.
