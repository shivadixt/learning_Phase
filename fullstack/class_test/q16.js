// Q16. Fix the shopping cart calculation. Identify the logical error, correct the loop, and
// explain why the original code produces an incorrect result.
// function calculateCartTotal(...prices) {
//  let total = 0;
//  for (let i = 0; i <= prices.length; i++) {
//  total += prices[i];
//  }
//  return total;
// }
// console.log(calculateCartTotal(100, 200, 300));


// Answer: The loop condition should use <, not <=. With <=, the loop accesses prices[prices.length],
// which is undefined, making the total NaN. Corrected code:
// function calculateCartTotal(...prices) {
// let total = 0;
// for (let i = 0; i < prices.length; i++) {
// total += prices[i];
// }
// return total;
// }
// console.log(calculateCartTotal(100, 200, 300));
// Output: 600.