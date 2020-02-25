/* esline-disable */
let age;
console.log(age);
age = 10;

/* What does this file do? */
sayHi();

/* How does this file do it? */
function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

const add = (a, b) => a + b;

// Javascript will on page load hoist all the function and varible declarations to the top to ensure that if/when called they function 

