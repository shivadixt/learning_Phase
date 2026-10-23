// 1. What is the difference between == and ===?
// Answer: == compares values after type conversion when needed. === compares both value and type
// without type conversion.

// 2. What is the difference between undefined and null?
// Answer: undefined usually means a variable has been declared but not assigned a value, or a value is
// missing. null is an intentionally assigned empty or absent value.

// 3. What is the difference between for...in and for...of?
// Answer: for...in iterates over enumerable property keys (often array indexes). for...of iterates over
// values from an iterable, such as an array or string.

// 4. Can a function return another function? Give a real-world use case.
// Answer: Yes. For example, a function can create a customized multiplier: function multiplier(n) {
// return x => x * n; } This can be used to create reusable functions with preset settings.

// 5. What happens if a function has no explicit return statement?
// Answer: It returns undefined.

// 6. What is the difference between passing a primitive value and passing an object to a
// function?
// Answer: A primitive value is passed by value, so changing the parameter does not change the caller’s
// variable. An object’s reference is also passed by value; mutating the object through that reference can
// affect the same object seen by the caller, but reassigning the parameter does not reassign the caller’s
// variable.

// 7. What is the difference between shallow copying and deep copying an object?
// Answer: A shallow copy duplicates only the top-level properties, so nested objects may still be shared. A
// deep copy duplicates nested structures as well.

// 8. Why is NaN !== NaN true?
// Answer: NaN is not equal to any value, including itself, under JavaScript equality rules. Use
// Number.isNaN(value) to check for NaN.

// 9. What is the difference between function declarations and function expressions
// regarding hoisting?
// Answer: Function declarations are hoisted with their function body and can generally be called before
// their position in the code. Function expressions depend on the variable used to store them; the function
// value is not available before that assignment (and let/const variables are in the TDZ before
// initialization).

// 10. When would you use an arrow function instead of a regular function?
// Answer: Use an arrow function for concise callbacks and when you want this to come from the
// surrounding lexical scope. Use regular method syntax when the method needs this to refer to the object
// calling it.