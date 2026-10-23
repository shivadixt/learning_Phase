// Q10. Scope and variable declarations: Write the output in order. Explain why amount and
// discount behave differently.
// var amount = 100;
// function calculate() {
//  var amount = 200;
//  let discount = 20;
//  if (true) {
//  var amount = 300;
//  let discount = 50;
//  console.log(amount, discount);
//  }
//  console.log(amount, discount);
// }
// calculate();
// console.log(amount);

// Answer:
// 300 50
// 300 20
// 100
