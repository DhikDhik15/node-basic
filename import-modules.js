//CREATE SIMPLE FUNCTION
// function sum(a, b){
// 	return a + b;
// }

//arrow function
const sum = (a, b) => {
  return a + b;
};

const equals = (a, b) => {
  return a * b;
};

//CREATE MODULE
module.exports = {
  sum,
  equals
};