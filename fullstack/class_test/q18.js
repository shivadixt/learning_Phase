// Q18. Type Coercion - Predict the Output. Predict the output of each statement and
// explain why.
// console.log([] + []);
// console.log([] + {});
// console.log("5" - - "2");
// console.log(null + 1);


// Answer:
// 1. "" (empty string) - both arrays convert to empty strings.
// 2. "[object Object]" - the array becomes an empty string and the object becomes "[object Object]".
// 3. 7 - "5" converts to 5 and -"2" converts to -2, so 5 - (-2) = 7.
// 4. 1 - null converts to 0 in numeric addition, so 0 + 1 = 1.