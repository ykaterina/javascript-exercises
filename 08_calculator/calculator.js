const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function(args){
  return args.reduce((sum, num) => {
    return sum + num;
  }, 0);
};

const multiply = function(args){
  return args.reduce((total, num) => {
    return total * num;
  }, 1);
};

const power = function(a, b) {
  let total = 1;
  for(let i = 1; i <= b; i++)
    total *= a;
  return total;
};

const factorial = function(num) {
	let total = 1;
  for(let i = num; i > 0; i--)
    total *= i;
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
