// Q19. Scope and Hoisting. Which statement executes successfully? Which statement
// produces an error? Explain the role of hoisting and the Temporal Dead Zone (TDZ).
// console.log(a);
// var a = 10;
// console.log(b);
// let b = 20;

// Answer: first console.log(a) undefined, because var declarations are hoisted
// and initialized to undefined. second console.log(b) throws a ReferenceError because b is in the
// Temporal Dead Zone (TDZ) from the start of its scope until the let declaration is initialized. Because the
// error occurs, b is not printed.