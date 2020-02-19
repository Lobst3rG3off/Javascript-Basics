// // Function Definition
// function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
//   // this is the function body
//   console.log('Running Calculate Bill!!');
//   const total = billAmount + billAmount * taxRate + billAmount * tipRate;
//   return total;
// }

// // Function Call. Or **Run**
// const wesTotal = 500;
// const wesTaxRate = 0.3;
// // const myTotal = calculateBill(wesTotal, wesTaxRate);

// // Function Definition
// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// // const greeting = sayHiTo('Wes');
// // console.log(greeting);

// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function yell(name = 'Silly Goose') {
//   return `HEY ${name.toUpperCase()}`;
// }

// const myBill4 = calculateBill(100, undefined, 0.2);
// console.log(myBill4);

// eslint-disable-next-line spaced-comment
//function definition

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body

  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// function call
// const myTotal = calculateBill(100, 0.13);
// const myTotal2 = calculateBill(200, 0.13);
// console.log(myTotal, myTotal2);

// function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Bob');
// console.log(greeting);

// you can pass the same params because of scope and use the returned values to pass into other functions.
function doctorize(name) {
  return `Dr.${name}`;
}

function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined,0.2);
console.log(myBill4);
