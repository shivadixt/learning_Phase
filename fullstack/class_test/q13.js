// Q13. Object methods and this: Predict the output. What does this refer to during this
// method call?
// const employee = {
//  name: "Aman",
//  salary: 30000,
//  showDetails() {
//  console.log(this.name, this.salary);
//  }
// };
// employee.showDetails();

// Answer:Aman 30000
// this refers to the employee object because showDetails is called as
// employee.showDetails().